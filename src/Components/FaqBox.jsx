import React from "react";

function FaqBox({ ans, question, isOpen, onClick }) {
  return (
    <div
      className={`px-7.5 bg-dark-10 rounded-14 transition-all duration-500 ease-initial 3xl:px-14.5 ${
        isOpen ? "py-7.5 xll:py-10 3xl:py-14.5" : "py-6 xll:py-7.5 3xl:py-10"
      }`}
    >
      <div
        onClick={onClick}
        className={`flex gap-5 border-dark-15 cursor-pointer transition-all duration-500 ease-initial justify-between faq__top ${
          isOpen ? "border-b pb-5 xll:pb-6 3xl:pb-7.5" : "border-none pb-0"
        }`}
      >
        <h3 className="text-lg font-medium text-orange-95 leading-5 faq__qqq xll:text-xl xll:leading-150 3xl:text-22">
          {question}
        </h3>
        <div className="h-10 w-10 bg-dark-12 border border-dark-20 rounded-full relative">
          <span className="block h-0.5 w-3.5 rounded-full bg-orange-80 absolute top-1/2 left-1/2 -translate-1/2"></span>
          <span
            className={`block h-0.5 w-3.5 rounded-full bg-orange-80 absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-200 ${
              isOpen ? "rotate-0" : "-rotate-90"
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-fit" : "h-[1px]"
        } overflow-hidden transition-all duration-500`}
      >
        <p className="text-sm leading-150 text-gray-70 pt-5 faq__p xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">{ans}</p>
      </div>
    </div>
  );
}

export default FaqBox;
