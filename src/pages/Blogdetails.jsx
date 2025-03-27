import React from "react";
import { blogdetails } from "../data/Blogdetails";
import { useParams } from "react-router";
import Commontittle from "../Components/Commontittle";
import { blogcirddata } from "../data/BlogData";
import BlogCird from "../Components/BlogCird";
import TestimornialSection from "../Components/TestimornialSection";
import FaqSection from "../Components/FaqSection";
import Transform from "../Components/Transform";

function Blogdetails() {
  const { id } = useParams();
  const blog = blogdetails.find((b) => String(b.id) === id); // Ensure IDs match as strings

  if (!blog) return <h2 className="text-center text-2xl">Blog Not Found</h2>;

  return (
    <>
      <section className="px-4 xll:px-10 3xl:px-12.5">
        <img
          src={blog.banner}
          alt="blog banner"
          className="block w-full h-[240px] rounded-xl xll:h-[600px] xll:rounded-14 mb-5 xll:mb-7.5 3xl:mb-12.5"
        />
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7 space-y-2.5 xll:flex xll:gap-2.5 xll:justify-center xll:space-y-0 3xl:gap-5">
        <div className="flex justify-center gap-3 xll:flex-col xll:h-fit xll:sticky top-4 3xl:gap-4">
          <a
            href={blog.twitter__link}
            className="p-3.5 bg-dark-10 border-dark-20 border rounded-lg 3xl:p-4 3xl:rounded-xl"
          >
            <svg
              className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.3277 7.31323C31.327 7.74387 30.2751 8.04374 29.1978 8.20544C29.7014 8.11909 30.4425 7.21249 30.7375 6.84554C31.1857 6.29202 31.5273 5.66013 31.7449 4.98197C31.7449 4.93161 31.7952 4.85965 31.7449 4.82368C31.7195 4.80982 31.691 4.80256 31.6621 4.80256C31.6332 4.80256 31.6048 4.80982 31.5794 4.82368C30.4096 5.45716 29.1646 5.94065 27.8738 6.26272C27.8288 6.27647 27.781 6.2777 27.7353 6.26629C27.6897 6.25488 27.648 6.23126 27.6148 6.19797C27.5143 6.07833 27.4062 5.96537 27.291 5.85979C26.7646 5.38811 26.1673 5.00205 25.521 4.71575C24.6486 4.35784 23.7063 4.20284 22.7652 4.26245C21.8521 4.32012 20.9606 4.56504 20.1462 4.98197C19.3442 5.42155 18.6393 6.01872 18.0739 6.73761C17.4792 7.47753 17.0499 8.33623 16.8148 9.25594C16.6209 10.1308 16.5989 11.035 16.75 11.9182C16.75 12.0693 16.75 12.0909 16.6205 12.0693C11.4903 11.3138 7.28108 9.49338 3.84176 5.58637C3.69066 5.41369 3.61152 5.41369 3.4892 5.58637C1.99259 7.86006 2.71931 11.4577 4.59007 13.2349C4.8419 13.4723 5.10093 13.7026 5.37435 13.9184C4.51662 13.8576 3.67983 13.6251 2.91358 13.2349C2.76967 13.1414 2.69053 13.1917 2.68333 13.3644C2.66293 13.6038 2.66293 13.8445 2.68333 14.0839C2.83346 15.2313 3.28563 16.3182 3.99358 17.2335C4.70154 18.1487 5.63988 18.8596 6.71266 19.2933C6.97418 19.4053 7.24668 19.4897 7.52572 19.5451C6.73167 19.7014 5.91728 19.7258 5.11532 19.6171C4.94263 19.5811 4.87788 19.6746 4.94263 19.8401C6.00033 22.7182 8.29561 23.596 9.9793 24.0853C10.2095 24.1213 10.4398 24.1213 10.6988 24.1789C10.6988 24.1789 10.6988 24.1788 10.6556 24.222C10.1592 25.1286 8.15171 25.7402 7.23072 26.0568C5.54967 26.6606 3.75737 26.8914 1.9782 26.7332C1.69758 26.69 1.63283 26.6972 1.56088 26.7332C1.48892 26.7691 1.56088 26.8483 1.64002 26.9202C1.99978 27.1577 2.35955 27.3663 2.7337 27.5678C3.84755 28.1753 5.02512 28.6579 6.24497 29.0069C12.5624 30.7481 19.6713 29.4673 24.4129 24.7545C28.1401 21.0561 29.4496 15.9547 29.4496 10.8461C29.4496 10.6518 29.687 10.5367 29.8237 10.436C30.7667 9.70125 31.598 8.83357 32.2917 7.86006C32.4118 7.71495 32.4734 7.53018 32.4644 7.34201C32.4644 7.23408 32.4644 7.25567 32.3277 7.31323Z"
                fill="#CE7D63"
              />
            </svg>
          </a>
          <a
            href=""
            className="p-3.5 bg-dark-10 border-dark-20 border rounded-lg 3xl:p-4 3xl:rounded-xl"
          >
            <svg
              className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 31C24.732 31 31 24.732 31 17C31 9.26801 24.732 3 17 3C9.26801 3 3 9.26801 3 17C3 24.732 9.26801 31 17 31Z"
                fill="#CE7D63"
              />
              <path
                d="M26.3402 16.9996C26.343 17.1914 26.3192 17.3829 26.2688 17.568C26.2184 17.7532 26.1421 17.9306 26.042 18.0944C25.9422 18.2582 25.8197 18.4073 25.6783 18.5372C25.5369 18.667 25.378 18.7762 25.2062 18.8616C25.21 18.9127 25.2132 18.9642 25.2149 19.0156C25.2191 19.1183 25.2191 19.221 25.2149 19.3236C25.2132 19.3751 25.21 19.4265 25.2062 19.4776C25.2062 22.6136 21.5522 25.1616 17.0442 25.1616C12.5362 25.1616 8.88216 22.6136 8.88216 19.4776C8.87831 19.4265 8.87516 19.3751 8.87341 19.3236C8.8692 19.221 8.8692 19.1183 8.87341 19.0156C8.87516 18.9642 8.87831 18.9127 8.88216 18.8616C8.61293 18.7379 8.3738 18.5571 8.18132 18.3318C7.98884 18.1065 7.84762 17.8421 7.76741 17.5568C7.68734 17.2715 7.67029 16.9721 7.71743 16.6795C7.76457 16.3868 7.87477 16.1079 8.04041 15.8621C8.20591 15.6164 8.42289 15.4096 8.6763 15.2561C8.92972 15.1026 9.2135 15.006 9.50796 14.9731C9.80246 14.9401 10.1006 14.9716 10.3818 15.0652C10.6629 15.1589 10.9203 15.3126 11.1362 15.5156C11.5369 15.2441 11.9567 15.0018 12.3923 14.7908C12.8281 14.5801 13.2785 14.4009 13.7402 14.2553C14.2018 14.1097 14.6736 13.998 15.1514 13.9207C15.6291 13.8433 16.1121 13.801 16.5962 13.7936L17.6322 8.93565C17.6437 8.8793 17.6665 8.8261 17.699 8.7785C17.7312 8.73125 17.7729 8.69065 17.8208 8.6595C17.8691 8.62835 17.923 8.607 17.9797 8.5965C18.0361 8.58635 18.0942 8.5874 18.1502 8.59965L21.5802 9.28565C21.9263 8.691 22.6529 8.4362 23.2945 8.684C23.936 8.9318 24.3028 9.60905 24.1593 10.2817C24.0162 10.9544 23.4051 11.4234 22.7184 11.3881C22.0313 11.3527 21.4717 10.8235 21.3982 10.1396L18.4022 9.50965L17.4922 13.8776C17.9703 13.8878 18.4473 13.9326 18.9191 14.0113C19.8639 14.1688 20.781 14.4619 21.6421 14.8814C22.0722 15.0907 22.4866 15.3308 22.8822 15.5996C23.1666 15.3266 23.524 15.1417 23.9112 15.0673C24.2984 14.9926 24.6989 15.0317 25.0644 15.1796C25.43 15.3276 25.7449 15.5781 25.9713 15.901C26.1977 16.2239 26.3258 16.6055 26.3402 16.9996ZM12.4466 18.9355C12.5173 19.1052 12.6202 19.2596 12.7504 19.3894C12.8802 19.5196 13.0346 19.6225 13.2043 19.6932C13.3742 19.7635 13.5563 19.7997 13.7402 19.7996C14.3065 19.7996 14.8168 19.4584 15.0338 18.9355C15.2504 18.4122 15.1304 17.8102 14.73 17.4098C14.3296 17.0094 13.7276 16.8894 13.2043 17.106C12.6814 17.323 12.3402 17.8333 12.3402 18.3996C12.3402 18.5834 12.3762 18.7654 12.4466 18.9355ZM20.4651 22.2962C20.5368 22.2262 20.5778 22.1306 20.5792 22.0305C20.5806 21.9301 20.5417 21.8335 20.4717 21.7617C20.4017 21.69 20.3062 21.649 20.2061 21.6476C20.1056 21.6462 20.009 21.6851 19.9282 21.7456C19.7176 21.8966 19.4947 22.0295 19.2618 22.1429C19.0288 22.2563 18.7867 22.3499 18.538 22.4225C18.2895 22.495 18.035 22.5464 17.7778 22.5762C17.5202 22.6059 17.2608 22.6136 17.0022 22.5996C16.7439 22.6112 16.4849 22.6007 16.2283 22.5685C15.9717 22.5366 15.7183 22.4828 15.4709 22.4075C15.2231 22.3326 14.9827 22.2367 14.7513 22.1212C14.52 22.0057 14.2988 21.8706 14.0902 21.7176C14.0177 21.6581 13.9257 21.6277 13.8319 21.6322C13.7381 21.6368 13.6495 21.6763 13.583 21.7425C13.5169 21.809 13.4773 21.8975 13.4728 21.9913C13.4682 22.0851 13.4987 22.1772 13.5582 22.2496C13.8042 22.4351 14.0657 22.5989 14.3397 22.7396C14.6138 22.8803 14.8997 22.9969 15.1937 23.0886C15.4877 23.1803 15.7891 23.2464 16.0946 23.2867C16.4002 23.3266 16.7085 23.3402 17.0162 23.3276C17.3238 23.3402 17.6322 23.3266 17.9377 23.2867C18.5497 23.2062 19.1433 23.0212 19.6926 22.7396C19.9667 22.5989 20.2281 22.4351 20.4742 22.2496L20.4651 22.2962ZM20.2082 19.9116C20.3979 19.9137 20.5862 19.877 20.7615 19.8042C20.9369 19.731 21.0954 19.6232 21.2277 19.4871C21.36 19.3509 21.4629 19.1892 21.5308 19.0118C21.5988 18.8346 21.6298 18.6453 21.6222 18.4556C21.6222 17.8893 21.2809 17.379 20.758 17.162C20.2348 16.9454 19.6328 17.0654 19.2324 17.4658C18.832 17.8662 18.7119 18.4682 18.9286 18.9915C19.1456 19.5144 19.6559 19.8556 20.2222 19.8556L20.2082 19.9116Z"
                fill="#1F1F1F"
              />
            </svg>
          </a>
          <a
            href={blog.fb__link}
            className="p-3.5 bg-dark-10 border-dark-20 border rounded-lg 3xl:p-4 3xl:rounded-xl"
          >
            <svg
              className="h-6 w-6 xll:h-6.7 xll:w-6.7 3xl:h-8.5 3xl:w-8.5"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.1306 18.749L23.9285 13.684H19.0135V10.3917C19.0135 9.00678 19.6997 7.65348 21.8939 7.65348H24.1599V3.34031C22.8403 3.13006 21.5069 3.01632 20.1704 3C16.1252 3 13.4841 5.42962 13.4841 9.82193V13.684H9V18.749H13.4841V31H19.0135V18.749H23.1306Z"
                fill="#CE7D63"
              />
            </svg>
          </a>
        </div>
        <div className="bg-dark-10 rounded-3xl p-6 space-y-4 xll:w-[750px] xll:p-10 xll:rounded-xl 3xl:w-[1122px] 3xl:p-12.5 3xl:space-y-7.5 3xl:rounded-14">
          <div className="space-y-2 font-roboto__flex xll:space-y-3 3xl:space-y-3.5">
            <h1 className="text-22 font-medium leading-150 text-orange-95 uppercase xll:text-2xl xll:leading-150">
              {blog.tittle1}
            </h1>
            <div className="space-y-4 xll:space-y-5 3xl:space-y-6">
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera1}
              </p>
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera2}
              </p>
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera3}
              </p>
            </div>
          </div>
          <div className="space-y-2 font-roboto__flex xll:space-y-3 3xl:space-y-3.5">
            <h1 className="text-22 font-medium leading-150 text-orange-95 uppercase xll:text-2xl xll:leading-150">
              {blog.tittle2}
            </h1>
            <div className="space-y-4 xll:space-y-5 3xl:space-y-6">
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera4}
              </p>
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera5}
              </p>
            </div>
          </div>
          <div className="space-y-2 font-roboto__flex xll:space-y-3 3xl:space-y-3.5">
            <h1 className="text-22 font-medium leading-150 text-orange-95 uppercase xll:text-2xl xll:leading-150">
              {blog.tittle3}
            </h1>
            <div className="space-y-4 xll:space-y-5 3xl:space-y-6">
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera6}
              </p>
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera7}
              </p>
              <p className="pl-5 text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150">
                {blog.pera8}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2.5 xll:w-[325px] xll:sticky top-4 h-fit 3xl:w-[441px]">
          <div className="p-6 bg-dark-10 rounded-10 xll:rounded-xl 3xl:p-5">
            <div className="flex gap-3 items-center font-roboto__flex mb-5 3xl:gap-3.5 3xl:mb-6">
              <img
                src={blog.img}
                alt="writer img"
                className="h-14.5 w-14.5 3xl:h-20 3xl:w-20"
              />
              <div>
                <h3 className="text-lg font-medium leading-150 text-orange-90 3xl:text-xl 3xl:leading-150 2xl:mb-0.5">
                  {blog.writerName}
                </h3>
                <h5 className="text-base leading-150 text-gray-50 3xl:text-lg 3xl:leading-150">
                  {blog.writertitle}
                </h5>
              </div>
            </div>
            <p className="text-sm leading-150 text-gray-70 xll:text-base xll:leading-150 3xl:text-lg 3xl:leading-150 mb-4 xll:mb-7.5 3xl:mb-10">
              {blog.writerBio}
            </p>
            <a
              href={blog.twitter__link}
              className="flex justify-between items-center py-3.5 px-5 bg-dark-12 rounded-lg 3xl:py-4.8 3xl:px-6 3xl:rounded-14"
            >
              <div className="flex gap-2 items-center 3xl:gap-2.5">
                <div>
                  <svg
                    className="h-5 w-5 3xl:h-6 3xl:w-6"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.3277 7.31323C31.327 7.74387 30.2751 8.04374 29.1978 8.20544C29.7014 8.11909 30.4425 7.21249 30.7375 6.84554C31.1857 6.29202 31.5273 5.66013 31.7449 4.98197C31.7449 4.93161 31.7952 4.85965 31.7449 4.82368C31.7195 4.80982 31.691 4.80256 31.6621 4.80256C31.6332 4.80256 31.6048 4.80982 31.5794 4.82368C30.4096 5.45716 29.1646 5.94065 27.8738 6.26272C27.8288 6.27647 27.781 6.2777 27.7353 6.26629C27.6897 6.25488 27.648 6.23126 27.6148 6.19797C27.5143 6.07833 27.4062 5.96537 27.291 5.85979C26.7646 5.38811 26.1673 5.00205 25.521 4.71575C24.6486 4.35784 23.7063 4.20284 22.7652 4.26245C21.8521 4.32012 20.9606 4.56504 20.1462 4.98197C19.3442 5.42155 18.6393 6.01872 18.0739 6.73761C17.4792 7.47753 17.0499 8.33623 16.8148 9.25594C16.6209 10.1308 16.5989 11.035 16.75 11.9182C16.75 12.0693 16.75 12.0909 16.6205 12.0693C11.4903 11.3138 7.28108 9.49338 3.84176 5.58637C3.69066 5.41369 3.61152 5.41369 3.4892 5.58637C1.99259 7.86006 2.71931 11.4577 4.59007 13.2349C4.8419 13.4723 5.10093 13.7026 5.37435 13.9184C4.51662 13.8576 3.67983 13.6251 2.91358 13.2349C2.76967 13.1414 2.69053 13.1917 2.68333 13.3644C2.66293 13.6038 2.66293 13.8445 2.68333 14.0839C2.83346 15.2313 3.28563 16.3182 3.99358 17.2335C4.70154 18.1487 5.63988 18.8596 6.71266 19.2933C6.97418 19.4053 7.24668 19.4897 7.52572 19.5451C6.73167 19.7014 5.91728 19.7258 5.11532 19.6171C4.94263 19.5811 4.87788 19.6746 4.94263 19.8401C6.00033 22.7182 8.29561 23.596 9.9793 24.0853C10.2095 24.1213 10.4398 24.1213 10.6988 24.1789C10.6988 24.1789 10.6988 24.1788 10.6556 24.222C10.1592 25.1286 8.15171 25.7402 7.23072 26.0568C5.54967 26.6606 3.75737 26.8914 1.9782 26.7332C1.69758 26.69 1.63283 26.6972 1.56088 26.7332C1.48892 26.7691 1.56088 26.8483 1.64002 26.9202C1.99978 27.1577 2.35955 27.3663 2.7337 27.5678C3.84755 28.1753 5.02512 28.6579 6.24497 29.0069C12.5624 30.7481 19.6713 29.4673 24.4129 24.7545C28.1401 21.0561 29.4496 15.9547 29.4496 10.8461C29.4496 10.6518 29.687 10.5367 29.8237 10.436C30.7667 9.70125 31.598 8.83357 32.2917 7.86006C32.4118 7.71495 32.4734 7.53018 32.4644 7.34201C32.4644 7.23408 32.4644 7.25567 32.3277 7.31323Z"
                      fill="#CE7D63"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-80 leading-150 3xl:text-xl font-roboto__mono 3xl:leading-150">
                  {blog.usename}
                </p>
              </div>
              <div>
                <svg
                  className="h-6 w-6 3xl:h-6.7 3xl:w-6.7"
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
            </a>
          </div>
          <div className="p-2.5 bg-dark-10 rounded-xl space-y-2.5 3xl:p-5 3xl:rounded-14 3xl:space-y-5">
            <div className="flex gap-2 items-center 3xl:gap-2.5">
              <div className="p-3 bg-dark-12 border-dark-20 border rounded-lg 3xl:p-4 3xl:rounded-xl">
                <svg
                  className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83203 13.4442C2.83203 20.3333 8.52622 24.0044 12.6945 27.2903C14.1654 28.4499 15.582 29.5416 16.9987 29.5416C18.4154 29.5416 19.832 28.4499 21.3029 27.2903C25.4712 24.0044 31.1654 20.3333 31.1654 13.4442C31.1654 6.555 23.3735 1.66935 16.9987 8.2925C10.6239 1.66935 2.83203 6.555 2.83203 13.4442Z"
                    fill="#ED142E"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between w-full p-4 bg-dark-12 rounded-10 3xl:p-5 3xl:rounded-14">
                <h5 className="text-sm font-medium leading-150 text-gray-70 font-roboto__mono uppercase 3xl:text-lg 3xl:leading-150">
                  Liked By
                </h5>
                <div className="flex gap-4 3xl:gap-5">
                  <h3 className="text-base leading-150 font-medium text-white font-roboto__mono relative before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-dark-25 before:top-0 before:-right-2 3xl:text-lg 3xl:leading-150 3xl:before:-right-2.5">
                    {blog.like}
                  </h3>
                  <h3 className="text-sm leading-150 text-gray-50 font-roboto__flex 3xl:text-base 3xl:leading-150">
                    Users
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center 3xl:gap-2.5">
              <div className="p-3 bg-dark-12 border-dark-20 border rounded-lg 3xl:p-4 3xl:rounded-xl">
                <svg
                  className="h-6.7 w-6.7 3xl:h-8.5 3xl:w-8.5"
                  viewBox="0 0 34 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.553 8.0556C19.553 5.44758 21.6768 3.33337 24.2967 3.33337C26.9165 3.33337 29.0404 5.44758 29.0404 8.0556C29.0404 10.6636 26.9165 12.7778 24.2967 12.7778C22.9738 12.7778 21.7782 12.2385 20.9187 11.3708L14.3519 15.8419C14.4126 16.1436 14.4444 16.4552 14.4444 16.7735C14.4444 17.404 14.3198 18.0066 14.094 18.5574L21.2945 23.2883C22.1117 22.6228 23.1574 22.2223 24.2967 22.2223C26.9165 22.2223 29.0404 24.3365 29.0404 26.9445C29.0404 29.5525 26.9165 31.6667 24.2967 31.6667C21.6768 31.6667 19.553 29.5525 19.553 26.9445C19.553 26.2614 19.6992 25.6112 19.962 25.0241L12.8196 20.3315C11.9865 21.0556 10.8951 21.4958 9.70072 21.4958C7.08085 21.4958 4.95703 19.3816 4.95703 16.7735C4.95703 14.1655 7.08085 12.0513 9.70072 12.0513C11.2072 12.0513 12.5483 12.7503 13.4166 13.8382L19.7809 9.50498C19.6329 9.04763 19.553 8.56031 19.553 8.0556Z"
                    fill="#DA9E8B"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between w-full p-4 bg-dark-12 rounded-10 3xl:p-5 3xl:rounded-14">
                <h5 className="text-sm font-medium leading-150 text-gray-70 font-roboto__mono uppercase 3xl:text-lg 3xl:leading-150">
                  Shared BY
                </h5>
                <div className="flex gap-4">
                  <h3 className="text-base leading-150 font-medium text-white font-roboto__mono relative before:content-[''] before:absolute before:w-[2px] before:h-full before:bg-dark-25 before:top-0 before:-right-2 3xl:text-lg 3xl:leading-150 3xl:before:-right-2.5">
                    {blog.share}
                  </h3>
                  <h3 className="text-sm leading-150 text-gray-50 font-roboto__flex 3xl:text-base 3xl:leading-150">
                    Users
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 xll:px-10 3xl:px-12.5 mb-12.5 xll:mb-20 3xl:mb-24.7">
        <div className="wrapper__div">
          <Commontittle tittle="Related Blogs" button="ALL Blogs" />
          <div className="grid grid-cols-1 gap-1 relatedblog__grid xll:grid-cols-3 3xl:gap-5 mt-2.5 3xl:mt-5">
            {blogcirddata.map((data, i) => {
              return (
                <BlogCird
                  key={i}
                  img={data.img}
                  tittle={data.tittle}
                  pera={data.pera}
                  id={`/blog/${data.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
      <TestimornialSection />
      <FaqSection />
      <Transform />
    </>
  );
}

export default Blogdetails;
