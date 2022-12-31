import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta
          name="description"
          content="Sabin Baniya is a full-stack web developer and UI Designer currently based in Pokhara, Nepal. This portfolio website is a showcase of all the past relevent experience in the field of web development & design. You can learn few things about me here, or also checkout my blog where I write about progamming in general."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
