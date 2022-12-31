import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import WorkSection from "../src/components/WorkSection";
import ContactSection from "../src/components/ContactSection";
import { BlogPosts } from "../src/types";
import medium_post_sample_data from "../public/medium_post_response.json";
import Layout from "../src/components/Layout";
import client from "../src/helpers/apollo-client";
import { gql } from "@apollo/client";

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

const Home: NextPage<{ data: BlogPosts[] }> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Sabin Baniya | Personal Portfolio Website</title>
      </Head>
      <Layout blogPosts={data}>
        <section className=" ">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </section>
      </Layout>
    </>
  );
};

export default Home;
