import React from "react";
import Lefthero from "../Components/Lefthero";
import serviceheroimg from "../assets/serviceheroimg.png";
import Commontittle from "../Components/Commontittle";
import ServiceCird from "../Components/ServiceCird";
import SuccessCird from "../Components/SuccessCird";
import Solution from "../Components/Solution";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";

function Service() {
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
  const klothink = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.6663 14.5V22.9068C25.6663 24.4045 24.0902 25.3786 22.7506 24.7088C21.6679 24.1675 20.3781 24.2478 19.3708 24.9193C18.2378 25.6747 16.7616 25.6747 15.6285 24.9193L15.2171 24.645C14.4799 24.1535 13.5195 24.1535 12.7823 24.645L12.3708 24.9193C11.2378 25.6747 9.76159 25.6747 8.6285 24.9193C7.62128 24.2478 6.33147 24.1675 5.24874 24.7088C3.90915 25.3786 2.33301 24.4045 2.33301 22.9068V14.5C2.33301 8.05672 7.55635 2.83337 13.9997 2.83337C20.443 2.83337 25.6663 8.05672 25.6663 14.5ZM11.0207 17.2971C10.6325 17.0093 10.0845 17.0908 9.79673 17.479C9.50896 17.8672 9.5904 18.4152 9.97863 18.703C11.1131 19.5439 12.5005 20.0417 13.9997 20.0417C15.4988 20.0417 16.8862 19.5439 18.0207 18.703C18.409 18.4152 18.4904 17.8672 18.2026 17.479C17.9149 17.0908 17.3669 17.0093 16.9786 17.2971C16.1289 17.9269 15.1032 18.2917 13.9997 18.2917C12.8961 18.2917 11.8705 17.9269 11.0207 17.2971ZM18.6663 11.5834C18.6663 12.5499 18.144 13.3334 17.4997 13.3334C16.8553 13.3334 16.333 12.5499 16.333 11.5834C16.333 10.6169 16.8553 9.83337 17.4997 9.83337C18.144 9.83337 18.6663 10.6169 18.6663 11.5834ZM10.4997 13.3334C11.144 13.3334 11.6663 12.5499 11.6663 11.5834C11.6663 10.6169 11.144 9.83337 10.4997 9.83337C9.85534 9.83337 9.33301 10.6169 9.33301 11.5834C9.33301 12.5499 9.85534 13.3334 10.4997 13.3334Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Klothink",
      industry: "E-commerce",
      service: "Design & Development",
    },
  ];
  const fitness = [
    {
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16699 6.13423C8.16699 7.93998 10.1806 9.84219 11.8417 11.1042C12.774 11.8125 13.2401 12.1666 14.0003 12.1666C14.7605 12.1666 15.2267 11.8125 16.159 11.1042C17.8201 9.84221 19.8337 7.94001 19.8337 6.13422C19.8337 2.87902 16.6252 1.66369 14.0003 4.1783C11.3754 1.66369 8.16699 2.87902 8.16699 6.13423Z"
            fill="#CE7D63"
          />
          <path
            d="M7.30358 25.4531H7.00033C5.90038 25.4531 5.35041 25.4531 5.0087 25.1114C4.66699 24.7697 4.66699 24.2197 4.66699 23.1198V21.8225C4.66699 21.2176 4.66699 20.9151 4.82237 20.645C4.97774 20.3749 5.21214 20.2386 5.68094 19.9659C8.76733 18.1708 13.1505 17.1604 16.0759 18.9052C16.2725 19.0224 16.4492 19.164 16.6003 19.3336C17.2514 20.065 17.2039 21.1688 16.4535 21.8237C16.2951 21.9621 16.1262 22.0669 15.9561 22.1034C16.0959 22.0872 16.2298 22.0686 16.3577 22.0482C17.421 21.8786 18.3135 21.3104 19.1307 20.6932L21.239 19.1005C21.9823 18.539 23.0855 18.5389 23.8289 19.1002C24.4982 19.6056 24.7029 20.4376 24.2797 21.1159C23.7863 21.9068 23.0911 22.9186 22.4236 23.5369C21.7551 24.156 20.7599 24.7088 19.9474 25.101C19.0474 25.5354 18.0531 25.7857 17.0418 25.9494C14.9906 26.2814 12.853 26.2307 10.8227 25.8124C9.67495 25.576 8.48292 25.4531 7.30358 25.4531Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      tittle: "Fitness Tracker",
      industry: "Health & Fitness",
      service: "Mobile App Development",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7 service__hero mt-5 xll:mt-12.5">
        <Lefthero
          tittle1="Our Comprehensive"
          tittle2="Digital Solutions"
          button="Start a Project"
          pera="At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation"
        />
        <div className="mt-4 service__hero_right relative">
          <img
            src={serviceheroimg}
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
        <Commontittle tittle="Success Stories" button="View All" />
        <div className="p-2.5 border-2 border-dark-12 rounded-16 mt-2.5 service_box_wrapper xll:flex xll:gap-2.5 xll:p-7.5 3xl:mt-5 3xl:p-12.5 3xl:rounded-20 3xl:gap-5">
          {klothink.map((data) => {
            return (
              <SuccessCird
                icon={data.icon}
                tittle={data.tittle}
                industry={data.industry}
                service={data.service}
              />
            );
          })}
          <Solution />
        </div>
        <div className="p-2.5 border-2 border-dark-12 rounded-16 mt-2.5 service_box_wrapper xll:flex xll:gap-2.5 xll:p-7.5 3xl:mt-5 3xl:p-12.5 3xl:rounded-20 3xl:gap-5">
          {fitness.map((data) => {
            return (
              <SuccessCird
                icon={data.icon}
                tittle={data.tittle}
                industry={data.industry}
                service={data.service}
              />
            );
          })}
          <Solution />
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />
    </>
  );
}

export default Service;
