import React from "react";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";

function Contact() {
  const leftbox = [
    {
      tittle: "General Inquiries",
      maill: "info@NexGen.com",
    },
    {
      tittle: "Business Collaborations",
      maill: "partnerships@NexGen.com",
    },
    {
      tittle: "Job Opportunities",
      maill: "careers@NexGen.com",
    },
  ];
  const inputs = [
    {
      tittle: "First Name",
      plaseholder: "Enter First Name",
      type: "text",
    },
    {
      tittle: "Last Name",
      plaseholder: "Enter Last Name",
      type: "text",
    },
    {
      tittle: "Email",
      plaseholder: "Enter your Email",
      type: "email",
    },
    {
      tittle: "Phone Number",
      plaseholder: "Enter Phone Number",
      type: "number",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7 grid grid-cols-1 gap-2.5 contact__grid xll:grid-cols-2">
        <div className="p-7.5 bg-dark-10 space-y-12.5 rounded-10 h-fit">
          <div className="flex gap-1.5">
            <button className="py-3.5 px-5 rounded-lg bg-orange-60 text-dark-6 text-sm font-medium leading-150 font-roboto__flex grow w-1/2 uppercase whitespace-nowrap">
              Phone Number
            </button>
            <button className="py-3.5 px-5 rounded-lg bg-orange-60 text-dark-6 text-sm font-medium leading-150 font-roboto__flex grow w-1/2 uppercase whitespace-nowrap">
              Emails
            </button>
            <button className="hidden xll:block py-3.5 px-5 rounded-lg bg-orange-60 text-dark-6 text-sm font-medium leading-150 font-roboto__flex grow w-1/2 uppercase whitespace-nowrap">
              Office Locations
            </button>
          </div>
          <div className="space-y-4">
            {leftbox.map((data, i) => {
              return (
                <div key={i} className="space-y-2.5">
                  <h4 className="text-sm leading-150 text-gray-50 font-roboto__flex">
                    {data.tittle}
                  </h4>
                  <div className="py-2 pl-5 pr-2.5 rounded-l-10 rounded-r-full flex justify-between items-center bg-dark-12 cursor-pointer">
                    <h3 className="text-sm font-medium leading-150 text-white font-roboto__mono">
                      {data.maill}
                    </h3>
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-dark-10 rounded-10 p-7.5">
          <form action="" className="grid grid-cols-1 gap-7.5 xll:grid-cols-2 xll:gap-10">
            {inputs.map((data, i) => {
              return (
                <div className="space-y-2.5">
                  <h3 className="text-base leading-150 uppercase font-medium text-orange-90 font-roboto__mono">{data.tittle}</h3>
                  <input type={data.type} placeholder={data.plaseholder} className="block w-full p-4 bg-dark-12 border border-dark-20 rounded-lg placeholder:text-sm placeholder:leading-150 placeholder:text-gray-50 placeholder:font-roboto__flex text-sm text-gray-50 leading-150 font-roboto__flex outline-none" />
                </div>
              );
            })}
            <div className="space-y-2.5 xll:col-span-2">
              <h3 className="text-base leading-150 uppercase font-medium text-orange-90 font-roboto__mono">Message</h3>
              <textarea name="massage" id="massage" placeholder="Enter your Message" className="block w-full h-[117px] p-4 bg-dark-12 border border-dark-20 rounded-lg placeholder:text-sm placeholder:leading-150 placeholder:text-gray-50 text-gray-50 text-sm leading-150 outline-none resize-none font-roboto__flex placeholder:font-roboto__flex"></textarea>
            </div>
            <div className="flex items-center gap-1.5 text-base leading-150 text-gray-70 font-roboto__flex cursor-pointer">
              <input type="checkbox" className="cursor-pointer" />
              <p>I agree with Terms of Use and Privacy Policy</p>
            </div>
            <button className="btn__orenge flex justify-center gap-2 items-center font-medium uppercase xll:ml-[70px] cursor-pointer">
              <span>Send Your Message</span>
              <div>
                <svg
                  className="h-6 w-6 3xl:h-6.7 3xl:w-6.7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </div>
            </button>
          </form>
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />c
    </>
  );
}

export default Contact;
