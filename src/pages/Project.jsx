import React from "react";
import Lefthero from "../Components/Lefthero";
import projectheroimg from "../assets/projectheroimg.png";
import Commontittle from "../Components/Commontittle";
import Worksection from "../Components/Worksection";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";
import FeaturesCird from "../Components/FeaturesCird";

function Project() {
  const feturescurddata = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5858 21.4142C13.1716 22 14.1144 22 16 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V6C22 4.11439 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2H16C14.1144 2 13.1716 2 12.5858 2.58579C12.0834 3.08814 12.0119 3.85306 12.0017 5.25L14 5.25C14.4142 5.25 14.75 5.58579 14.75 6C14.75 6.41421 14.4142 6.75 14 6.75H12V8.25H15C15.4142 8.25 15.75 8.58578 15.75 9C15.75 9.41421 15.4142 9.75 15 9.75H12V11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H12V14.25L15 14.25C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75L12 15.75V17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H12.0017C12.0119 20.1469 12.0834 20.9119 12.5858 21.4142Z"
            fill="#CE7D63"
          />
          <path
            d="M8 15.1935L8 7.21416C7.23101 7.53116 6.21665 7.80306 5.00018 7.80306C3.78352 7.80306 2.76904 7.53107 2 7.21401L2 15.1935C2 15.8161 2 16.1275 2.03777 16.433C2.08232 16.7934 2.166 17.1479 2.28733 17.4902C2.39019 17.7804 2.52943 18.0589 2.8079 18.6158L4.27639 21.5528C4.41343 21.8269 4.69357 22 5 22C5.30643 22 5.58657 21.8269 5.72361 21.5528L7.1921 18.6158C7.47057 18.0589 7.60981 17.7804 7.71267 17.4902C7.834 17.1479 7.91768 16.7934 7.96223 16.433C8 16.1275 8 15.8161 8 15.1935Z"
            fill="#CE7D63"
          />
          <path
            d="M8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5L2 5.95702C2.02634 5.97025 2.0532 5.98352 2.08057 5.99679C2.76149 6.32693 3.75513 6.65872 5.00018 6.65872C6.24523 6.65872 7.23887 6.32693 7.9198 5.99679C7.94704 5.98358 7.97378 5.97037 8 5.9572V5Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Strategic Planning",
      pera: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Customized Solutions",
      pera: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167V11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914V10.4167ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM12 17C16 17 16 16.1046 16 15C16 13.8954 14.2091 13 12 13C9.79086 13 8 13.8954 8 15C8 16.1046 8 17 12 17Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "User-Centric Approach",
      pera: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V9C11.25 8.58579 11.5858 8.25 12 8.25Z"
            fill="#CE7D63"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H14C14.4142 1.25 14.75 1.58579 14.75 2C14.75 2.41421 14.4142 2.75 14 2.75H10C9.58579 2.75 9.25 2.41421 9.25 2Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Timely Delivery",
      pera: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising quality.",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7 service__hero mt-5 xll:mt-12.5">
        <Lefthero
          tittle1="Empowering Your"
          tittle2="Digital Vision"
          button="Start a Project"
          pera="At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence."
        />
        <div className="mt-4 service__hero_right relative">
          <img
            src={projectheroimg}
            alt=""
            className="block w-full h-[364px] md:h-full"
          />
          <div className="absolute bottom-5 left-0 flex items-end justify-between w-full px-5 xll:bottom-6 xll:px-6 3xl:bottom-7.5 3xl:px-7.5">
            <a href="" className="flex gap-2 items-center 3xl:gap-2.5">
              <div className="p-2 bg-white rounded-full 3xl:p-2.5">
                <svg
                  className="h-5 w-5 3xl:h-6 3xl:w-6"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.625 4.375L22.75 4.375C22.9821 4.375 23.2046 4.46719 23.3687 4.63128C23.5328 4.79538 23.625 5.01794 23.625 5.25V18.375C23.625 18.8582 23.2332 19.25 22.75 19.25C22.2668 19.25 21.875 18.8582 21.875 18.375V7.36244L5.86872 23.3687C5.52701 23.7104 4.97299 23.7104 4.63128 23.3687C4.28957 23.027 4.28957 22.473 4.63128 22.1313L20.6376 6.125L9.625 6.125C9.14175 6.125 8.75 5.73325 8.75 5.25C8.75 4.76675 9.14175 4.375 9.625 4.375Z"
                    fill="#0f0f0f"
                  />
                </svg>
              </div>
              <span className="font-roboto__mono text-sm leading-150 text-white uppercase xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                View Blog
              </span>
            </a>
            <a
              href="/"
              className="block px-2.5 py-2 text-12 leading-150 text-white font-roboto__flex uppercase backdrop-blur-[20px] bg-[#ffffff33] rounded-md webket xll:py-2.5 xll:px-3.5 xll:text-sm xll:leading-150 xll:rounded-10"
            >
              Web Development.
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Key Features of Our Projects" />
          <div className="mt-2.5 3xl:mt-5 grid grid-cols-1 gap-2.5 3xl:gap-5 xll:grid-cols-4 features__grid">
            {feturescurddata.map((data, i) => {
              return (
                <FeaturesCird
                  key={i}
                  icon={data.icon}
                  tittle={data.tittle}
                  pera={data.pera}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Projects Showcase" />
          <Worksection />
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />
    </>
  );
}

export default Project;
