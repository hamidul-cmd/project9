import React from "react";
import TestimonialsCird from "./TestimonialsCird";
import Commontittle from "./Commontittle";
import tes1 from "../assets/tes1.png";
import tes2 from "../assets/tes2.png";
import tes3 from "../assets/tes3.png";
import tes4 from "../assets/tes4.png";

function TestimornialSection() {
  const testimornialCirdData = [
    {
      tittle: "NexGen turned our business around!",
      pera: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      position: "CEO of BlueBloom",
      img: tes1,
    },
    {
      tittle: "NexGen turned our business around!",
      pera: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Wade Warren",
      position: "Art Director",
      img: tes2,
    },
    {
      tittle: "Working with NexGen was a pleasure.",
      pera: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Lisa Williams",
      position: "CEO Of HealthTech",
      img: tes3,
    },
    {
      tittle: "NexGen's web design brought our vision",
      pera: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      name: "Jennifer Lee",
      position: "COO of Foodie Haven",
      img: tes4,
    },
  ];
  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Testimonials" button="ALL Testimonials" />
          <div className="testimonials__grid grid grid-cols-1 gap-2.5 mt-2.5 xll:grid-cols-4 3xl:gap-5 3xl:mt-5">
            {testimornialCirdData.map((data, i) => {
              return (
                <TestimonialsCird
                  key={i}
                  tittle={data.tittle}
                  pera={data.pera}
                  name={data.name}
                  position={data.position}
                  img={data.img}
                />
              );
            })}
          </div>
          <a
            href="/"
            className="mt-2.5 py-5 bg-dark-10 rounded-xl flex justify-center items-center font-roboto__mono md:hidden"
          >
            <div className="flex items-center gap-1.5">
              <div className="p-3.5 bg-dark-6 border border-dark-20 rounded-full">
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
              <span className="text-sm font-medium leading-150 uppercase text-gray-70">
                ALL Testimonials
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default TestimornialSection;
