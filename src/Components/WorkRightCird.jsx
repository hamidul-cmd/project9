import React from "react";

function WorkRightCird({ tittle1, tittle2, img, tac }) {
  return (
    <>
      <div className="hidden md:block font-roboto__flex">
        <div className="p-7.5 bg-dark-10 rounded-10 mb-2.5 3xl:p-10 3xl:rounded-14 3xl:mb-5">
          <h3 className="text-base font-medium leading-150 text-orange-95 uppercase mb-4 3xl:text-lg 3xl:leading-150 3xl:mb-5">
            {tittle1}
          </h3>
          <div className="flex gap-2 flex-wrap 3xl:gap-2.5">
            {tac.map((data, i) => {
              return (
                <div
                  key={i}
                  className="px-3.5 py-2 bg-dark-12 rounded-full text-sm leading-150 text-gray-90 font-roboto__mono 3xl:py-2.5 3xl:px-4"
                >
                  <span>{data}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-7.5 py-4 px-5 bg-dark-10 rounded-10 mb-2.5 3xl:py-5 3xl:px-10 3xl:gap-10 3xl:mb-5">
          <h3 className="text-base leading-150 text-orange-95 3xl:text-lg">
            {tittle2}
          </h3>
          <div className="flex gap-2 3xl:gap-2.5">
            {img.map((data, i) => {
              return (
                <img
                  key={i}
                  src={data}
                  alt=""
                  className="h-10 w-10 block 3xl:h-12.5 3xl:w-12.5"
                />
              );
            })}
          </div>
        </div>
        <a href="" className="block btn__orenge">
          Book A Call
        </a>
      </div>
    </>
  );
}

export default WorkRightCird;
