import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div>
      <div className="flex flex-col  md:flex-row  lg:gap-5 xl:gap-20 place-items-center mt-5  ">
        <div className=" lg:flex-1 p-5 h-96 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
        <div className="hidden lg:flex flex-col lg:flex-1 mt-6   lg:mt-0  ">
          <span className=" h-6 w-full bg-gray-300  dark:bg-gray-900 rounded-md "></span>
          <div className=" h-10 w-full bg-gray-300 dark:bg-gray-900 rounded-md my-5"></div>
          <div className="  h-36 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
          <div className="h-10 w-full bg-gray-300 dark:bg-gray-900 rounded-md my-5 "></div>
          <div className=" h-10  bg-gray-300 dark:bg-gray-900 rounded-md mt-5"></div>
        </div>
      </div>
      <div className="flex lg:hidden  h-6 w-full bg-gray-300  dark:bg-gray-900 rounded-md mt-24 "></div>
      <div className="flex lg:hidden  h-10 w-full bg-gray-300 dark:bg-gray-900 rounded-md my-5"></div>
      <div className="flex lg:hidden   h-36 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
      <div className="flex lg:hidden  h-10 w-full bg-gray-300 dark:bg-gray-900 rounded-md my-5 "></div>
      <div className="flex lg:hidden  h-10  bg-gray-300 dark:bg-gray-900 rounded-md mt-5"></div>
    </div>
  );
};

export default SkeletonProductInfo;
