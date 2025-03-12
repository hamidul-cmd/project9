import React from "react";

function ServiceCird({ tittle, pera, prize, icon }) {
  return (
    <>
      <div className="p-6 rounded-14 bg-dark-10 font-roboto__flex xll:p-14.5 3xl:p-20">
        <div className="mb-5 md:flex md:justify-between xll:mb-10 3xl:mb-12.5">
          <div className="flex gap-3.5 items-center xll:gap-2.5 3xl:gap-3.5">
            <div className="p-3.5 rounded-10 bg-dark-12 border border-dark-20 3xl:p-4">
              {icon}
            </div>
            <h3 className="text-xl font-medium leading-150 text-orange-95 3xl:text-22 3xl:text-3xl 3xl:leading-150 uppercase service__cird">
              {tittle}
            </h3>
          </div>
          <a href="" className="hidden md:flex items-center gap-2 3xl:gap-2.5">
            <div className="p-2.5 bg-dark-12 border border-dark-20 rounded-full 3xl:p-3.5">
              <svg
                className="h-5 w-5 3xl:w-6 3xl:h-6"
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
            <span className="text-base leading-150 text-gray-70 font-roboto__mono uppercase 3xl:text-xl 3xl:leading-150">
              Book A Call
            </span>
          </a>
        </div>
        <div className="mb-5 flex flex-col gap-1.5 xll:gap-4 3xl:gap-5 xll:mb-0">
          <h4 className="text-lg font-medium leading-150 text-orange-95 xll:order-2 xll:text-right xll:text-22 3xl:text-3xl 3xl:leading-150 uppercase">
            Starts From {prize}
          </h4>
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
        <a href="" className="md:hidden block btn__orenge font-medium">
          Book A Call
        </a>
      </div>
    </>
  );
}

export default ServiceCird;
