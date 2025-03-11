import React from "react";

function JourneyCird({ tittle, pera }) {
  return (
    <>
      <div className="bg-dark-10 p-6 rounded-xl font-roboto__flex xll:p-7.5 3xl:p-10 3xl:rounded-14">
        <div className="mb-6 xll:mb-7.5 3xl:mb-10">
          <h3 className="text-xl font-medium leading-150 uppercase mb-2 text-orange-95 xll:text-22 xll:mb-2.5 3xl:text-3xl 3xl:leading-150">
            {tittle}
          </h3>
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
        <a href="" className="flex w-full gap-2 items-center 3xl:gap-2.5">
          <div className="p-4 bg-dark-6 border border-dark-15 rounded-full 3xl:p-5">
            <svg
              className="h-5 w-5 3xl:h-6.7 3xl:w-6.7"
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
          <span className="text-base leading-150 text-gray-70">Learn More</span>
        </a>
      </div>
    </>
  );
}

export default JourneyCird;
