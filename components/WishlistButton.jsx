"use client";
import { addToFavourite } from "../redux/productSlice";
import { apiUrl } from "../utils/URLs";
import React from "react";
import toast from "react-hot-toast";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
const WishlistButton = ({ product }) => {
  const dispatch = useDispatch();
  const { favouriteData } = useSelector((state) => state.products);
  const isFavourite = (productId) => {
    return favouriteData.some(
      (favouriteItem) => favouriteItem.id === productId
    );
  };

  return (
    <div
      onClick={() => {
        dispatch(
          addToFavourite({
            id: product?.[0]?.id,
            title: product?.[0]?.attributes?.title,
            shortTitle: product?.[0]?.attributes?.shortTitle,
            description: product?.[0]?.attributes?.description,
            price: product?.[0]?.attributes?.price,
            img: product?.[0]?.attributes?.img?.data?.[0]?.attributes?.url,
          })
        );

        if (isFavourite(product?.[0]?.id)) {
          toast.error(
            `${product?.[0]?.attributes?.shortTitle} removed from favourites.`
          );
        } else {
          toast.success(
            `${product?.[0]?.attributes?.shortTitle} added to favourites.`
          );
        }
      }}
      className={` cursor-pointer transition ease-in-out duration-300 ${
        isFavourite(product?.[0]?.id)
          ? "text-red-500 "
          : "text-gray-400 dark:text-gray-600"
      }`}
    >
      <IoIosHeart size={32} />
    </div>
  );
};

export default WishlistButton;
