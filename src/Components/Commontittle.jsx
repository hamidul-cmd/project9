import React from "react";

function Commontittle({ tittle, button }) {
  return (
    <>
      <div className="flex items-center justify-between p-6 bg-dark-10 rounded-14 xll:p-10 3xl:p-12.5 3xl:rounded-16">
        <h2 className="text-28 font-semibold font-roboto__flex text-orange-95 leading-8 uppercase xll:text-38 3xl:text-5xl">
          {tittle}
        </h2>
        {button && (
          <a
            href=""
            className="hidden xll:flex xll:items-center gap-2 3xl:gap-2.5"
          >
            <div className="p-4 bg-dark-10 border border-dark-15 rounded-full 3xl:p-5">
              <svg
                className="h-6 w-6 3xl:h-6.7 3xl:w-6.7"
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
            <span className="text-base font-medium leading-150 font-roboto__mono text-gray-70 uppercase 3xl:text-xl 3xl:leading-150">
              {button}
            </span>
          </a>
        )}
      </div>
    </>
  );
}

export default Commontittle;
