import React, { useState } from "react";

function Solution() {
  const [box, setbox] = useState("challenge");
  return (
    <>
      <div className="space-y-2.5 solution_cird mt-2.5 xll:w-1/2 xll:mt-0 xll:h-full 3xl:space-y-5 3xl:w-[953px] h-fit">
        <div className="flex gap-2.5 3xl:gap-3">
          <button
            onClick={() => setbox("challenge")}
            className={`grow py-3.5 rounded-lg font-roboto__flex text-sm font-medium leading-150 xll:grow-0 xll:px-5 uppercase 3xl:py-4.8 3xl:px-6 3xl:rounded-xl 3xl:text-lg 3xl:leading-150 cursor-pointer ${
              box === "challenge"
                ? "bg-orange-60 text-dark-6"
                : "text-gray-70 bg-dark-12"
            }`}
          >
            Challenge
          </button>
          <button
            onClick={() => setbox("soluton")}
            className={`grow py-3.5 rounded-lg font-roboto__flex text-sm font-medium leading-150 xll:grow-0 xll:px-5 uppercase 3xl:py-4.8 3xl:px-6 3xl:rounded-xl 3xl:text-lg 3xl:leading-150 cursor-pointer ${
              box === "soluton"
                ? "bg-orange-60 text-dark-6"
                : "text-gray-70 bg-dark-12"
            }`}
          >
            Solution
          </button>
          <button
            onClick={() => setbox("result")}
            className={`grow py-3.5 rounded-lg font-roboto__flex text-sm font-medium leading-150 xll:grow-0 xll:px-5 uppercase 3xl:py-4.8 3xl:px-6 3xl:rounded-xl 3xl:text-lg 3xl:leading-150 cursor-pointer ${
              box === "result"
                ? "bg-orange-60 text-dark-6"
                : "text-gray-70 bg-dark-12"
            }`}
          >
            Results
          </button>
        </div>
        {box === "soluton" && (
          <div className="p-6 rounded-xl bg-dark-10 space-y-2 xll:p-7.5 xll:space-y-2.5 h-full 3xl:p-10 3xl:rounded-14 3xl:space-y-3.5">
            <h2 className="font-roboto__mono text-2xl leading-150 text-orange-95 xll:text-[32px] uppercase 3xl:text-5xl 3xl:leading-150">
              Solution
            </h2>
            <p className="font-roboto__flex text-sm leading-150 text-gray-70 xll:text-base 3xl:text-lg 3xl:leading-150">
              Our team conducted a thorough analysis of their target audience
              and business objectives. We designed a modern and intuitive
              website with seamless navigation and a mobile-responsive layout.
              Additionally, we integrated an efficient checkout process and
              optimized the site for search engines.
            </p>
          </div>
        )}
        {box === "result" && (
          <div className="p-6 rounded-xl bg-dark-10 space-y-2 xll:p-7.5 xll:space-y-2.5 h-full 3xl:p-10 3xl:rounded-14 3xl:space-y-3.5">
            <h2 className="font-roboto__mono text-2xl leading-150 text-orange-95 xll:text-[32px] uppercase 3xl:text-5xl 3xl:leading-150">
              Results
            </h2>
            <p className="font-roboto__flex text-sm leading-150 text-gray-70 xll:text-base 3xl:text-lg 3xl:leading-150">
              Our team conducted a thorough analysis of their target audience
              and business objectives. We designed a modern and intuitive
              website with seamless navigation and a mobile-responsive layout.
              Additionally, we integrated an efficient checkout process and
              optimized the site for search engines.
            </p>
          </div>
        )}
        {box === "challenge" && (
          <div className="p-6 rounded-xl bg-dark-10 space-y-2 xll:p-7.5 xll:space-y-2.5 h-full 3xl:p-10 3xl:rounded-14 3xl:space-y-3.5">
            <h2 className="font-roboto__mono text-2xl leading-150 text-orange-95 xll:text-[32px] uppercase 3xl:text-5xl 3xl:leading-150">
              Challenge
            </h2>
            <p className="font-roboto__flex text-sm leading-150 text-gray-70 xll:text-base 3xl:text-lg 3xl:leading-150">
              Our team conducted a thorough analysis of their target audience
              and business objectives. We designed a modern and intuitive
              website with seamless navigation and a mobile-responsive layout.
              Additionally, we integrated an efficient checkout process and
              optimized the site for search engines.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Solution;
