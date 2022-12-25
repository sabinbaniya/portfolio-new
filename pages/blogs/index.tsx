import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div>
      Hi, this page is still under construction. checkout some of the latest
      blogs until the
      <br />
      <Link
        legacyBehavior
        href="/blogs/pinterest-masonry-grid-layout-with-tailwind-css-unsplash-api"
      >
        <a className="underline">
          Pinterest Masonry Grid Layout with Tailwind CSS & Unsplash API
        </a>
      </Link>
    </div>
  );
};

export default Blogs;
