import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta
          name="description"
          content="Sabin Baniya is a full-stack web developer and UI Designer currently based in Pokhara, Nepal. You can learn few things about me here, or also checkout my blog where I write about progamming in general."
        />
        <meta
          name="google-site-verification"
          content="W4Hu3aVp0RbTg0s9pHDmPJcrqJ4bBtRvT4te5vQQp5Q"
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
