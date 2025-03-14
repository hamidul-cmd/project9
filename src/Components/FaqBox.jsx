import React, { useState } from "react";

function FaqBox({ ans, question }) {
  const [showans, setshowans] = useState(false);
  return (
    <>
      <div
        className={`px-7.5 bg-dark-10 rounded-14 font-roboto__flex transition-all duration-500 ease-initial 3xl:px-14.5 ${
          showans ? "py-7.5 xll:py-10 3xl:py-14.5" : "py-6 xll:py-7.5 3xl:py-10"
        }`}
      >
        <div
          onClick={() => setshowans(!showans)}
          className={`flex gap-5 border-dark-15 cursor-pointer transition-all duration-500 ease-initial justify-between 3xl:gap-12.5 3xl:justify-between 3xl:w-full 3xl:items-center faq__top ${
            showans ? "border-b pb-5 xll:pb-6 3xl:pb-7.5" : "border-none pb-0"
          }`}
        >
          <h3 className="text-lg font-medium text-orange-95 leading-5 w-[238px] xll:w-[639px] xll:text-xl 3xl:text-22 faq__qqq">
            {question}
          </h3>
          <div className="h-10 w-10 bg-dark-12 border border-dark-20 rounded-full relative 3xl:h-[52px] 3xl:w-[52px]">
            <span className="block h-0.5 w-3.5 rounded-full bg-orange-80 absolute top-1/2 left-1/2 -translate-1/2 3xl:w-4"></span>
            <span
              className={`block h-0.5 w-3.5 rounded-full bg-orange-80 absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-200 ease-initial 3xl:w-4 ${
                showans ? "rotate-0" : "-rotate-90"
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`${
            showans ? "h-fit" : "h-[1px]"
          } overflow-hidden transition-all duration-500 ease-initial`}
        >
          <p
            className={`text-sm leading-150 text-gray-70  transition-all duration-500 ease-initial pt-5 faq__p xll:w-[639px] xll:pt-6 xll:text-base xll:leading-150 3xl:pt-7.5 3xl:text-lg 3xl:leading-150 3xl:w-[832px] faq__pera`}
          >
            {ans}
          </p>
        </div>
      </div>
    </>
  );
}

export default FaqBox;
