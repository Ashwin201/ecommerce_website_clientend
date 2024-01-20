import React from "react";
import Image from "next/image";
// import { apiUrl } from "../utils/URLs";
import ProductItem from "../app/product-detail/page";
import SkeletonProductCard from "./SkeletonProductCard";
const ProductList = ({ innerPage, data }) => {
  console.log(data);
  if (!data) {
    // Handle the case where data is not defined (e.g., set it to an empty array)
    data = [];
  }
  return (
    <div>
      {!innerPage && (
        <h1 className=" relative font-bold text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text  mb-14">
          Popular Products
          <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-24 bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700"></span>
        </h1>
      )}

      <div className=" grid grid-cols-12 gap-4  ">
        {data &&
          data?.map &&
          data?.map((item) => (
            <div
              key={item.id}
              className="sm:gap-0 col-span-6 sm:col-span-4   md:col-span-3 place-items-center"
            >
              <ProductItem data={item} id={item.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
