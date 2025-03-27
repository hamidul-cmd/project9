import React from "react";
import Lefthero from "../Components/Lefthero";
import CountUp from "react-countup";
import Commontittle from "../Components/Commontittle";
import MemberCird from "../Components/MemberCird";
import AchievementCird from "../Components/AchievementCird";
import AwardCird from "../Components/AwardCird";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";
import { membardata } from "../data/Memberdata";
import { awardsData } from "../data/AwardData";
import { achievementsData } from "../data/AchievementData";

function About() {
  const herodata = [
    {
      tittle: "Clients",
      number: "200",
      type: "+",
    },
    {
      tittle: "PROJECTS",
      number: "280",
      type: "+",
    },
    {
      tittle: "HAPPY CLIENTS",
      number: "100",
      type: "%",
    },
    {
      tittle: "FOLLOWER",
      number: "420",
      type: "K",
    },
  ];

  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7 about__hero xll:flex xll:gap-2.5 3xl:gap-5">
        <div className="md:flex gap-4 hero__wraper about__left">
          <Lefthero
            tittle1="Elevating Brands"
            tittle2="in the Digital Age"
            button="Start a Project"
            pera="At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape."
          />
        </div>
        <div className="p-2.5 bg-dark-10 rounded-16 mt-4 about__right xll:grow xll:flex xll:flex-col xll:justify-between xll:mt-0 3xl:p-5">
          <div className="grid grid-cols-2 gap-2.5 mb-2.5 3xl:gap-5 xll:mb-0">
            {herodata.map((data, i) => {
              return (
                <div
                  key={i}
                  className="py-4 bg-dark-12 rounded-xl text-center space-y-2.5 xll:py-6 xll:space-y-3.5 3xl:py-7.5 3xl:space-y-5"
                >
                  <h3 className="text-sm font-medium leading-150 text-gray-70 font-roboto__mono uppercase 3xl:text-lg 3xl:leading-150">
                    {data.tittle}
                  </h3>
                  <div className="text-40 font-semibold leading-7 text-orange-70 font-roboto__flex 3xl:text-60 3xl:leading-150">
                    <CountUp
                      start={0}
                      end={data.number}
                      duration={3}
                      delay={0}
                    />
                    <span>{data.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href=""
            className="py-5 px-4 flex gap-2 text-sm font-medium leading-150 text-gray-70 font-roboto__mono uppercase justify-center items-center xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150"
          >
            <div className="rotate-[135deg] p-2.5 bg-dark-12 border-dark-20 border rounded-full 3xl:p-3.5">
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
            <div>Know More</div>
          </a>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle
            tittle="Meet the brilliant minds behind NexGen"
            button="ALL Members"
          />
          <div className="grid grid-cols-1 gap-2.5 xll:grid-cols-4 mt-2.5 3xl:mt-5 3xl:gap-5 membar__grid">
            {membardata.map((data, i) => {
              return (
                <MemberCird
                  key={i}
                  name={data.name}
                  jobtittle={data.jobtittle}
                  img={data.img}
                  fb_link={data.fb_link}
                  twitter_link={data.twitter_link}
                  linkedin_link={data.linkedin_link}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <Commontittle tittle="Our Achievements" />
        <div className="grid grid-cols-1 gap-2.5 xll:grid-cols-4 3xl:gap-5 mt-2.5 3xl:mt-5 achievemunts__grid">
          {achievementsData.map((data, i) => {
            return (
              <AchievementCird
                key={i}
                date={data.date}
                tittle={data.tittle}
                pera={data.pera}
              />
            );
          })}
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Awards & Recognitions" />
          <div className="grid grid-cols-1 gap-2.5 xll:grid-cols-4 3xl:gap-5 mt-2.5 3xl:mt-5 awards__grid">
            {awardsData.map((data, i) => {
              return (
                <AwardCird
                  key={i}
                  date={data.date}
                  tittle={data.tittle}
                  pera={data.pera}
                />
              );
            })}
          </div>
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />
    </>
  );
}

export default About;
