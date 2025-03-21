import React from "react";
import Lefthero from "../Components/Lefthero";
import CountUp from "react-countup";
import Commontittle from "../Components/Commontittle";
import membar1 from "../assets/membar1.png";
import membar2 from "../assets/membar2.png";
import membar3 from "../assets/membar3.png";
import membar4 from "../assets/membar4.png";
import MemberCird from "../Components/MemberCird";
import AchievementCird from "../Components/AchievementCird";
import AwardCird from "../Components/AwardCird";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";

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
  const membardata = [
    {
      name: "John Smith",
      jobtittle: "Co-Founder & CEO",
      img: membar1,
      fb_link: "https://www.facebook.com/hamidulislam.maruf.5",
      twitter_link: "https://x.com/mdmaruf17204871",
      linkedin_link:
        "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
    {
      name: "Sarah Adams",
      jobtittle: "Head of Design",
      img: membar2,
      fb_link: "https://www.facebook.com/hamidulislam.maruf.5",
      twitter_link: "https://x.com/mdmaruf17204871",
      linkedin_link:
        "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
    {
      name: "Emily Johnson",
      jobtittle: "Lead Web Developer",
      img: membar3,
      fb_link: "https://www.facebook.com/hamidulislam.maruf.5",
      twitter_link: "https://x.com/mdmaruf17204871",
      linkedin_link:
        "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
    {
      name: "William Lee",
      jobtittle: "Lead Backend Developer",
      img: membar4,
      fb_link: "https://www.facebook.com/hamidulislam.maruf.5",
      twitter_link: "https://x.com/mdmaruf17204871",
      linkedin_link:
        "https://www.linkedin.com/in/hamidul-islam-maruf-9a1419353/",
    },
  ];
  const achievementsData = [
    {
      date: "September 2023",
      tittle: "Global Recognition for Innovation",
      pera: "In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital lands",
    },
    {
      date: "March 2019",
      tittle: "Industry Leadership Acknowledged",
      pera: "Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.",
    },
    {
      date: "August 2015",
      tittle: "Expansion into International Markets",
      pera: "Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.",
    },
    {
      date: "January 2010",
      tittle: "Pioneering the Digital Frontier",
      pera: "In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.",
    },
  ];
  const awardsData = [
    {
      date: "October 2017",
      tittle: "Digital Excellence Award",
      pera: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
    },
    {
      date: "March 2019",
      tittle: "Top Mobile App Development Agency",
      pera: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.",
    },
    {
      date: "July 2022",
      tittle: "Best Digital Marketing Campaign",
      pera: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.",
    },
    {
      date: "November 2024",
      tittle: "Innovative Tech Startup Award",
      pera: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.",
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
