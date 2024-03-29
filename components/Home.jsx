"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import banner from "../assets/banner-img.png";
const Banner = () => {
  return (
    <div className=" flex flex-col-reverse xl:flex-row items-center gap-8 xl:gap-12 xl:h-[76vh]  ">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className=" flex-1 mr-auto  sm:gap-8 items-center text-center xl:text-start xl:items-start"
      >
        <h1
          className=" text-3xl min-[500px]:text-[34px] font-extrabold md:text-6xl xl:font-bold text-center 
        xl:text-start bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text "
        >
          Listen In Luxury With Our Premium Headphones Emporium
        </h1>
        <p className="mt-5 mb-8 font-medium text-base text-center xl:text-start">
          Explore the world's best Headphones, SmarthWatches and unleash
          Wireless AirPods which creates a pure and powerful listening
          experience and pure low frequency sound effects.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {banner ? (
          <Image
            src={banner}
            priority={true}
            alt="Banner"
            className=" w-auto min-[350px]:w-[300px] sm:w-[400px] h-auto p-5  "
          />
        ) : (
          <div class=" bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse">
            <div class="w-auto min-[350px]:w-[300px] sm:w-[400px] h-[400px] p-5"></div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Banner;
