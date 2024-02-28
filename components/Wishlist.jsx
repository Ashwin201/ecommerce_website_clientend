"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartButton from "./CartButton";
import toast, { Toaster } from "react-hot-toast";
import img1 from "../assets/products/headphone-prod-3.webp";
import { IoMdHeartDislike } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { deleteFavouriteProduct, resetFavourite } from "../redux/productSlice";
import { RiDeleteBin5Fill } from "react-icons/ri";
import emptyWishlist from "../assets/wishlist.webp";
import { BiShoppingBag } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
const Wishlist = () => {
  const dispatch = useDispatch();
  const { favouriteData, userInfo } = useSelector((store) => store.products);
  const { data: session } = useSession();
  const handleReset = () => {
    const confirmed = window.confirm(
      "Are You sure you want to reset wishlist?"
    );
    if (confirmed) {
      dispatch(resetFavourite());
      toast.success(`All products removed from wishlist.`);
    }
  };
  const Products = favouriteData.slice().reverse();
  return (
    <section>
      {favouriteData.length > 0 ? (
        <div className="mx-auto max-w-screen-xl px-4 mb-6  sm:px-6  lg:px-8 flex flex-col  justify-start  w-full min-h-[74vh]">
          <div className="mx-auto max-w-3xl">
            <h1 className=" relative font-bold tracking-wide  text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text ">
              Your Wishlist
              <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-20 bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 "></span>
            </h1>

            <div className="mt-12">
              <ul className=" flex flex-col gap-6 ">
                {Products &&
                  Products.map((item) => (
                    <li className="flex  items-center gap-4 ">
                      <Link
                        href={"/wishlist"}
                        aria-label="Wishlist"
                        className=" max-[380px]:w-40  sm:w-20  h-auto"
                      >
                        <Image
                          src={item.img}
                          alt="Image Product"
                          height={80}
                          width={80}
                          className=" w-full "
                        />
                      </Link>

                      <div>
                        <Link
                          href={`/product-detail/${item.id}`}
                          aria-label="Wishlist"
                        >
                          <h3 className="  text-sm font-semibold line-clamp-1  ">
                            {item.title}
                          </h3>
                        </Link>
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-800 dark:text-gray-400">
                          <div className="mb-2">
                            <dt className="inline text-xs font-medium">
                              Price :
                            </dt>
                            <dd className="inline text-xs font-medium">
                              {" "}
                              $ {item.price}
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button
                          className="text-gray-800 dark:text-gray-400 transition hover:text-red-600"
                          onClick={() => {
                            dispatch(deleteFavouriteProduct(item?.id));
                            toast.success(
                              `${item.shortTitle} removed from wishlist.`
                            );
                          }}
                        >
                          <span className="sr-only">Remove item</span>

                          <RiDeleteBin5Fill size={22} />
                        </button>
                      </div>
                    </li>
                  ))}

                {/* Reset Button  */}
                <div
                  onClick={handleReset}
                  className="  w-full justify-center flex items-center py-2  px-3  text-gray-200 font-medium text-base bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300 mt-4  "
                >
                  <IoMdHeartDislike size={22} />
                  <span className=" ml-2">Reset Wishlist</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className=" flex flex-col   items-center w-full min-h-[74vh] mt-6 ">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={emptyWishlist}
                alt="Empty Cart "
                priority={true}
                className="w-[400px] h-auto"
              />
            </motion.div>
            <div className="-mt-10">
              <h1 className=" font-bold text-2xl text-center sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mb-6">
                Oops! Your Wishlist Is Empty.
              </h1>
            </div>
            <Link
              href={"/products"}
              aria-label="Home Link"
              className=" flex gap-2 items-center justify-center align-middle py-2  px-3 sm:px-4 text-gray-200 font-medium text-sm bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 
                rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300 "
            >
              <BiShoppingBag size={22} />
              Continue Shopping
            </Link>
          </div>
        </>
      )}

      <Toaster
        position=" bottom-right"
        toastOptions={{
          style: {
            background: "black",
            color: "white",
          },
        }}
      />
    </section>
  );
};

export default Wishlist;
