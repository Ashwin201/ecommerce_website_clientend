import React from "react";

const SkeletonProductCard = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mb-8 ">
      <div className="  sm:gap-0 col-span-6 sm:col-span-4   md:col-span-3 place-items-center">
        <div className="h-40 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
        <div className="flex flex-col gap-1 mt-6">
          <span className="h-6 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></span>
          <span className="h-4 w-full bg-gray-300 dark:bg-gray-900 rounded-md mt-2 "></span>
        </div>
      </div>
      <div className="  sm:gap-0 col-span-6 sm:col-span-4   md:col-span-3 place-items-center">
        <div className="h-40 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
        <div className="flex flex-col gap-1 mt-6">
          <span className="h-6 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></span>
          <span className="h-4 w-full bg-gray-300 dark:bg-gray-900 rounded-md mt-2 "></span>
        </div>
      </div>
      <div className="  sm:gap-0 col-span-6 sm:col-span-4   md:col-span-3 place-items-center">
        <div className="h-40 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
        <div className="flex flex-col gap-1 mt-6">
          <span className="h-6 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></span>
          <span className="h-4 w-full bg-gray-300 dark:bg-gray-900 rounded-md mt-2 "></span>
        </div>
      </div>
      <div className="  sm:gap-0 col-span-6 sm:col-span-4   md:col-span-3 place-items-center">
        <div className="h-40 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></div>
        <div className="flex flex-col gap-1 mt-6">
          <span className="h-6 w-full bg-gray-300 dark:bg-gray-900 rounded-md "></span>
          <span className="h-4 w-full bg-gray-300 dark:bg-gray-900 rounded-md mt-2 "></span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductCard;
