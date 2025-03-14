import React from "react";

function Transform() {
  const sliderData = [
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5">
        <div className="mb-2.5 p-7.5 bg-orange-60 rounded-14 font-roboto__flex space-y-4 transform__box xll:flex xll:justify-between xll:items-end xll:p-14.5 xll:rounded-2xl xll:space-y-0 3xl:p-20 3xl:mb-5">
          <div className="transform__text xll:w-[917px] 3xl:w-[1187px]">
            <h2 className="text-28 font-medium leading-150 text-dark-6 uppercase mb-0.5 xll:text-42 xll:tracking-tighter 3xl:text-58 3xl:mb-1 3xl:whitespace-nowrap">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-sm leading-150 text-dark-15 xll:text-base 3xl:text-lg">
              Take the first step towards digital success with NexGen by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business.
            </p>
          </div>
          <div>
            <a
              href="/"
              className="flex justify-center w-full items-center gap-2 py-3.5 px-6 bg-dark-6 rounded-xl text-sm font-medium leading-150 uppercase text-orange-90 3xl:py-4.8 3xl:px-[34px] 3xl:text-lg 3xl:gap-2.5"
            >
              <div>Get in Touch</div>
              <div>
                <svg
                  className="h-[22px] w-[22px] 3xl:h-[28px] 3xl:w-[28px]"
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
        <div className="h-[49px] w-full bg-dark-10 rounded-lg relative overflow-hidden xll:h-[56px] 3xl:h-[70px]">
          <div className="flex items-center gap-2 absolute top-0 h-full footer__slide xll:gap-4 3xl:gap-5">
            {sliderData.map((data, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 xll:gap-4 3xl:gap-5"
                >
                  <span className="text-sm font-roboto__mono leading-150 text-gray-40 whitespace-nowrap xll:text-base 3xl:text-xl">
                    {data}
                  </span>
                  <span className="block h-2 w-2 bg-orange-60 rounded-full"></span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Transform;
