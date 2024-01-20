"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { apiUrl } from "../../utils/URLs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IoIosHeart } from "react-icons/io";
import { redirect, usePathname } from "next/navigation";
const ProductItem = ({ data, id }) => {
  const pathName = usePathname();
  if (pathName === "/product-detail") {
    redirect("/");
  }
  // console.log(data);
  return (
    <div className="   hover:scale-105 transition-all duration-300 cursor-pointer">
      <Link
        href={`/product-detail/${id}`}
        aria-label="Link"
        className=" z-10    gap-4 sm:gap-10    "
      >
        <div className=" relative flex items-center justify-center p-2 mb-2 rounded-md border-2 border-gray-300 dark:border-gray-800 bg-[#f8faff] dark:bg-gray-950">
          {data ? (
            <>
              <Image
                src={apiUrl + data?.attributes?.img?.data?.[0]?.attributes?.url}
                alt={data?.attributes?.title}
                className="  object-cover  hover:group:scale-105"
                width={120}
                height={90}
              />
            </>
          ) : (
            <>
              <SkeletonProductCard />
              <SkeletonProductCard />
            </>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base block text-ellipsis overflow-hidden whitespace-nowrap  ">
            {data?.attributes?.title || <Skeleton />}
          </span>
          <span className="text-base text-gray-800  dark:text-gray-400     font-semibold  ">
            $ {`${data?.attributes?.price}.00` || <Skeleton />}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
