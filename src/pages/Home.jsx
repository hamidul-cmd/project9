import React from "react";
import Lefthero from "../Components/Lefthero";
import heroimg from "../assets/heroimg.png";

function Home() {
  const herobox = [
    {
      tittle: "Clients",
      number: "200+",
    },
    {
      tittle: "PROJECTS",
      number: "280+",
    },
    {
      tittle: "HAPPY CLIENTS",
      number: "100%",
    },
    {
      tittle: "FOLLOWER",
      number: "420K",
    },
    {
      tittle: "Years Of Experience",
      number: "10+",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7">
        <div className="xll:flex gap-4">
          <Lefthero
            tittle1="Digital Solutions"
            tittle2="That Drive Success"
            button="Start a Project"
            pera="At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape."
          />
          <div className="mt-5 rounded-xl overflow-hidden relative">
            <div>
              <img
                src={heroimg}
                alt=""
                className="block 3xl:w-[593px] 3xl:h-[465px]"
              />
              <a
                href="/"
                className="absolute top-0 right-0 p-2.5 bg-orange-60 rounded-full w-fit -rotate-45 xll:p-6"
              >
                <svg
                  className="h-6 w-6 xll:h-10 xll:w-10"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                    stroke="#0F0F0F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="p-6 bg-dark-12 3xl:p-7.5">
              <h3 className="text-xl font-medium leading-150 font-roboto__flex text-orange-95 mb-0.5 3xl:text-2xl 3xl:leading-150 3xl:mb-1">
                Estatein Real Estate
              </h3>
              <h5 className="text-base leading-150 text-gray-70 3xl:text-lg">
                Web Development.{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="mt-4 hidden xll:flex xll:gap-2.5 xll:p-2.5 border-2 border-dark-12 rounded-2xl 3xl:p-5 3xl:rounded-20 3xl:gap-5">
          {herobox.map((data) => {
            return (
              <div className=" py-5 bg-dark-10 rounded-xl flex flex-col gap-3 items-center grow 3xl:py-7.5 3xl:gap-5">
                <h5 className="text-sm font-medium leading-150 text-gray-70 font-roboto__mono 3xl:text-lg 3xl:leading-150">{data.tittle}</h5>
                <h5 className="text-40 font-semibold leading-7 text-orange-70 font-roboto__flex 3xl:text-60 number">{data.number}</h5>
              </div>
            );
          })}
          <a href="" className="flex gap-1.5 items-center justify-center bg-dark-10 rounded-xl grow 3xl:gap-2.5">
            <div className="p-3.5 bg-dark-6 border border-dark-15 rounded-full -rotate-45 3xl:p-5">
              <svg
                className="h-5 w-5 3xl:h-[28px] 3xl:w-[28px]"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                  stroke="#E7BEB1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="uppercase text-base font-medium leading-150 text-gray-70 font-roboto__mono 3xl:text-xl 3xl:leading-150">Know More</div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
