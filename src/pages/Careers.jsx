import React from "react";
import Lefthero from "../Components/Lefthero";
import Commontittle from "../Components/Commontittle";
import JoinCird from "../Components/JoinCird";

function Careers() {
  const joinciraddata = [
    {
      tittle: "Web Designer",
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5071 8.15012L25.8485 19.4914C26.7026 20.3456 28.0874 20.3456 28.9415 19.4914C29.7957 18.6373 29.7957 17.2525 28.9415 16.3984L27.395 14.8518L29.4571 12.7898C31.7347 10.5121 31.7347 6.8192 29.4571 4.54152C27.1794 2.26383 23.4865 2.26383 21.2088 4.54152L19.1468 6.60357L17.6002 5.05703C16.7461 4.2029 15.3613 4.2029 14.5071 5.05703C13.653 5.91116 13.653 7.29599 14.5071 8.15012Z"
            fill="#CE7D63"
          />
          <path
            d="M14.5511 11.1993L6.66963 19.0807C6.02364 19.7267 5.70063 20.0497 5.49559 20.4366C5.35883 20.6947 5.26161 20.9718 5.20719 21.2588C5.1256 21.689 5.17604 22.143 5.27693 23.051L5.35175 23.7243C5.37928 23.9721 5.39304 24.096 5.39651 24.2148C5.41751 24.9352 5.17105 25.6378 4.70466 26.1871C4.6277 26.2778 4.53957 26.3659 4.3633 26.5422L3.47263 27.4329C2.6185 28.287 2.6185 29.6718 3.47263 30.5259C4.32676 31.3801 5.71159 31.3801 6.56572 30.5259L7.45644 29.6352C7.63267 29.459 7.72079 29.3709 7.81144 29.2939C8.36081 28.8275 9.06341 28.5811 9.78374 28.6021C9.90261 28.6055 10.0265 28.6193 10.2742 28.6468L10.9476 28.7216C11.8556 28.8225 12.3096 28.873 12.7398 28.7914C13.0267 28.737 13.3039 28.6397 13.562 28.503C13.9489 28.2979 14.2719 27.9749 14.9179 27.3289L16.9556 25.291L14.3299 22.6653C13.915 22.2503 13.915 21.5776 14.3299 21.1627C14.7448 20.7477 15.4176 20.7477 15.8325 21.1627L18.4583 23.7885L19.789 22.4577L17.1632 19.8319C16.7483 19.417 16.7483 18.7443 17.1632 18.3293C17.5782 17.9144 18.2509 17.9144 18.6659 18.3293L21.2917 20.9551L22.7993 19.4475L14.5511 11.1993Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      salare: "$45,000 - $60,000",
      experience: "1+",
      deadline: "30/09/2025",
      pera: "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
    },
    {
      tittle: "Mobile App Developer",
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.3277 4.49298C5.66797 6.15271 5.66797 8.824 5.66797 14.1666V19.8333C5.66797 25.1758 5.66797 27.8471 7.3277 29.5069C8.98743 31.1666 11.6587 31.1666 17.0013 31.1666C22.3439 31.1666 25.0152 31.1666 26.6749 29.5069C28.3346 27.8471 28.3346 25.1758 28.3346 19.8333V14.1666C28.3346 8.824 28.3346 6.15271 26.6749 4.49298C25.0152 2.83325 22.3439 2.83325 17.0013 2.83325C11.6587 2.83325 8.98743 2.83325 7.3277 4.49298ZM12.7513 6.02075C12.1645 6.02075 11.6888 6.49645 11.6888 7.08325C11.6888 7.67005 12.1645 8.14575 12.7513 8.14575H21.2513C21.8381 8.14575 22.3138 7.67005 22.3138 7.08325C22.3138 6.49645 21.8381 6.02075 21.2513 6.02075H12.7513ZM17.0013 26.9166C18.5661 26.9166 19.8346 25.6481 19.8346 24.0833C19.8346 22.5184 18.5661 21.2499 17.0013 21.2499C15.4365 21.2499 14.168 22.5184 14.168 24.0833C14.168 25.6481 15.4365 26.9166 17.0013 26.9166Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      salare: "$55,000 - $75,000 ",
      experience: "2+",
      deadline: "15/10/2025",
      pera: "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
    },
    {
      tittle: "Digital Marketing Specialist",
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83203 9.20825C2.83203 5.68744 5.68622 2.83325 9.20703 2.83325C12.7278 2.83325 15.582 5.68744 15.582 9.20825V13.4583C15.582 13.9523 15.582 14.1993 15.5277 14.402C15.3804 14.952 14.9508 15.3816 14.4008 15.5289C14.1981 15.5833 13.9511 15.5833 13.457 15.5833H9.20703C5.68622 15.5833 2.83203 12.7291 2.83203 9.20825Z"
            fill="#CE7D63"
          />
          <path
            d="M18.4154 20.5416C18.4154 20.0475 18.4154 19.8005 18.4697 19.5978C18.617 19.0479 19.0466 18.6183 19.5966 18.4709C19.7993 18.4166 20.0463 18.4166 20.5404 18.4166H24.7904C28.3112 18.4166 31.1654 21.2708 31.1654 24.7916C31.1654 28.3124 28.3112 31.1666 24.7904 31.1666C21.2696 31.1666 18.4154 28.3124 18.4154 24.7916V20.5416Z"
            fill="#CE7D63"
          />
          <path
            d="M2.83203 24.7916C2.83203 21.2708 5.68622 18.4166 9.20703 18.4166H13.032C13.9246 18.4166 14.3709 18.4166 14.7118 18.5903C15.0117 18.7431 15.2555 18.9869 15.4083 19.2868C15.582 19.6277 15.582 20.074 15.582 20.9666V24.7916C15.582 28.3124 12.7278 31.1666 9.20703 31.1666C5.68622 31.1666 2.83203 28.3124 2.83203 24.7916Z"
            fill="#CE7D63"
          />
          <path
            d="M18.4154 9.20825C18.4154 5.68744 21.2696 2.83325 24.7904 2.83325C28.3112 2.83325 31.1654 5.68744 31.1654 9.20825C31.1654 12.7291 28.3112 15.5833 24.7904 15.5833H20.2368C20.0253 15.5833 19.9196 15.5833 19.8307 15.5732C19.0918 15.49 18.5086 14.9068 18.4254 14.1679C18.4154 14.079 18.4154 13.9733 18.4154 13.7618V9.20825Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      salare: "$50,000 - $65,000",
      experience: "3+",
      deadline: "20/11/2025",
      pera: "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
    },
    {
      tittle: "Project Manager",
      icon: (
        <svg
          className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0724 1.77075H16.925C15.6522 1.77071 14.5908 1.77068 13.7482 1.88396C12.8588 2.00354 12.0558 2.26657 11.4106 2.91182C10.7653 3.55707 10.5023 4.36004 10.3827 5.24941C10.2695 6.09201 10.2695 7.1534 10.2695 8.42623V8.53635C7.4062 8.63004 5.68678 8.96463 4.49176 10.1596C2.83203 11.8194 2.83203 14.4907 2.83203 19.8333C2.83203 25.1758 2.83203 27.8471 4.49176 29.5069C6.15149 31.1666 8.82278 31.1666 14.1654 31.1666H19.832C25.1746 31.1666 27.8459 31.1666 29.5056 29.5069C31.1654 27.8471 31.1654 25.1758 31.1654 19.8333C31.1654 14.4907 31.1654 11.8194 29.5056 10.1596C28.3106 8.96463 26.5912 8.63004 23.7279 8.53635V8.42626C23.7279 7.15344 23.7279 6.09201 23.6147 5.24941C23.4951 4.36004 23.2321 3.55707 22.5868 2.91182C21.9416 2.26657 21.1386 2.00354 20.2492 1.88396C19.4066 1.77068 18.3452 1.77071 17.0724 1.77075ZM21.6029 8.50259V8.49992C21.6029 7.13424 21.6006 6.21686 21.5086 5.53256C21.4207 4.87882 21.2688 4.59904 21.0842 4.41442C20.8996 4.22981 20.6198 4.07791 19.9661 3.99002C19.2818 3.89801 18.3644 3.89576 16.9987 3.89576C15.633 3.89576 14.7156 3.89801 14.0313 3.99002C13.3776 4.07791 13.0978 4.22981 12.9132 4.41442C12.7286 4.59904 12.5767 4.87882 12.4888 5.53256C12.3968 6.21686 12.3945 7.13424 12.3945 8.49992V8.50259C12.9499 8.49992 13.5393 8.49992 14.1654 8.49992H19.832C20.4581 8.49992 21.0475 8.49992 21.6029 8.50259ZM24.082 12.7499C24.082 13.5323 23.4478 14.1666 22.6654 14.1666C21.883 14.1666 21.2487 13.5323 21.2487 12.7499C21.2487 11.9675 21.883 11.3333 22.6654 11.3333C23.4478 11.3333 24.082 11.9675 24.082 12.7499ZM11.332 14.1666C12.1144 14.1666 12.7487 13.5323 12.7487 12.7499C12.7487 11.9675 12.1144 11.3333 11.332 11.3333C10.5496 11.3333 9.91537 11.9675 9.91537 12.7499C9.91537 13.5323 10.5496 14.1666 11.332 14.1666Z"
            fill="#CE7D63"
          />
        </svg>
      ),
      salare: "$60,000 - $80,000",
      experience: "5+",
      deadline: "05/12/2025",
      pera: "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-20 3xl:mb-24.7 about__hero xll:flex xll:gap-2.5 3xl:gap-5">
        <div className="md:flex gap-4 hero__wraper about__left">
          <Lefthero
            tittle1="Unlock Your Potential"
            tittle2="in the Digital World"
            button="Start a Project"
            pera="At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape."
          />
        </div>
        <div className="p-6 bg-dark-10 rounded-16 mt-4 about__right xll:grow xll:flex xll:flex-col xll:p-10 xll:justify-between xll:mt-0 3xl:p-12.5 space-y-7.5 careers__right_hero xll:space-y-0 3xl:w-[593px]">
          <div className="font-roboto__flex space-y-3 xll:space-y-4 3xl:space-y-5">
            <h3 className="text-xl font-medium leading-150 text-orange-95 uppercase xll:text-2xl xll:leading-150 3xl:text-3xl 3xl:leading-150">
              At NexGen
            </h3>
            <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              We believe in fostering a dynamic and collaborative work
              environment that empowers our team members to excel in their
              respective fields. Join us to be part of a passionate and
              innovative team dedicated to crafting exceptional digital
              solutions for clients across the globe. We are committed to
              nurturing talent, encouraging professional growth, and creating a
              workplace where creativity thrives.
            </p>
          </div>
          <a
            href=""
            className="flex gap-2 text-sm font-medium leading-150 text-gray-70 font-roboto__mono uppercase items-center xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150"
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
          <Commontittle tittle="Join Our Team at NexGen" />
          <div className="mt-2.5 3xl:mt-5 grid grid-cols-1 gap-2.5 xll:grid-cols-2 join__grid">
            {joinciraddata.map((data, i) => {
              return (
                <JoinCird
                  key={i}
                  tittle={data.tittle}
                  icon={data.icon}
                  salare={data.salare}
                  experience={data.experience}
                  deadline={data.deadline}
                  pera={data.pera}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
