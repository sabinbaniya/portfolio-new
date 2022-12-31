import { gql } from "@apollo/client";
import { Karla } from "@next/font/google";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../src/components/Layout";
import client from "../../src/helpers/apollo-client";

const karla = Karla({
  variable: "--font-karla",
  display: "swap",
});

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        user(username: "sabinbaniya") {
          publication {
            posts {
              slug
              title
              type
              totalReactions
              dateAdded
              brief
              coverImage
              contentMarkdown
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.user.publication.posts,
    },
  };
};

const Blogs = ({ data }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  // console.log(data);
  return (
    <>
      <Head>
        <title>All Blogs | Sabin Baniya</title>
      </Head>
      <Layout blogPosts={data}>
        <section className="px-4 my-14 xl:max-w-screen-xl xl:mx-auto">
          <div className="my-8">
            <p className="font-black text-center md:text-left text-5xl">
              Recent Blogs
            </p>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search by Title"
              className={`bg-background text-sm border-[4px] sm:border-[6px] sm:text-base rounded-xl p-4 border-[#272727] h-14 w-full md:w-96 block my-8 focus:outline-0 active:outline-0  autofill:bg-background transition-all  placeholder:font-semibold focus:border-[#3d3d3d]`}
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            {data
              .filter((el: any) => el.title.toLowerCase().includes(searchQuery))
              .map((el: any) => {
                return (
                  <Link key={el.slug} href={`/blogs/${el.slug}`}>
                    <div className="bg-gray-900 rounded-xl overflow-hidden hover:ring hover:ring-primary-blue hover:ring-offset-4 hover:ring-offset-background transition-all">
                      <Image
                        src={el.coverImage}
                        alt=""
                        height={1080}
                        width={1920}
                        className="sm:max-h-[200px] md:max-h-[150px] lg:max-h-[200px] object-cover"
                      />
                      <div className="px-4 py-2">
                        <p className="font-bold clip-text-2-line ">
                          {el.title}
                        </p>
                        <p
                          className={
                            "text-gray-500 text-sm font-medium clip-text-3-line " +
                            karla.className
                          }
                        >
                          {el.brief}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blogs;
