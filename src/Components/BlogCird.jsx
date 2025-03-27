import React from "react";
import RoundButton from "./RoundButton";

function BlogCird({ img, tittle, pera, id }) {

  return (
    <>
      <div className="p-3.5 pb-6 bg-dark-10 rounded-xl space-y-5 xll:p-4 xll:pb-7.5 xll:space-y-6 3xl:p-5 3xl:pb-10 3xl:rounded-14 3xl:space-y-7.5">
        <div>
          <img
            src={img}
            alt=""
            className="block w-full h-[187px] xll:h-[243px] 3xl:h-[329px]"
          />
        </div>
        <div className="px-3.5 space-y-6 xll:px-4 xll:space-y-7.5 3xl:px-5 3xl:space-y-10">
          <div className="font-roboto__flex space-y-2 xll:space-y-2.5 3xl:space-y-3">
            <h3 className="text-lg font-medium leading-150 text-orange-95 uppercase xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
              {tittle}
            </h3>
            <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
              {pera}
            </p>
          </div>
          <RoundButton name="Read Full Blog" id={id} />
        </div>
      </div>
    </>
  );
}

export default BlogCird;
