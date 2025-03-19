import React from "react";

function AchievementCird({ date, tittle, pera }) {
  return (
    <>
      <div className="bg-dark-10 rounded-10 font-roboto__flex 3xl:rounded-14">
        <div className="py-2.5 px-5 xll:py-3 xll:px-6 3xl:py-4 3xl:px-7.5">
          <h3 className="text-sm leading-150 text-gray-50 xll:text-base xll:leading-150 3xl:text-xl 3xl:leading-150">
            {date}
          </h3>
        </div>
        <div className="px-5 py-6 bg-dark-12 border-y-2 border-dark-15 xll:py-7.5 xll:px-6 3xl:py-10 3xl:px-7.5">
          <h2 className="text-lg font-medium leading-150 text-orange-95 uppercase xll:text-xl xll:leading-150 3xl:text-2xl 3xl:leading-150">
            {tittle}
          </h2>
        </div>
        <div className="p-5 xll:p-6 3xl:p-7.5">
          <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
            {pera}
          </p>
        </div>
      </div>
    </>
  );
}

export default AchievementCird;
