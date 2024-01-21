"use client";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CartButton from "./CartButton";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCartXFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import emptyCart from "../assets/empty-cart.webp";
import { deleteCartProduct, resetCart } from "../redux/productSlice";
import { BiShoppingBag } from "react-icons/bi";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { devUrl } from "../utils/URLs";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData, userInfo } = useSelector((store) => store.products);

  const handleReset = () => {
    const confirmed = window.confirm("Are You sure you want to reset cart?");
    if (confirmed) {
      dispatch(resetCart());
      toast.success(`All products removed from cart.`);
    }
  };

  useEffect(() => {
    let amount = 0;
    productData.map((item) => {
      amount += item.price * item.quantity;
      setTotalAmount(amount);
    });
  }, [productData]);

  //Stripe Checkout

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handleCheckout = async () => {
    if (session?.user) {
      const stripe = await stripePromise;
      const response = await fetch(`${devUrl}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "appication/json" },
        body: JSON.stringify({
          items: productData,
          email: session?.user?.email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        stripe?.redirectToCheckout({ sessionId: data.id });
      }
    } else {
      toast.error("Please sign in to make Checkout");
    }
  };

  const Products = productData.slice().reverse();
  return (
    <>
      {productData.length > 0 ? (
        <div className="lg:mx-10 mb-10">
          <h1 className=" relative font-bold  text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text ">
            Your Cart
            <span className=" absolute left-0 -bottom-2 h-[2.5px] rounded-sm w-20 bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 "></span>
          </h1>

          <div className="mt-14 ">
            <div className="grid grid-cols-3 gap-8  items-start  ">
              <div className="  col-span-3 lg:col-span-2 flex  flex-col gap-10 rounded-md shadow-lg shadow-gray-200 dark:shadow-gray-800 p-6 ">
                {Products &&
                  Products?.map((item) => (
                    <div className="flex  items-center gap-4 " key={item.id}>
                      <Link
                        href={`/product-detail/${item.id}`}
                        aria-label="Cart"
                        className=" max-[380px]:w-40  sm:w-20 h-auto"
                      >
                        <Image
                          src={item.img} //Firstly add quantity 1 to strapi products
                          alt="Image Product"
                          height={80}
                          width={80}
                          className=" w-full "
                        />
                      </Link>

                      <div>
                        <div className=" flex gap-4">
                          <Link
                            href={`/product-detail/${item.id}`}
                            aria-label="Cart"
                          >
                            <h3 className="  text-sm font-semibold line-clamp-1  ">
                              {item.title}
                            </h3>
                          </Link>
                          <div className="flex flex-1 items-center justify-end gap-2">
                            <button
                              className="text-gray-800 dark:text-gray-400 transition hover:text-red-600"
                              onClick={() => {
                                dispatch(deleteCartProduct(item?.id));
                                toast.success(
                                  `${item.shortTitle} removed from cart.`
                                );
                              }}
                            >
                              <span className="sr-only">Remove item</span>
                              <RiDeleteBin5Fill size={22} />
                            </button>
                          </div>
                        </div>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-800 dark:text-gray-400">
                          <div className="mb-2">
                            <dt className="inline text-xs font-medium">
                              {item.quantity} * {`${item.price}.00`} :
                            </dt>
                            <dd className="inline text-sm font-semibold">
                              &nbsp; ${`${item.price * item.quantity}.00`}
                            </dd>
                          </div>

                          <CartButton item={item} cartpage={true} />
                        </dl>
                      </div>
                    </div>
                  ))}

                {/* Reset Button  */}
                <div
                  onClick={handleReset}
                  className="  w-full justify-center flex  items-center -mt-3 py-2  px-3  text-gray-200 font-medium text-base bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300  "
                >
                  <BsCartXFill size={18} />
                  <span className=" ml-2">Reset Cart</span>
                </div>
              </div>

              <div className="col-span-3 lg:col-span-1 p-6 flex  justify-start  rounded-md shadow-lg shadow-gray-200 dark:shadow-gray-800">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    {/* <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div> */}

                    <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium">
                      <span className=" text-lg font-semibold">
                        Total Amount :
                      </span>
                      <span className=" text-lg font-semibold">
                        $ {`${totalAmount}.00`}
                      </span>
                    </div>
                  </dl>

                  <div className="flex justify-end gap-3">
                    <div
                      onClick={handleCheckout}
                      className="   flex items-center   py-2  px-3  text-gray-200 font-medium text-base bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300  "
                    >
                      <IoBagCheckOutline size={18} />
                      <span className=" ml-2">Checkout</span>
                    </div>
                  </div>
                  <p className=" text-sm font-medium text-gray-500">
                    ( This is a total amount you have to pay after checkout for
                    payment.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className=" flex flex-col justify-center align-middle items-center mt-2 mb-6">
            <Image
              src={emptyCart}
              alt="Empty Cart "
              className="w-[400px] h-auto"
            />
            <div className="mt-6">
              <h1 className=" font-bold text-2xl sm:text-3xl bg-gradient-to-r from-slate-700 via-purple-900 to-slate-700 inline-block text-transparent bg-clip-text mb-6">
                Oops! Your Cart Is Empty.
              </h1>
            </div>
            <Link
              href={"/"}
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
    </>
  );
};

export default Cart;

// <div className="flex justify-end">
// <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth="1.5"
//     stroke="currentColor"
//     className="-ms-1 me-1.5 h-4 w-4"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
//     />
//   </svg>

//   <p className="whitespace-nowrap text-xs">
//     2 Discounts Applied
//   </p>
// </span>
// </div>
