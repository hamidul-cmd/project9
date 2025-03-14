import React from "react";
import { data } from "react-router";

function Lefthero({ tittle1, tittle2, pera, button }) {
  const slide = [
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
    "Digital Markating",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
    "Digital Markating",
  ];
  return (
    <>
      <div className="px-6 py-7.5 rounded-xl bg-dark-10 font-roboto__flex xll:px-14.5 xll:pt-20 xll:pb-4 xll:rounded-2xl grow 3xl:px-20 3xl:pt-24.5 3xl:pb-5">
        <div className="mb-5">
          <div className="mb-1 xll:flex xll:gap-5 xll:items-center xll:mb-0.5 3xl:gap-7.5">
            <h1 className="text-28 font-semibold leading-150 text-orange-95 uppercase xll:text-58 3xl:text-78 3xl:leading-150">
              {tittle1}
            </h1>
            <div className="hidden xll:block">
              <a href="" className="flex items-center gap-2.5">
                <div className="w-fit p-2.5 rounded-full bg-orange-60 3xl:p-3.5">
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                      stroke="#0F0F0F"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xl font-medium leading-150  text-orange-60 3xl:text-2xl 3xl:leading-150">
                  {button}
                </div>
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-28 font-semibold leading-150 text-orange-95 uppercase mb-5 xll:text-58 3xl:text-78 3xl:leading-150">
              {tittle2}
            </h1>
            <div className="xll:hidden">
              <a href="" className="flex w-fit gap-2 items-center ">
                <div className="w-fit p-2.5 rounded-full bg-orange-60">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                      stroke="#0F0F0F"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
                <div className="text-xl font-medium leading-150 text-orange-60">
                  {button}
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm leading-150 text-gray-40 mb-7.5 xll:w-[722px] xll:mb-[78px] 3xl:text-lg 3xl:leading-150 3xl:w-[927px] 3xl:mb-[90px]">
          {pera}
        </p>
        <div className=" relative h-[49px] bg-dark-6 rounded-lg overflow-hidden 3xl:h-[70px]">
          <div className="absolute top-0 left-0 flex items-center gap-5 h-full slide w-fit">
            {slide.map((data, i) => {
              return (
                <div key={i} className="flex items-center gap-5 h-fit">
                  <span className="block h-[7px] w-[7px] rounded-full bg-orange-60"></span>
                  <span className="whitespace-nowrap text-sm uppercase font-roboto__mono text-gray-40 3xl:text-xl">
                    {data}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lefthero;
