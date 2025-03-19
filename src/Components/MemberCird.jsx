import React from "react";

function MemberCird({
  name,
  img,
  jobtittle,
  linkedin_link,
  fb_link,
  twitter_link,
}) {
  return (
    <>
      <div className="relative rounded-14 overflow-hidden px-6 py-7.5 3xl:px-7.5 3xl:py-10">
        <div className="absolute top-0 left-0 h-[55%] w-full bg-dark-15 z-10"></div>
        <div className="absolute bottom-0 left-0 h-[45%] w-full bg-[#191919] z-10"></div>
        <div className="relative z-20">
          <div className="mb-3 space-y-0.5 font-roboto__flex text-center xll:space-y-1 xll:mb-7.5">
            <h3 className="text-lg font-medium leading-150 text-orange-95 uppercase xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
              {name}
            </h3>
            <h4 className="text-sm leading-150 text-gray-70 3xl:text-lg 3xl:leading-150">
              {jobtittle}
            </h4>
          </div>
          <div className="space-y-6 3xl:space-y-7.5">
            <div>
              <img
                src={img}
                alt=""
                className="block w-full h-[166px] 3xl:h-[211px] membar__img"
              />
            </div>
            <div className="flex justify-center gap-2 3xl:gap-3.5">
              <a
                href={fb_link}
                className="block p-2.5 bg-dark-12 border-dark-20 border rounded-full 3xl:p-3"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1194 5.32003H16.9994V2.14003C16.0891 2.04538 15.1745 1.99865 14.2594 2.00003C11.5394 2.00003 9.67938 3.66003 9.67938 6.70003V9.32003H6.60938V12.88H9.67938V22H13.3594V12.88H16.4194L16.8794 9.32003H13.3594V7.05003C13.3594 6.00003 13.6394 5.32003 15.1194 5.32003Z"
                    fill="#E7BEB1"
                  />
                </svg>
              </a>
              <a
                href={twitter_link}
                className="block p-2.5 bg-dark-12 border-dark-20 border rounded-full 3xl:p-3"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02735 11.84 8.90996C10.2094 8.82749 8.61444 8.40292 7.15866 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58996V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37288 13.8058 5 13.81C4.74189 13.8069 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69108 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44996C20 8.27996 20 8.09996 20 7.91996C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                    fill="#E7BEB1"
                  />
                </svg>
              </a>
              <a
                href={linkedin_link}
                className="block p-2.5 bg-dark-12 border-dark-20 border rounded-full 3xl:p-3"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fill="#E7BEB1"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberCird;
