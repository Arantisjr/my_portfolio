import { GoArrowUpRight } from "react-icons/go";
import "../styles/Blog.css";
import Link from "next/link";
const Blogs = () => {
  return (
    <>
      <div className="blog_main_container">
        <div className="blog_nav">
            <Link href={'/writings'}>
          <p  className="flex gap-2 cursor-pointer items-center text-[var(--bold-text)]">
            Latest blogs <GoArrowUpRight />{" "}
          </p>
            </Link>
          <p className="text-[var(--text-color)]">
            I share my thoughts on life, coding tricks, and whatever&apos;s on my
            mind. Come along for the ride and subscribe to keep up!
          </p>
        </div>
        <div className="blog_main_div">
            
        </div>
      </div>
    </>
  );
};

export default Blogs;
