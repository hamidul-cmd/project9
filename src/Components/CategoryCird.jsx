import React from "react";

function CategoryCird({ tittle, icon, time, pera, category }) {
  return (
    <>
      <div className="p-6 rounded-10 bg-dark-10 font-roboto__flex xll:px-7.5 xll:py-12.5 3xl:px-10 3xl:py-14.5 3xl:rounded-14">
        <div className="flex mb-5 justify-between xll:mb-7.5 3xl:mb-10">
          <div className="flex items-center gap-2 3xl:gap-3.5">
            <div className="p-3.5 border border-dark-20 bg-dark-12 rounded-10 3xl:p-4">
              {icon}
            </div>
            <h3 className="text-base leading-150 font-medium text-orange-95 uppercase xll:text-lg xll:leading-150 3xl:text-2xl 3xl:leading-150">
              {tittle}
            </h3>
          </div>
          <a href="" className="hidden xll:flex items-center gap-2 3xl:gap-2.5">
            <div className="p-2.5 bg-dark-12 border border-dark-20 rounded-full 3xl:p-3.5">
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
            <span className="text-base font-medium leading-150 text-gray-70 font-roboto__mono uppercase 3xl:text-xl 3xl:leading-150">Details</span>
          </a>
        </div>
        <div className="mb-5 xll:mb-7.5 3xl:mb-10">
          <div className="flex items-center gap-1 py-1.5 px-2.5 rounded-full bg-dark-12 mb-2 w-fit xll:py-2 xll:px-3.5 3xl:py-2.5 3xl:px-4 3xl:mb-3 3xl:gap-2">
            <span className="text-12 leading-150 text-gray-70 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150">Category</span>
            <span className="block h-1 w-1 bg-orange-60 rounded-full"></span>
            <span className="text-12 leading-150 font-medium text-gray-90 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-1 py-1.5 px-2.5 rounded-full bg-dark-12 w-fit xll:py-2 xll:px-3.5 3xl:py-2.5 3xl:px-4 3xl:gap-2">
            <span className="text-12 leading-150 text-gray-70 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150">Time Taken</span>
            <span className="block h-1 w-1 bg-orange-60 rounded-full"></span>
            <span className="text-12 leading-150 font-medium text-gray-90 xll:text-sm xll:leading-150 3xl:text-lg 3xl:leading-150">
              {time} months
            </span>
          </div>
        </div>
        <p className="text-sm leading-150 text-gray-70 mb-5 xll:text-base xll:leading-150 xll:mb-0 3xl:text-lg 3xl:leading-150">{pera}</p>
        <a href="" className="flex items-center gap-2 xll:hidden">
          <div className="p-2.5 bg-dark-12 border border-dark-20 rounded-full">
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
          <span className="text-base font-medium leading-150 text-gray-70 font-roboto__mono uppercase">
            Details
          </span>
        </a>
      </div>
    </>
  );
}

export default CategoryCird;
