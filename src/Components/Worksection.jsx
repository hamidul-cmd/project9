import React from "react";
import WorkRightCird from "./WorkRightCird";
import CategoryCird from "./CategoryCird";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import miniimg from "../assets/miniimg.png";

function Worksection() {
  const workleftcird1 = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2081 4.26024L14.5395 4.65617C13.8052 5.09106 13.438 5.3085 13.0335 5.35916C12.629 5.40982 12.233 5.28797 11.441 5.04425L10.72 4.82236C7.93284 3.9647 6.53928 3.53588 5.70161 4.30257C4.86393 5.06927 5.13691 6.52373 5.68286 9.43265L5.8241 10.1852C5.97924 11.0118 6.05681 11.4252 5.9648 11.8289C5.87278 12.2327 5.62159 12.5812 5.11922 13.2783L4.66185 13.9129C2.89398 16.3658 2.01005 17.5922 2.44128 18.609C2.87252 19.6258 4.33333 19.7595 7.25495 20.0269L8.01083 20.0961C8.84105 20.1721 9.25619 20.2101 9.6038 20.409C9.95142 20.6078 10.1922 20.9451 10.6737 21.6196L11.1121 22.2337C12.8066 24.6073 13.6539 25.7942 14.7581 25.6559C15.8623 25.5176 16.4921 24.1457 17.7518 21.4021L18.0777 20.6923C18.2607 20.2938 18.3969 19.9972 18.5273 19.7649L23.8812 25.1188C24.2229 25.4605 24.7769 25.4605 25.1186 25.1188C25.4603 24.777 25.4603 24.223 25.1186 23.8813L19.9482 18.7109C20.0906 18.6591 20.2495 18.6035 20.4284 18.5408L21.1567 18.2858C23.9718 17.2998 25.3794 16.8069 25.6306 15.7046C25.8818 14.6024 24.8102 13.6209 22.6672 11.6578L22.1127 11.1499C21.5037 10.5921 21.1992 10.3131 21.0413 9.94066C20.8833 9.5682 20.8897 9.14437 20.9026 8.29673L20.9143 7.52496C20.9597 4.54199 20.9823 3.0505 20.0334 2.50757C19.0844 1.96465 17.7923 2.72985 15.2081 4.26024Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Zenith Fitness App",
      category: "Mobile App Development",
      time: "6",
      pera: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and",
    },
  ];
  const workleftcird2 = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7497 11.1539C22.7887 15.9863 18.7617 20.4556 13.9294 20.4166C9.09706 20.3777 5.28929 15.845 5.25029 11.0127C5.2113 6.18038 9.09706 2.29461 13.9294 2.3336C18.7617 2.3726 22.7107 6.32159 22.7497 11.1539ZM14.5904 6.12501C14.1072 6.12111 13.7123 6.50969 13.7084 6.99292C13.7045 7.47615 14.093 7.87105 14.5763 7.87495C16.0161 7.88657 17.1967 9.06725 17.2084 10.507C17.2123 10.9903 17.6072 11.3789 18.0904 11.375C18.5736 11.3711 18.9622 10.9762 18.9583 10.4929C18.939 8.09767 16.9856 6.14434 14.5904 6.12501Z"
            fill="#CE7D63"
          />
          <path
            d="M16.5281 21.2501C16.9157 22.4895 16.1125 23.7371 14.875 23.9885V25.6665C14.875 26.1497 14.4833 26.5415 14 26.5415C13.5168 26.5415 13.125 26.1497 13.125 25.6665V23.9885C11.8876 23.7371 11.0844 22.4895 11.4719 21.2501L11.48 21.2252C12.255 21.4512 13.0716 21.5762 13.92 21.5831C14.8195 21.5903 15.6908 21.4635 16.5194 21.2227C16.5224 21.2319 16.5253 21.241 16.5281 21.2501Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "A-Aura Ecommerce",
      category: "Web Design & Development",
      time: "3",
      pera: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    },
  ];
  const workrightcird1 = [
    {
      tittle: "Technologies Used",
      tac: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      tittle2: "Team Members",
      img: [miniimg, miniimg, miniimg, miniimg, miniimg],
    },
  ];
  const workrightcird2 = [
    {
      tittle: "Technologies Used",
      tac: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "React"],
      tittle2: "Team Members",
      img: [miniimg, miniimg, miniimg, miniimg, miniimg],
    },
  ];
  return (
    <>
      <div className="p-2.5 border-2 border-dark-12 rounded-16 grid grid-cols-1 gap-2.5 mt-2.5 xll:grid-cols-3 workgrid 3xl:gap-5 3xl:mt-5">
        {workleftcird1.map((data, i) => {
          return (
            <CategoryCird
              tittle={data.tittle}
              icon={data.icon}
              time={data.time}
              pera={data.pera}
              category={data.category}
              key={i}
            />
          );
        })}
        <img
          src={work1}
          alt=""
          className="row-end-2 block w-full h-[184px] workimg xll:col-end-3 3xl:h-[426px]"
        />
        {window.innerWidth > 1439 &&
          workrightcird1.map((data, i) => {
            return (
              <WorkRightCird
                key={i}
                tittle1={data.tittle}
                tac={data.tac}
                tittle2={data.tittle2}
                img={data.img}
              />
            );
          })}
      </div>
      <div className="p-2.5 border-2 border-dark-12 rounded-16 grid grid-cols-1 gap-2.5 mt-2.5 xll:grid-cols-3 workgrid 3xl:gap-5 3xl:mt-5">
        {workleftcird2.map((data, i) => {
          return (
            <CategoryCird
              tittle={data.tittle}
              icon={data.icon}
              time={data.time}
              pera={data.pera}
              category={data.category}
              key={i}
            />
          );
        })}
        <img
          src={work2}
          alt=""
          className="row-end-2 block w-full h-[184px] workimg xll:col-end-3 3xl:h-[426px]"
        />
        {window.innerWidth > 1439 &&
          workrightcird2.map((data, i) => {
            return (
              <WorkRightCird
                key={i}
                tittle1={data.tittle}
                tac={data.tac}
                tittle2={data.tittle2}
                img={data.img}
              />
            );
          })}
      </div>
    </>
  );
}

export default Worksection;
