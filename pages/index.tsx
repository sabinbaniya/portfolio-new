import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HeroSection from "../src/components/HeroSection";
import AboutSection from "../src/components/AboutSection";
import WorkSection from "../src/components/WorkSection";
import ContactSection from "../src/components/ContactSection";
import { BlogPosts } from "../src/types";
import medium_post_sample_data from "../public/medium_post_response.json";
import Layout from "../src/components/Layout";

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (process.env.NODE_ENV === "production") {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sabin-baniya"
    );
    const data = await res.json();
    return {
      props: {
        blogPosts: data.items as BlogPosts[],
      },
    };
  } else {
    return {
      props: {
        blogPosts: medium_post_sample_data.items,
      },
    };
  }
};

const Home: NextPage<{ blogPosts: BlogPosts[] }> = ({ blogPosts }) => {
  return (
    <>
      <Head>
        <title>Sabin Baniya | Personal Portfolio Website</title>
      </Head>
      <Layout blogPosts={blogPosts}>
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
