import React from "react";
import Image from "next/image";
import Link from "next/link";
import { apiUrl } from "../utils/URLs";

const CategoryList = ({ categoryData }) => {
  return (
    <div className="mb-14">
      <h1 className=" relative font-bold  text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mt-20 mb-14">
        Categories
        <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-20 bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 "></span>
      </h1>
      <div className=" grid grid-cols-12   gap-3 sm:gap-5 lg:gap-5   ">
        {categoryData &&
          categoryData.map((item) => (
            <Link
              href={`/category/${item.id}`}
              aril-label={"Link"}
              key={item.id}
              className=" col-span-6 min-[500px]:col-span-4 md:col-span-3  rounded-md   cursor-pointer  "
            >
              <Image
                src={item?.attributes?.img?.data?.[0]?.attributes?.url}
                alt="Category"
                className=" rounded-md  border-2  border-gray-700 hover:scale-105 transition-all duration-300"
                width={300}
                height={100}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
{
  /* <div className=" col-span-4 min-[500px]:col-span-2 lg:col-span-1  rounded-md border-2 border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image src={cat2} alt="Category" className=" rounded-md" />
        </div>
        <div className=" col-span-4 min-[500px]:col-span-2 lg:col-span-1  rounded-md border-2 border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image src={cat3} alt="Category" className=" rounded-md" />
        </div>
        <div className=" col-span-4 min-[500px]:col-span-2 lg:col-span-1  rounded-md border-2 border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer">
          <Image src={cat4} alt="Category" className=" rounded-md" />
        </div> */
}
