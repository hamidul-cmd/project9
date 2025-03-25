import React from "react";
import Commontittle from "../Components/Commontittle";
import blogcird1 from "../assets/blogcird1.png";
import blogcird2 from "../assets/blogcird2.png";
import blogcird3 from "../assets/blogcird3.png";
import blogimg from "../assets/blogimg.png";
import BlogCird from "../Components/BlogCird";
import RoundButton from "../Components/RoundButton";

function Blog() {
  const blogcirddata = [
    {
      img: blogcird1,
      tittle: "Optimizing Mobile User Experience for Higher Conversions",
      pera: "Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...",
    },
    {
      img: blogcird2,
      tittle: "Mastering the Art of Minimalistic Design",
      pera: "Simplicity and elegance take center stage in minimalistic design. Learn the principles of minimalism, how to effectively communicate with fewer elements...",
    },
    {
      img: blogcird3,
      tittle: "The Psychology of Visual Design in Branding",
      pera: "Uncover the impact of visual elements in branding and how they influence customer perceptions and emotions. Explore color psychology, typography choices...",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Our Blogs" button="See more blog" />
          <div className="grid grid-cols-1 gap-2.5 xll:grid-cols-3 mt-2.5 3xl:gap-5 3xl:mt-5 blog__grid">
            <div className="hidden xll:block">
              <img src={blogimg} alt="" className="block h-full w-full" />
            </div>
            <div className="hidden xll:block col-span-2 p-12.5 bg-dark-10 rounded-xl space-y-10 font-roboto__flex 3xl:p-14.5 3xl:space-y-12.5 3xl:rounded-14">
              <div className="space-y-4 3xl:space-y-5">
                <h3 className="text-2xl font-medium leading-150 text-orange-95 uppercase 3xl:text-3xl 3xl:leading-150">Web Design Trends Shaping 2024</h3>
                <div className="flex w-fit gap-4 3xl:gap-5">
                  <div className="flex items-center gap-1.5 py-2 px-3 bg-dark-12 rounded-full text-sm leading-150 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
                    <span className="text-gray-70">Category</span>
                    <span className="block h-1 w-1 bg-orange-60 rounded-full"></span>
                    <span className="font-medium text-gray-90">Design</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-2 px-3 bg-dark-12 rounded-full text-sm leading-150 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
                    <span className="text-gray-70">Read Time</span>
                    <span className="block h-1 w-1 bg-orange-60 rounded-full"></span>
                    <span className="font-medium text-gray-90">6 Mins</span>
                  </div>
                  <div className="flex items-center gap-1.5 py-2 px-3 bg-dark-12 rounded-full text-sm leading-150 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
                    <span className="text-gray-70">Author</span>
                    <span className="block h-1 w-1 bg-orange-60 rounded-full"></span>
                    <span className="font-medium text-gray-90">Laura Turner</span>
                  </div>
                </div>
              </div>
              <p className="text-base leading-150 text-gray-70 tracking-tight 3xl:text-lg 3xl:leading-150">
                Stay ahead of the design curve with insights into the latest web
                design trends. From immersive user experiences to bold color
                choices, explore the design elements that will dominate the
                digital landscape in 2023 and beyond.
              </p>
              <div className="flex justify-between items-center">
                <RoundButton name="Read Full Blog" />
                <div className="flex items-center gap-2.5 3xl:gap-3">
                  <h5 className="text-base leading-150 text-gray-70 3xl:text-lg 3xl:leading-150">Published Date</h5>
                  <h4 className="text-xl font-medium leading-150 text-orange-95 uppercase 3xl:text-2xl 3xl:leading-150">7th February 2023</h4>
                </div>
              </div>
            </div>
            {blogcirddata.map((data, i) => {
              return (
                <BlogCird
                  img={data.img}
                  tittle={data.tittle}
                  pera={data.pera}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
