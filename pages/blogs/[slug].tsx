import Head from "next/head";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Layout from "../../src/components/Layout";
import { BlogPosts } from "../../src/types";
import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../src/helpers/apollo-client";
import { gql } from "@apollo/client";
import { Karla, JetBrains_Mono } from "@next/font/google";

const karla = Karla({
  variable: "--font-karla",
  display: "swap",
});

const jetbrainMono = JetBrains_Mono({
  variable: "--jetbrains",
  display: "swap",
});

// import "highlight.js/styles/github.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(username: "sabinbaniya") {
          publication {
            posts {
              slug
            }
          }
        }
      }
    `,
  });

  const paths = data.user.publication.posts.map(
    (el: any) => `/blogs/${el.slug}`
  );

  // console.log(paths);

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const queryURL = ;
  const { data } = await client.query({
    query: gql`
      {
        post(
          slug: "${params?.slug}" ,
          hostname: "sabinbaniya"
        ) {
          _id
          sourcedFromGithub
          isRepublished
          followersCount
          cuid
          slug
          title
          type
          partOfPublication
          dateUpdated
          dateAdded
          tags {
            name
            slug
            logo
            tagline
          }
          contentMarkdown
          content
        }
      }
  `,
  });
  // console.log(data);
  return {
    // Passed to the page component as props
    props: { post: { data } },
  };
};

const Slugs = (props: any) => {
  // console.log(props.post.data.post.contentMarkdown);
  return (
    <>
      <Head>
        <title>{`${props.post.data.post.title} by Sabin Baniya`}</title>
      </Head>
      <Layout blogPosts={[] as BlogPosts[]}>
        <section className="max-w-3xl mx-auto mt-10">
          <div className="flex space-x-4">
            {props.post.data.post.tags.map((el: any) => (
              <Fragment key={el.slug}>
                <code
                  className={`${el.slug} px-2 rounded-full font-semibold font-`}
                >
                  #{el.name}
                </code>
              </Fragment>
            ))}
          </div>
          <div className="text-4xl leading-relaxed font-bold my-8">
            <Markdown rehypePlugins={[rehypeRaw]}>
              {props.post.data.post.title}
            </Markdown>
          </div>
          <div className={"mb-4 font-medium " + karla.className}>
            Created on:{" "}
            {new Date(props.post.data.post.dateAdded).toDateString()}
          </div>
          <div id="blog-post-body" className={"text-xl " + karla.className}>
            <Markdown
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  // const match = /language-(\w+)/.exec(className || '')
                  // return !inline && match ? (
                  //   <SyntaxHighlighter
                  //     children={String(children).replace(/\n$/, '')}
                  //     style={dark}
                  //     language={match[1]}
                  //     PreTag="div"
                  //     {...props}
                  //   />
                  // ) : (
                  return (
                    <code
                      className={className || "" + " " + jetbrainMono.className}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {props.post.data.post.content}
            </Markdown>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Slugs;
