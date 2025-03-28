import React from "react";
import Lefthero from "../Components/Lefthero";
import heroimg from "../assets/heroimg.png";
import Commontittle from "../Components/Commontittle";
import JourneyCird from "../Components/JourneyCird";
import ServiceCird from "../Components/ServiceCird";
import FaqSection from "../Components/FaqSection";
import TestimornialSection from "../Components/TestimornialSection";
import Transform from "../Components/Transform";
import Worksection from "../Components/Worksection";
import CountUp from "react-countup";

function Home() {
  const herobox = [
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
    {
      tittle: "Years Of Experience",
      number: "10",
      type: "+",
    },
  ];
  const journeycardData = [
    {
      tittle: "Expertise in Cutting-Edge Technologies",
      pera: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...",
    },
    {
      tittle: "Proven Track Record of Success",
      pera: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...",
    },
    {
      tittle: "Client-Centric Approach Centric",
      pera: "At NexGen, we prioritize understanding our clients' unique requirements, fostering ... unique",
    },
    {
      tittle: "Dedicated Team of Professionals",
      pera: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable...",
    },
  ];
  const serviceCirdData = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.73099 7.7799L7.7799 5.73098C9.71164 3.79924 10.6775 2.83337 11.8777 2.83337C13.078 2.83337 14.0438 3.79924 15.9756 5.73098L12.5607 9.14585L5.73099 15.9756L5.73097 15.9756C3.79924 14.0438 2.83337 13.078 2.83337 11.8777C2.83337 10.6775 3.79924 9.71164 5.73098 7.77991L5.73099 7.7799Z"
            fill="#CE7D63"
          />
          <path
            d="M28.2691 26.2202L26.2202 28.2691C24.2884 30.2008 23.3226 31.1667 22.1223 31.1667C20.9221 31.1667 19.9563 30.2008 18.0245 28.2691L18.0245 28.2691L24.8542 21.4394L28.2691 18.0245C30.2008 19.9562 31.1667 20.9221 31.1667 22.1223C31.1667 23.3226 30.2008 24.2884 28.2691 26.2202Z"
            fill="#CE7D63"
          />
          <path
            d="M16.1502 25.7284L16.1502 25.7284L26.6276 15.2509C25.2017 14.6574 23.5127 13.6825 21.9154 12.0852C20.3178 10.4876 19.3428 8.79836 18.7494 7.37223L8.27171 17.8499L8.27166 17.85C7.45406 18.6675 7.04523 19.0764 6.69365 19.5271C6.2789 20.0589 5.92332 20.6342 5.63319 21.243C5.38725 21.7591 5.20441 22.3075 4.83875 23.4045L2.91051 29.1893C2.73056 29.7291 2.87106 30.3243 3.27343 30.7266C3.67581 31.129 4.27098 31.2695 4.81082 31.0896L10.5955 29.1613C11.6925 28.7957 12.241 28.6128 12.7571 28.3669C13.3659 28.0768 13.9412 27.7212 14.4729 27.3064C14.9237 26.9549 15.3326 26.546 16.1502 25.7284Z"
            fill="#CE7D63"
          />
          <path
            d="M29.535 12.3435C31.7106 10.168 31.7106 6.64064 29.535 4.46506C27.3594 2.28948 23.8321 2.28948 21.6565 4.46506L20.3999 5.7217C20.4171 5.77366 20.435 5.82634 20.4535 5.87971C20.9141 7.20733 21.7831 8.94772 23.418 10.5826C25.0528 12.2174 26.7932 13.0865 28.1208 13.5471C28.174 13.5655 28.2264 13.5833 28.2781 13.6004L29.535 12.3435Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Web Design",
      pera: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      prize: "$1,500",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.32648 4.4931C5.66675 6.15283 5.66675 8.82412 5.66675 14.1667V19.8334C5.66675 25.176 5.66675 27.8473 7.32648 29.507C8.9862 31.1667 11.6575 31.1667 17.0001 31.1667C22.3427 31.1667 25.014 31.1667 26.6737 29.507C28.3334 27.8473 28.3334 25.176 28.3334 19.8334V14.1667C28.3334 8.82412 28.3334 6.15283 26.6737 4.4931C25.014 2.83337 22.3427 2.83337 17.0001 2.83337C11.6575 2.83337 8.9862 2.83337 7.32648 4.4931ZM12.7501 6.02087C12.1633 6.02087 11.6876 6.49657 11.6876 7.08337C11.6876 7.67018 12.1633 8.14587 12.7501 8.14587H21.2501C21.8369 8.14587 22.3126 7.67018 22.3126 7.08337C22.3126 6.49657 21.8369 6.02087 21.2501 6.02087H12.7501ZM17.0001 26.9167C18.5649 26.9167 19.8334 25.6482 19.8334 24.0834C19.8334 22.5186 18.5649 21.25 17.0001 21.25C15.4353 21.25 14.1667 22.5186 14.1667 24.0834C14.1667 25.6482 15.4353 26.9167 17.0001 26.9167Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Mobile App Development",
      pera: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications .",
      prize: "$1,340",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.1667 17C31.1667 24.8241 24.8241 31.1667 17 31.1667C9.17601 31.1667 2.83337 24.8241 2.83337 17C2.83337 9.17601 9.17601 2.83337 17 2.83337C24.8241 2.83337 31.1667 9.17601 31.1667 17ZM19.1081 9.13174C19.6749 9.28362 20.0113 9.86623 19.8594 10.433L16.1928 24.117C16.0409 24.6838 15.4583 25.0202 14.8915 24.8683C14.3247 24.7164 13.9884 24.1338 14.1402 23.567L17.8068 9.88304C17.9587 9.31624 18.5413 8.97987 19.1081 9.13174ZM21.2071 11.9987C21.622 11.5838 22.2947 11.5838 22.7097 11.9987L23.0048 12.2939C23.9049 13.1939 24.6554 13.9444 25.1711 14.6203C25.7155 15.3337 26.0973 16.0875 26.0973 17C26.0973 17.9126 25.7155 18.6663 25.1711 19.3798C24.6554 20.0557 23.9049 20.8062 23.0049 21.7062L22.7097 22.0013C22.2947 22.4163 21.622 22.4163 21.2071 22.0013C20.7921 21.5864 20.7921 20.9137 21.2071 20.4987L21.4501 20.2557C22.4158 19.29 23.0629 18.6397 23.4817 18.0908C23.8818 17.5664 23.9723 17.2611 23.9723 17C23.9723 16.739 23.8818 16.4337 23.4817 15.9093C23.0629 15.3604 22.4158 14.7101 21.4501 13.7444L21.2071 13.5013C20.7921 13.0864 20.7921 12.4137 21.2071 11.9987ZM11.2907 11.9987C11.7056 11.5838 12.3783 11.5838 12.7933 11.9987C13.2082 12.4137 13.2082 13.0864 12.7933 13.5013L12.5502 13.7444C11.5845 14.7101 10.9374 15.3604 10.5186 15.9093C10.1185 16.4337 10.0281 16.739 10.0281 17C10.0281 17.2611 10.1185 17.5664 10.5186 18.0908C10.9374 18.6397 11.5845 19.29 12.5502 20.2557L12.7933 20.4987C13.2082 20.9137 13.2082 21.5864 12.7933 22.0013C12.3783 22.4163 11.7056 22.4163 11.2907 22.0013L10.9955 21.7062C10.0954 20.8062 9.34491 20.0557 8.8292 19.3798C8.28487 18.6663 7.90308 17.9126 7.90308 17C7.90308 16.0875 8.28487 15.3337 8.8292 14.6203C9.34491 13.9444 10.0955 13.1939 10.9955 12.2939L11.2907 11.9987Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Web Development",
      pera: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
      prize: "$1,800",
    },
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-[34px] 3xl:w-[34px]"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83325 9.20837C2.83325 5.68756 5.68744 2.83337 9.20825 2.83337C12.7291 2.83337 15.5833 5.68756 15.5833 9.20837V13.4584C15.5833 13.9524 15.5833 14.1994 15.5289 14.4021C15.3816 14.9521 14.952 15.3817 14.402 15.5291C14.1993 15.5834 13.9523 15.5834 13.4583 15.5834H9.20825C5.68744 15.5834 2.83325 12.7292 2.83325 9.20837Z"
            fill="#CE7D63"
          />
          <path
            d="M18.4166 20.5417C18.4166 20.0477 18.4166 19.8006 18.4709 19.598C18.6183 19.048 19.0479 18.6184 19.5978 18.471C19.8005 18.4167 20.0475 18.4167 20.5416 18.4167H24.7916C28.3124 18.4167 31.1666 21.2709 31.1666 24.7917C31.1666 28.3125 28.3124 31.1667 24.7916 31.1667C21.2708 31.1667 18.4166 28.3125 18.4166 24.7917V20.5417Z"
            fill="#CE7D63"
          />
          <path
            d="M2.83325 24.7917C2.83325 21.2709 5.68744 18.4167 9.20825 18.4167H13.0333C13.9258 18.4167 14.3721 18.4167 14.713 18.5904C15.0129 18.7432 15.2567 18.987 15.4095 19.2869C15.5833 19.6278 15.5833 20.0741 15.5833 20.9667V24.7917C15.5833 28.3125 12.7291 31.1667 9.20825 31.1667C5.68744 31.1667 2.83325 28.3125 2.83325 24.7917Z"
            fill="#CE7D63"
          />
          <path
            d="M18.4166 9.20837C18.4166 5.68756 21.2708 2.83337 24.7916 2.83337C28.3124 2.83337 31.1666 5.68756 31.1666 9.20837C31.1666 12.7292 28.3124 15.5834 24.7916 15.5834H20.238C20.0266 15.5834 19.9208 15.5834 19.8319 15.5734C19.093 15.4901 18.5099 14.907 18.4266 14.1681C18.4166 14.0791 18.4166 13.9734 18.4166 13.7619V9.20837Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Digital Marketing",
      pera: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility",
      prize: "$3,500",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7">
        <div className="md:flex gap-4 hero__wraper">
          <Lefthero
            tittle1="Digital Solutions"
            tittle2="That Drive Success"
            button="Start a Project"
            pera="At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape."
          />
          <div className="mt-5 rounded-xl overflow-hidden relative">
            <div>
              <img
                src={heroimg}
                alt=""
                className="block 3xl:w-[593px] 3xl:h-[465px]"
              />
              <a
                href="/"
                className="absolute top-0 right-0 p-2.5 bg-orange-60 rounded-full w-fit -rotate-45 xll:p-6"
              >
                <svg
                  className="h-6 w-6 xll:h-10 xll:w-10"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                    stroke="#0F0F0F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="p-6 bg-dark-12 3xl:p-7.5">
              <h3 className="text-xl font-medium leading-150 font-roboto__flex text-orange-95 mb-0.5 3xl:text-2xl 3xl:leading-150 3xl:mb-1">
                Estatein Real Estate
              </h3>
              <h5 className="text-base leading-150 text-gray-70 3xl:text-lg">
                Web Development.{" "}
              </h5>
            </div>
          </div>
        </div>
        <div className="mt-4 hidden xll:grid xll:grid-cols-6 xll:gap-2.5 xll:p-2.5 border-2 border-dark-12 rounded-2xl 3xl:p-5 3xl:rounded-20 3xl:gap-5">
          {herobox.map((data, i) => {
            return (
              <div
                key={i}
                className=" py-5 bg-dark-10 rounded-xl flex flex-col gap-3 items-center grow 3xl:py-7.5 3xl:gap-5"
              >
                <h5 className="text-sm font-medium leading-150 text-gray-70 font-roboto__mono 3xl:text-lg 3xl:leading-150">
                  {data.tittle}
                </h5>
                <h5 className="text-40 font-semibold leading-7 text-orange-70 font-roboto__flex 3xl:text-60 number">
                  <CountUp start={0} end={data.number} duration={3} delay={0} />
                  <span>{data.type}</span>
                </h5>
              </div>
            );
          })}
          <a
            href=""
            className="flex gap-1.5 items-center justify-center bg-dark-10 rounded-xl grow 3xl:gap-2.5 retun "
          >
            <div className="p-3.5 bg-dark-6 border border-dark-15 rounded-full -rotate-45 3xl:p-5">
              <svg
                className="h-5 w-5 3xl:h-[28px] 3xl:w-[28px]"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 5L21 12.5M21 12.5L13.5 20M21 12.5H3"
                  stroke="#E7BEB1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="uppercase text-base font-medium leading-150 text-gray-70 font-roboto__mono 3xl:text-xl 3xl:leading-150">
              Know More
            </div>
          </a>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Reasons to Choose NexGen for Your Digital Journey" />
          <div className="grid mt-2.5 3xl:mt-5 grid-cols-1 gap-2.5 3xl:gap-5 xll:grid-cols-4 journey__grid">
            {journeycardData.map((data, i) => {
              return (
                <JourneyCird key={i} tittle={data.tittle} pera={data.pera} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Our Services" />
          <div className="grid grid-cols-1 gap-2.5 3xl:gap-5 mt-2.5 3xl:mt-5 service__grid">
            {serviceCirdData.map((data, index) => {
              return (
                <ServiceCird
                  key={index}
                  tittle={data.tittle}
                  pera={data.pera}
                  prize={data.prize}
                  icon={data.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Our Works" button="ALL Works" />
          <Worksection />
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />
    </>
  );
}

export default Home;
