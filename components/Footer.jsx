import React from "react";
import Link from "next/link";
import Image from "next/image";
import payments from "../assets/payments.webp";
const Footer = () => {
  return (
    <>
      <div className=" border-t-[.5px] border-gray-400 ">
        <div className=" grid grid-cols-3 gap-5 md:gap-10 mt-10   place-items-center ">
          <div className=" flex flex-col gap-3 text-center  items-center justify-center lg:justify-start lg:text-start lg:items-start col-span-4 md:col-span-2 lg:col-span-1 ">
            <h1 className="text-gray-950 dark:text-gray-200 font-semibold mb-[2px] ">
              About
            </h1>

            <p className=" text-gray-800  dark:text-gray-400    font-medium text-base">
              I' Ashmin Sharma, a web developer and UI designer deeply committed
              to crafting visually appealing, functional, and responsive
              designs. With a profound passion for transforming pixels into
              captivating user experiences.
            </p>
          </div>
          <div className=" flex flex-col gap-3 text-center  items-center justify-center lg:justify-start lg:text-start lg:items-start  col-span-3 md:col-span-2 lg:col-span-1 my-2">
            <h1 className="text-gray-950 dark:text-gray-200 font-semibold mb-[2px] ">
              Contact
            </h1>
            <div className=" flex flex-col gap-2">
              <p className=" text-gray-800  dark:text-gray-400    font-medium text-base">
                Delhi gate, Jhajjar, Haryana
              </p>
              <p className=" text-gray-800  dark:text-gray-400    font-medium text-base">
                Mail : sharmaashmin203@gmail.com
              </p>
              <p className=" text-gray-800  dark:text-gray-400    font-medium text-base">
                Phone : +91 860 7343 110
              </p>
            </div>
          </div>
          {/* <div className=" flex flex-col gap-3 text-center  items-center justify-center lg:justify-start lg:text-start lg:items-start col-span-4 md:col-span-2 lg:col-span-1 ">
            <h1 className="text-gray-950 dark:text-gray-200 font-semibold mb-[2px]">
              Categories
            </h1>
            <div className=" flex flex-col gap-2">
              <Link
                href={"/"}
                aria-label="Head Phones"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
              >
                Head Phones
              </Link>
              <Link
                href={"/"}
                aria-label="Head Phones"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
              >
                AirPods
              </Link>
              <Link
                href={"/"}
                aria-label="Smart Watches"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
              >
                Smart Watches
              </Link>
              <Link
                href={"/"}
                aria-label="Bluetooth Speakers"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
              >
                Bluetooth Speakers
              </Link>
            </div>
          </div> */}
          <div className=" flex flex-col gap-3 text-center  items-center justify-center lg:justify-start lg:text-start lg:items-start col-span-3 md:col-span-2 lg:col-span-1 mb-2  mt-2 md:mt-0  ">
            <h1 className="text-gray-950 dark:text-gray-200 font-semibold mb-[2px]">
              Pages
            </h1>
            <div className=" flex flex-col gap-2">
              <Link
                aria-label="Instagram"
                href="https://instagram.com/ashwin.203?igshid=YmMyMTA2M2Y="
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href="https://github.com/Ashwin201"
                aria-label="Github"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
                target="_blank"
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/ashmin-sharma-6a4867257"
                className=" text-gray-800  dark:text-gray-400    font-medium text-base"
                aria-label="Linkedin"
                target="_blank"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center flex-col-reverse sm:flex-row mt-10 gap-3">
          <div className="text-gray-800  dark:text-gray-400    font-medium text-sm sm:text-base ">
            Copyright @2024. Created by Ashmin Sharma.
          </div>
          <div>
            <Image src={payments} alt="Payments" className=" h-[22px] w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
