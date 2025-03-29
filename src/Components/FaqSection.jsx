import React, { useState } from "react";
import FaqBox from "./FaqBox";
import Commontittle from "./Commontittle";

function FaqSection() {
  const faqdata = [
    {
      question: "How long does it take to complete a web development project?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you handle large-scale mobile app development projects?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question:
        "How do you ensure cross-platform compatibility for mobile apps?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "What is your approach to user experience (UX) design?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
    {
      question: "Can you integrate third-party APIs into our mobile app?",
      ans: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <Commontittle tittle="Frequently Asked Questions" button="View All" />
        <div className="mt-2.5 space-y-2.5 md:flex faq__perent xll:gap-2.5 md:space-y-0 3xl:gap-5 3xl:mt-5">
          <div className="left space-y-2.5 3xl:grow faq__box">
            {faqdata.map((data, i) => {
              return (
                <FaqBox
                  key={i}
                  question={data.question}
                  ans={data.ans}
                  isOpen={activeIndex === i}
                  onClick={() => handleToggle(i)}
                />
              );
            })}
          </div>
          <div className="right bg-dark-10 rounded-xl p-7.5 font-roboto__flex faq__from h-fit xll:grow xll:p-12.5 3xl:p-14.5 3xl:grow-0 3xl:w-[746px]">
            <form action="">
              <h3 className="text-lg font-medium leading-150 text-orange-95 pb-5 border-b border-dark-15 mb-5 uppercase xll:pb-7.5 xll:mb-7.5 3xl:text-2xl 3xl:leading-150 3xl:pb-12.5 3xl:mb-12.5">
                Ask your question
              </h3>
              <div className="mb-3.5 space-y-2 xll:mb-4 3xl:mb-5 3xl:space-y-2.5">
                <h4 className="text-base font-medium leading-6 text-orange-95 uppercase 3xl:text-lg 3xl:leading-6">
                  Name
                </h4>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-4 bg-dark-6 rounded-lg border-none  outline-none placeholder:text-base placeholder:leading-150 placeholder:text-gray-40 block w-full text-base leading-150 text-gray-40 xll:p-5 3xl:p-6 3xl:rounded-[18px]"
                  required
                />
              </div>
              <div className="mb-3.5 space-y-2 xll:mb-4 3xl:mb-5 3xl:space-y-2.5">
                <h4 className="text-base font-medium leading-6 text-orange-95 uppercase 3xl:text-lg 3xl:leading-6">
                  email
                </h4>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-4 bg-dark-6 rounded-lg border-none  outline-none placeholder:text-base placeholder:leading-150 placeholder:text-gray-40 block w-full text-base leading-150 text-gray-40 xll:p-5 3xl:p-6 3xl:rounded-[18px]"
                  required
                />
              </div>
              <div className="mb-5 space-y-2 xll:mb-7.5 3xl:space-y-2.5 3xl:mb-12.5">
                <h4 className="text-base font-medium leading-6 text-orange-95 uppercase 3xl:text-lg 3xl:leading-6">
                  Your Question
                </h4>
                <textarea
                  name="massage"
                  id="massage"
                  className="w-full block p-4 bg-dark-6 border-none outline-none h-24.5 resize-none rounded-lg placeholder:text-base placeholder:leading-150 placeholder:text-gray-40 text-base leading-150 text-gray-40 xll:h-[114px] 3xl:h-[172px] 3xl:p-6 3xl:rounded-10"
                  placeholder="Enter Your Question Here ....."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn__orenge w-full font-medium xll:font-medium cursor-pointer"
              >
                Send Your Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqSection;
