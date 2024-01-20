"use client";
import toast from "react-hot-toast";
import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addUser,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/productSlice";
import { apiUrl } from "../utils/URLs";
import { useSession } from "next-auth/react";
const CartButton = ({ product, cartpage, hideFromPage, item }) => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  console.log(product?.[0]?.attributes);

  return (
    <div className=" flex flex-wrap items-center mb-6 gap-2">
      {!hideFromPage && (
        <div className="w-fit flex items-center py-[2px]  px-3 border-2 border-gray-500 rounded-md   ">
          <span
            onClick={() =>
              item?.quantity > 1
                ? dispatch(decreaseQuantity(item)) &&
                  toast.success(
                    `${item.quantity - 1} ${item.shortTitle} remains in cart.`
                  )
                : item.quantity == 1 &&
                  toast.error("Quantity can't be decrease than this.")
            }
            className=" cursor-pointer pr-3 font-medium text-lg text-gray-500 "
          >
            -
          </span>
          <span className=" cursor-pointer border-x-2 border-gray-400 font-medium text-base  px-3 ">
            {item?.quantity}
          </span>
          <span
            onClick={() =>
              dispatch(increaseQuantity(item)) &&
              toast.success(
                `${item.quantity + 1} ${item.shortTitle} added in cart.`
              )
            }
            className=" cursor-pointer  pl-3 font-medium text-lg text-gray-500"
          >
            +
          </span>
        </div>
      )}
      {!cartpage && (
        <div
          onClick={() => {
            dispatch(
              addToCart({
                id: product?.[0]?.id,
                title: product?.[0]?.attributes?.title,
                shortTitle: product?.[0]?.attributes?.shortTitle,
                description: product?.[0]?.attributes?.description,
                img:
                  apiUrl +
                  product?.[0]?.attributes?.img?.data?.[0]?.attributes?.url,
                price: product?.[0]?.attributes?.price,
                quantity: product?.[0]?.attributes?.quantity,
                user: session?.user?.email,
              })
            );
            toast.success(
              `${product?.[0]?.attributes?.shortTitle} added to cart.`
            );
            dispatch(addUser(session?.user?.email));
          }}
          className=" w-fit flex items-center py-2  px-3 sm:px-4 text-gray-200 font-medium text-sm bg-gradient-to-r from-slate-700 via-purple-600 to-slate-700 rounded-md cursor-pointer 
             hover:scale-[.98] transition-all duration-300 "
        >
          <FaCartPlus size={18} />
          <span className=" ml-2">Add to Cart</span>
        </div>
      )}
    </div>
  );
};

export default CartButton;

// console.log(product?.[0]?.id);
//   console.log(product);// onClick={() => {
//   OnAddToCart();
//   // handleAddToCart(data?.[0], quantity);
//   // setQuantity(1);
// }}

//   const { user } = useUser();
//   const router = useRouter();
//   const { cart, setCart } = useContext(CartContext);
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
//           products: [product?.[0]?.id],
//         },
//       };
//       GlobalApis.addToCart(data).then(
//         (res) => {
//           console.log("Add To Cart :", res);
//           setCart((cart) => [...cart, product?.[0]]);
//           console.log(product);
//         },
//         (err) => {
//           console.log(err);
//         }
//       );
//     }
//   };
