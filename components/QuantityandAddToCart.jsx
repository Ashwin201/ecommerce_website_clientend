// "use client";
// import { useRouter } from "next/navigation";
// import { Context } from "../utils/Context";
// import React, { useState, useContext } from "react";
// import { FaCartPlus } from "react-icons/fa6";
// import { useUser } from "@clerk/nextjs";
// const QuantityandAddToCart = ({ data, id }) => {
//   const [quantity, setQuantity] = useState(1);
//   const { handleAddToCart } = useContext(Context);
//   const { user } = useUser();
//   const router = useRouter();
//   const increment = () => {
//     setQuantity((prev) => prev + 1);
//   };
//   const decrement = () => {
//     setQuantity((prev) => {
//       if (prev === 1) {
//         return 1;
//       }
//       return prev - 1;
//     });
//   };

//   const OnAddToCart = () => {
//     if (!user) {
//       router.push("/sign-in");
//       return;
//     } else {
//       //Logic to add to cart
//       const data = {
//         data: {
//           userName: user.fullName,
//           email: user.primaryEmailAddress.emailAddress,
//           products: product?.id,
//         },
//       };
//     }
//   };
//   //   console.log(handleAddToCart);
//   return (
//     <div>
//       <div className=" flex gap-2 items-center mb-6">
//         <div className="rounded-md border-2 py-[4px] px-4 border-gray-300">
//           <span
//             className=" text-lg font-medium text-gray-500 cursor-pointer "
//             onClick={decrement}
//           >
//             -
//           </span>
//           <span className="mx-3 border-gray-300 border-x-2 px-3 text-base font-medium text-gray-900 dark:text-gray-300 ">
//             {quantity}
//           </span>
//           <span
//             className=" text-lg font-medium text-gray-500 cursor-pointer "
//             onClick={increment}
//           >
//             +
//           </span>
//         </div>
//         <div
//           onClick={() => {
//             OnAddToCart();
//             // handleAddToCart(data?.[0], quantity);
//             // setQuantity(1);
//           }}
//           className=" flex items-center py-2  px-3 sm:px-4 text-gray-200 font-medium text-base bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 rounded-md cursor-pointer
//              hover:scale-95 transition-all duration-300 "
//         >
//           <FaCartPlus size={18} />
//           <span className=" ml-2">Add to Cart</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuantityandAddToCart;
