import React from "react";

function SuccessCird({ icon, tittle, industry, service }) {
  return (
    <>
      <div className="text-white p-5 bg-dark-10 rounded-10 font-roboto__flex success_cird xll:w-1/2 xll:p-10 xll:rounded-xl 3xl:p-14.5 3xl:w-[747px]">
        <div className="mb-5 space-y-5 success_cird_top xll:flex xll:justify-between xll:mb-10 xll:space-y-0 3xl:mb-12.5">
          <div className="flex gap-2 items-center xll:gap-2.5 3xl:gap-3.5">
            <div className="p-3.5 bg-dark-12 border border-dark-20 rounded-10 3xl:p-4 3xl:rounded-xl">
              {icon}
            </div>
            <div className="text-xl font-medium leading-150 text-orange-95 uppercase xll:text-2xl xll:leading-150 3xl:text-3xl 3xl:leading-150">
              {tittle}
            </div>
          </div>
          <div>
            <a href="" className="flex gap-2 items-center 3xl:gap-2.5">
              <div className="p-2.5 bg-dark-12 border-dark-20 border rounded-full 3xl:p-3.5">
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 4.375L22.75 4.375C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25V18.375C23.625 18.8582 23.2332 19.25 22.75 19.25C22.2668 19.25 21.875 18.8582 21.875 18.375V7.36244L5.86872 23.3687C5.52701 23.7104 4.97299 23.7104 4.63128 23.3687C4.28957 23.027 4.28957 22.473 4.63128 22.1313L20.6376 6.125L9.625 6.125C9.14175 6.125 8.75 5.73325 8.75 5.25C8.75 4.76675 9.14175 4.375 9.625 4.375Z"
                    fill="#E7BEB1"
                  />
                </svg>
              </div>
              <div className="font-roboto__mono text-sm font-medium leading-150 text-gray-70 uppercase xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
                Visit Website
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-2 3xl:flex 3xl:space-y-0 3xl:gap-3">
          <div className="flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-dark-12 text-sm leading-150 w-fit xll:text-base xll:leading-150 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
            <span className="text-gray-70">Industry</span>
            <span className="block h-1 w-1 rounded-full bg-orange-60"></span>
            <span className="text-gray-90 font-medium">{industry}</span>
          </div>
          <div className="flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-dark-12 text-sm leading-150 w-fit xll:text-base xll:leading-150 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
            <span className="text-gray-70">Industry</span>
            <span className="block h-1 w-1 rounded-full bg-orange-60"></span>
            <span className="text-gray-90 font-medium">{service}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessCird;
