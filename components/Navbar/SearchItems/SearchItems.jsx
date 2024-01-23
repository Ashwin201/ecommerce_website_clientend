"use client";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import SearchApi from "../../../utils/SearchApi";

const SearchItems = ({ showSearch, setShowSearch }) => {
  const [query, setQuery] = useState("");
  let { data } = SearchApi(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  // console.log(data);

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  if (!query.length) {
    data = null;
  }

  return (
    <div
      className={`     ${
        showSearch
          ? "fixed z-50  top-0 left-0 w-screen h-screen transition ease-in-out duration-1000 bg-[#ffffff] dark:bg-gray-950 "
          : "fixed z-50  -top-full left-0 h-screen transition ease-in-out rounded-r-3xl duration-800"
      } `}
    >
      <div className=" w-[100%]  relative flex items-center justify-center   py-3  sm:py-5  border-b-2 border-gray-100 dark:border-gray-950  ">
        <input
          type="text"
          className="  w-[70%]  bg-[#ffffff] dark:bg-gray-950 placeholder:bg-[#ffffff] dark:placeholder:bg-gray-950  outline-none hover:outline-none placeholder:text-lg text-lg 
          sm:placeholder:text-4xl sm:text-4xl
           placeholder:text-gray-400 dark:placeholder:text-gray-700 text-gray-400 dark:text-gray-700 font-semibold text-center "
          autoFocus
          value={query}
          onChange={onChange}
          placeholder=" Search for products"
        />
        <div
          onClick={() => setShowSearch(false)}
          className="  cursor-pointer  absolute top-4 sm:top-6 right-3 sm:right-8 md:right-16 text-gray-500 dark:text-gray-400  "
        >
          <MdClose size={26} />
        </div>
      </div>
      <div className=" py-3 sm:py-5 md:px-32 lg:px-60 ">
        {data?.map((item) => (
          <div className=" " key={item.id}>
            <Link
              href={`/product-detail/${item.id}`}
              aria-label="Product Link"
              onClick={() => setShowSearch(false)}
              className=" mx-4 relative flex items-center justify-start lg:justify-center    gap-3 pb-2  hover:scale-[.99] transition ease-in-out duration-300 cursor-pointer  "
            >
              <Image
                src={item?.attributes?.img?.data?.[0]?.attributes?.url}
                alt="Image Product"
                width={50}
                height={50}
                className=" rounded-md  w-[40px] h-auto object-cover cursor-pointer "
              />
              <div className=" text-base sm:text-lg text-gray-900 dark:text-gray-400  font-semibold inline-block text-ellipsis overflow-x-hidden whitespace-nowrap cursor-pointer ">
                {item?.attributes?.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchItems;
// import { MdClose } from "react-icons/md";
// import useFetch from "../../../hooks/useFetch";
//import { API_URL } from "../../../utils/Urls";
// const [query, setQuery] = useState("");
// let { data } = useFetch(
//   `/api/products?populate=*&filters[title][$contains]=${query}`
// );

// // console.log(data);

// const onChange = (e) => {
//   setQuery(e.target.value);
// };
// if (!query.length) {
//   data = null;
// }
