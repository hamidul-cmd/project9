import React from "react";

function FeaturesCird({ icon, tittle, pera }) {
  return (
    <>
      <div className="bg-dark-10 p-5 rounded-lg space-y-7.5 xll:space-y-10 3xl:p-10 3xl:space-y-20 3xl:rounded-14 xll:rounded-10">
        <div className="p-3.5 bg-dark-12 border-dark-20 border rounded-lg w-fit 3xl:p-4">
          {icon}
        </div>
        <div className="font-roboto__flex space-y-1.5 xll:space-y-2.5 3xl:space-y-3">
          <h3 className="text-xl font-medium leading-150 text-orange-95 xll:text-22 3xl:text-3xl 3xl:leading-150">
            {tittle}
          </h3>
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeaturesCird;
