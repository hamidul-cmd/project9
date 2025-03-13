import React from "react";

function TestimonialsCird({ tittle, name, pera, img, position }) {
  return (
    <>
      <div className="rounded-10 overflow-hidden font-roboto__flex xll:rounded-14 3xl:rounded-16">
        <div className="h-[202px] p-6 bg-dark-10 xll:h-[266px] xll:p-7.5 3xl:h-[284px] 3xl:p-10">
          <h3 className="text-lg font-medium leading-150 text-orange-95 mb-4 uppercase xll:text-22 xll:mb-5 3xl:text-2xl 3xl:leading-150 3xl:mb-6">
            {tittle}
          </h3>
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">{pera}</p>
        </div>
        <div className="py-4 px-5 bg-dark-12 flex items-center justify-between xll:py-5 xll:px-7.5 3xl:py-7.5 3xl:px-10">
          <div className="flex items-center gap-2 xll:gap-2.5 3xl:gap-[15px]">
            <img src={img} alt="" className="block h-10 w-10 xll:h-12.5 xll:w-12.5 3xl:h-14.5 3xl:w-14.5" />
            <div>
              <h4 className="text-base font-medium leading-150 text-orange-90 xll:text-lg xll:leading-150 3xl:text-xl 3xl:leading-150">{name}</h4>
              <h5 className="text-sm leading-150 text-gray-50 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">{position}</h5>
            </div>
          </div>
          <div>
            <a href="/" className="block p-2.5 bg-dark-12 border border-dark-20 rounded-full 3xl:p-3.5">
              <div className="rotate-45 w-fit">
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
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsCird;
