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
import Image from "next/image";

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
          coverImage
          brief
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
  console.log(props);
  return (
    <>
      <Head>
        <title>{`${props.post.data.post.title} by Sabin Baniya`}</title>
        <meta
          name="description"
          content={
            props.post.data.post?.brief?.replace("\n", "") ||
            props.post.data.post.title
          }
        />
        <link
          rel="canonical"
          href={`https://sabinbaniya.com.np/blogs/${props.post.data.post.slug}`}
        />
        <meta property="og:title" content={props.post.data.post.title} />
        <meta
          property="og:description"
          content={
            props.post.data.post?.brief?.replace("\n", "") ||
            props.post.data.post.title
          }
        />
        <meta property="og:site_name" content="Sabin Baniya" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:url"
          content={`https://sabinbaniya.com.np/blogs/${props.post.data.post.slug}`}
        />
        <meta
          name="image"
          property="og:image"
          content={
            props.post.data.post.coverImage +
            "?w=300&h=157.5&fit=crop&crop=entropy&auto=compress,format&format=webp&fm=png"
          }
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={props.post.data.post.title} />
        <meta
          property="twitter:domain"
          content={
            "https://sabinbaniya.com.np/blogs/" + props.post.data.post.slug
          }
        />
        <meta
          property="twitter:description"
          content={
            props.post.data.post?.brief?.replace("\n", "") ||
            props.post.data.post.title
          }
        />
        <meta
          property="twitter:image"
          content={
            props.post.data.post.coverImage +
            "?w=600&h=315&fit=crop&crop=entropy&auto=compress,format&format=webp&fm=png"
          }
        />
      </Head>
      <Layout
        fromBlogs
        title={props.post.data.post.title}
        blogPosts={[] as BlogPosts[]}
      >
        <section className="max-w-3xl mx-auto mt-10 px-4">
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
          <Image
            src={props.post.data.post.coverImage}
            height={1080}
            width={1920}
            alt={props.post.data.post.title}
            className="rounded-lg mb-8 mt-4"
          />
          <div className="text-2xl sm:text-4xl leading-relaxed sm:leading-[1.7] font-bold my-8">
            <Markdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => {
                  // console.log(params);
                  return <h1>{children}</h1>;
                },
              }}
            >
              {props.post.data.post.title}
            </Markdown>
          </div>
          <div className={"mb-4 font-medium underline " + karla.className}>
            Published on:{" "}
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
