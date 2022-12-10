import AnimatedContactIcons from "./AnimatedContactIcons";
import BlogLink from "./BlogLink";
import NewsletterForm from "./NewsletterForm";
import { GetStaticProps } from "next";
import { BlogPosts } from "../types";
import Link from "next/link";

export const svgIconDValues = {
  twitter:
    "M58.882 11.6345C58.124 14.0685 56.515 16.1095 54.417 17.3935C56.469 17.1465 58.428 16.5845 60.248 15.7595C58.892 17.8475 57.17 19.6775 55.185 21.1475C55.201 21.5905 55.211 22.0445 55.211 22.4975C55.211 36.2595 44.997 52.1235 26.317 52.1235C20.584 52.1235 15.248 50.3965 10.752 47.4475C11.546 47.5405 12.355 47.5915 13.175 47.5915C17.929 47.5915 22.311 45.9265 25.786 43.1315C21.342 43.0495 17.594 40.0385 16.3 35.9035C16.918 36.0265 17.558 36.0885 18.212 36.0885C19.14 36.0885 20.038 35.9655 20.888 35.7225C16.238 34.7685 12.737 30.5565 12.737 25.5085V25.3855C14.108 26.1585 15.681 26.6325 17.341 26.6795C14.614 24.8125 12.825 21.6265 12.825 18.0175C12.825 16.1095 13.325 14.3155 14.196 12.7735C19.207 19.0795 26.689 23.2245 35.129 23.6575C34.954 22.8945 34.866 22.1005 34.866 21.2865C34.866 15.5375 39.413 10.8765 45.018 10.8765C47.941 10.8765 50.581 12.1345 52.432 14.1605C54.747 13.6965 56.918 12.8305 58.882 11.6345Z",
  github:
    "M60.439 32.119C60.439 43.175 53.3 52.553 43.397 55.873C42.13 56.118 41.683 55.338 41.683 54.668C41.683 53.847 41.714 51.145 41.714 47.799C41.714 45.461 40.914 43.934 40.02 43.165C45.574 42.541 51.409 40.427 51.409 30.81C51.409 28.077 50.443 25.837 48.842 24.087C49.102 23.453 49.954 20.912 48.593 17.462C48.593 17.462 46.504 16.792 41.745 20.029C39.755 19.473 37.62 19.197 35.5 19.187C33.38 19.197 31.245 19.473 29.255 20.029C24.496 16.792 22.397 17.462 22.397 17.462C21.041 20.912 21.898 23.453 22.158 24.087C20.557 25.837 19.586 28.077 19.586 30.81C19.586 40.401 25.41 42.552 30.949 43.18C30.237 43.809 29.593 44.911 29.364 46.526C27.94 47.171 24.329 48.277 22.106 44.448C22.106 44.448 20.786 42.048 18.287 41.871C18.287 41.871 15.85 41.84 18.115 43.393C18.115 43.393 19.752 44.162 20.885 47.051C20.885 47.051 22.345 51.925 29.286 50.408C29.296 52.501 29.317 54.076 29.317 54.668C29.317 55.333 28.865 56.102 27.618 55.873C17.705 52.564 10.561 43.18 10.561 32.119C10.561 18.288 21.726 7.08096 35.5 7.08096C49.274 7.08096 60.439 18.288 60.439 32.119Z",
  email:
    "M37.3988 35.2287L60.6371 17.2596C62.1458 16.0929 61.3209 13.6774 59.4137 13.6774H11.8561C9.92686 13.6774 9.11597 16.1394 10.6676 17.2859L34.9869 35.2551C35.7063 35.7867 36.6912 35.7759 37.3988 35.2287ZM60.0254 16.4685L36.7871 34.4377C36.4333 34.7112 35.9409 34.7166 35.5811 34.4508L11.2619 16.4817C10.4861 15.9084 10.8915 14.6774 11.8561 14.6774H59.4137C60.3673 14.6774 60.7798 15.8852 60.0254 16.4685ZM11.4485 26.9935C11.4485 26.7173 11.2247 26.4935 10.9485 26.4935C10.6724 26.4935 10.4485 26.7173 10.4485 26.9935V44.0641C10.4485 45.9971 12.0156 47.5641 13.9485 47.5641H57.6689C59.6019 47.5641 61.1689 45.9971 61.1689 44.0641V27.1455C61.1689 26.8694 60.9451 26.6455 60.6689 26.6455C60.3928 26.6455 60.1689 26.8694 60.1689 27.1455V44.0641C60.1689 45.4448 59.0496 46.5641 57.6689 46.5641H13.9485C12.5678 46.5641 11.4485 45.4448 11.4485 44.0641V26.9935Z",
};

const Footer = ({ blogPosts }: { blogPosts: BlogPosts[] }) => {
  // console.log(blogPosts);
  return (
    <footer className="relative min-h-screen sm:min-h-[45vh] overflow-hidden">
      <div className="w-64 h-64 bg-primary-blue/50 absolute -top-20 -left-20 rounded-full "></div>
      <div className="w-64 h-64 bg-primary-light-blue/50 absolute -bottom-20 -right-20 rounded-full "></div>
      <section className="px-4 border-t border-t-gray-600 md:px-4 backdrop-blur-[70px] inset-0 pt-10 sm:pt-14 md:pt-20 flex flex-col justify-between items-center">
        <section
          className="xs:px-4 xs:max-w-[425px] sm:px-0 mx-auto sm:mx-0 sm:w-full sm:max-w-none flex flex-col sm:flex-row 
         justify-between items-start space-y-8 sm:space-y-0 sm:space-x-8 xl:max-w-screen-xl xl:mx-auto xl:px-4"
        >
          <div className="order-1 md:pl-0 basis-[35%]">
            <p className="cursor-default text-xl font-semibold mb-2">Blogs</p>
            <div className="space-y-4 mt-6">
              {blogPosts.map((el) => (
                <BlogLink
                  key={el.link}
                  image_url={el.thumbnail}
                  title={el.title}
                  description={el.description}
                  date={el.pubDate}
                  // link={/(?<=m\/)(.*)(?=\?)/.exec(el.link)}
                  link={[el.link]}
                />
              ))}
            </div>
          </div>
          <div className="order-3 flex justify-between w-full sm:w-auto sm:basis-[35%] sm:flex-col-reverse md:flex-row md:space-x-8 md:justify-around">
            <div className="sm:mt-8 md:mt-0">
              <p className="cursor-default text-xl font-semibold mb-2">
                Sitemap
              </p>
              <ul className="font-medium space-y-3 mt-6">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                {/* <li>
                <Link href="/blogs">Blog</Link>
              </li> */}
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="cursor-default text-xl font-semibold mb-2">
                Socials
              </p>
              <ul className="space-y-3 mt-6 font-medium max-w-[120px]">
                <AnimatedContactIcons
                  text="Twitter"
                  pathD={svgIconDValues.twitter}
                  spacing="space-x-4"
                  href="https://twitter.com/sabinbaniya_"
                />
                <AnimatedContactIcons
                  text="Github"
                  pathD={svgIconDValues.github}
                  spacing="space-x-4"
                  href="https://github.com/sabinbaniya"
                />
                {/* <AnimatedContactIcons text="Email" pathD={svgIconDValues.email} /> */}
              </ul>
            </div>
          </div>
          <div className="order-2 md:order-4">
            <p className="text-xl font-semibold">Sign Up for Newsletter</p>
            <p className="text-sm mt-6">
              I&apos;m planning to create a newletter. For Javascript & Web
              Development related content
            </p>
            <div className="mt-4 w-full">
              <NewsletterForm />
            </div>
          </div>
        </section>
        <div className="font-medium py-10 text-center">
          <span>Copyright &copy; Sabin Baniya {new Date().getFullYear()}</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
