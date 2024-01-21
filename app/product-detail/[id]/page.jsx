// "use client";
import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import RelatedProduct from "./RelatedProducts/RelatedProduct";
import ShareButtons from "../../../components/ShareButtons";
import GlobalApis from "../../../utils/GlobalApis";
import { apiUrl } from "../../../utils/URLs";
import Breadcrumb from "../../../components/Breadcrumb";
import { FaCartPlus } from "react-icons/fa6";
import CartButton from "../../../components/CartButton";
import SkeletonProductInfo from "../../../components/SkeletonProductInfo";
import SkeletonProductCard from "../../../components/SkeletonProductCard";

import WishlistButton from "../../../components/WishlistButton";
const SingleProduct = async ({ params }) => {
  const { id } = params;
  const res = await GlobalApis.getLatestProductsById(id);
  const product = res.data.data;

  // console.log(product);
  return (
    <div>
      <Toaster
        position=" bottom-right"
        toastOptions={{
          style: {
            background: "black",
            color: "white",
          },
        }}
      />
      {product ? (
        <>
          <Breadcrumb first={"product-detail"} second={id} />
          <div className="grid grid-cols-2 gap-5 lg:gap-5 xl:gap-20 place-items-center mt-3">
            <div className=" relative col-span-2 lg:col-span-1 p-5 ">
              <Image
                src={product?.[0]?.attributes?.img?.data?.[0]?.attributes?.url}
                alt="Product Image"
                priority={true}
                className=" w-auto h-auto"
                width={500}
                height={600}
              />
              <div className="absolute top-2   right-2">
                <WishlistButton product={product} />
              </div>
            </div>
            <div className=" col-span-2 lg:col-span-1 ">
              <div className="text-lg font-medium text-gray-900 dark:text-gray-300">
                <span className="text-gray-800   dark:text-gray-400">
                  Category :{" "}
                </span>
                {
                  product?.[0]?.attributes?.categories?.data?.[0]?.attributes
                    ?.title
                }
              </div>
              <div className=" text-xl sm:text-2xl font-semibold my-4 ">
                {product?.[0]?.attributes?.title}
              </div>
              <div className=" text-base font-medium text-gray-800 dark:text-gray-400  ">
                {product?.[0]?.attributes?.description}
              </div>
              <div className="text-xl text-gray-800   dark:text-gray-400 font-semibold my-4 ">
                $ {`${product?.[0]?.attributes?.price}.00`}
              </div>
              <CartButton hideFromPage={true} product={product} />
              <hr />

              <div className=" flex mt-4 items-center">
                <p className="text-base font-semibold text-gray-700   dark:text-gray-400">
                  Share :
                </p>
                <ShareButtons id={product?.[0]?.id} />
              </div>
            </div>
          </div>
          <RelatedProduct
            productsId={`${id}`}
            categoryId={product?.[0]?.attributes?.categories?.data?.[0]?.id}
          />
        </>
      ) : (
        <>
          <SkeletonProductInfo />
          <div className=" mt-16 ">
            <h1 className=" relative font-bold text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text  mb-12">
              Related Products
              <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-24 bg-gradient-to-r from-slate-700 via-purple-700 to-slate-900"></span>
            </h1>
            <SkeletonProductCard />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
