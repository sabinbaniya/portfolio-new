import { GetServerSideProps } from "next";
import client from "../src/helpers/apollo-client";
import { gql } from "@apollo/client";
import glob from "glob";

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = "https://sabinbaniya.com.np";

  //   const pagesDir = "pages/**/*.tsx";
  //   let pagesPaths = glob.sync(pagesDir);

  //   pagesPaths = pagesPaths
  //     .filter((path) => !path.includes("["))
  //     .filter((path) => !path.includes("/_"))
  //     .filter((path) => !path.includes("404"))
  //     .filter((path) => !path.includes("api"))
  //     .filter((path) => !path.includes("sitemap.xml.tsx"));

  //   console.log(pagesPaths);

  //   const staticPaths = pagesPaths
  //     .map((staticPagePath) => staticPagePath.replace("pages/", ""))
  //     .filter((staticPage) => {
  //       return !["api"].includes(staticPage);
  //     })
  //     .map((staticPagePath) => {
  //       console.log(staticPagePath);

  //       return `${BASE_URL}/${staticPagePath.replace("index.tsx", "")}`;
  //     });

  const staticPaths = [`${BASE_URL}/`, `${BASE_URL}/blogs`];

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

  const dynamicPaths = data.user.publication.posts.map(
    (el: any) => `${BASE_URL}/blogs/${el.slug}`
  );

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
