import React from "react";

function JoinCird({ tittle, pera, icon, salare, experience, deadline }) {
  return (
    <>
      <div className="p-5 rounded-xl bg-dark-10 space-y-6 font-roboto__flex xll:p-10 xll:space-y-7.5 3xl:p-12.5 3xl:rounded-14 3xl:space-y-10">
        <div className="flex justify-between ">
          <div className="flex items-center gap-2.5 3xl:gap-3.5">
            <div className="p-4 bg-dark-12 border-dark-20 border rounded-lg 3xl:p-5">
              {icon}
            </div>
            <h3 className="text-xl font-medium leading-150 text-orange-95 xll:text-2xl xll:leading-150 uppercase 3xl:text-3xl 3xl:leading-150">
              {tittle}
            </h3>
          </div>
          <a
            href=""
            className="hidden xll:flex gap-2 items-center text-base leading-150 text-gray-70 font-medium uppercase font-roboto__mono 3xl:gap-2.5 3xl:text-xl 3xl:leading-150"
          >
            <div className="p-4 bg-dark-12 border-dark-20 border rounded-full 3xl:p-5">
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
            <div>View Details</div>
          </a>
        </div>
        <div className="space-y-3 xll:space-y-0 xll:flex xll:flex-wrap xll:gap-4 xll:pr-5 3xl:gap-5 3xl:p-0">
          <div className="py-2 px-3 flex gap-1.5 items-center text-sm leading-150 bg-dark-12 rounded-full w-fit 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
            <span className="text-gray-70">Salary</span>
            <span className="h-1 w-1 rounded-full block bg-orange-60"></span>
            <span className="text-gray-90 font-medium">{salare} per year</span>
          </div>
          <div>
            <div className="py-2 px-3 flex gap-1.5 items-center text-sm leading-150 bg-dark-12 rounded-full w-fit 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
              <span className="text-gray-70">Experience</span>
              <span className="h-1 w-1 rounded-full block bg-orange-60"></span>
              <span className="text-gray-90 font-medium">{experience}</span>
            </div>
          </div>
          <div>
            <div className="py-2 px-3 flex gap-1.5 items-center text-sm leading-150 bg-dark-12 rounded-full w-fit 3xl:py-2.5 3xl:px-4 3xl:gap-2 3xl:text-lg 3xl:leading-150">
              <span className="text-gray-70">Deadline</span>
              <span className="h-1 w-1 rounded-full block bg-orange-60"></span>
              <span className="text-gray-90 font-medium">{deadline}</span>
            </div>
          </div>
        </div>
        <div className="space-y-1.5 xll:space-y-2 3xl:space-y-3">
          <h4 className="text-base font-medium leading-150 text-orange-95 xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
            Skills
          </h4>
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
        <a href="" className="xll:hidden flex items-center gap-2">
          <div className="p-3.5 bg-dark-12 border-dark-20 border rounded-full">
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
          <div className="text-sm font-medium leading-150 text-gray-70 uppercase font-roboto__mono">
            View Details
          </div>
        </a>
        <a href="" className="btn__orenge block uppercase">
          Apply NoW
        </a>
      </div>
    </>
  );
}

export default JoinCird;
