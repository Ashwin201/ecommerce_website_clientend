"use client";
import { devUrl } from "../utils/URLs";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
const ShareButtons = ({ id }) => {
  const shareUrl = `${devUrl}/product-detail/${id}`;

  return (
    <div>
      <div className=" flex gap-2 ml-1">
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={20} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={20} round={true} />
        </FacebookShareButton>
        <LineShareButton url={shareUrl}>
          <LinkedinIcon size={20} round={true} />
        </LineShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={20} round={true} />
        </FacebookMessengerShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={20} round={true} />
        </TelegramShareButton>
        <PinterestShareButton url={shareUrl}>
          <PinterestIcon size={20} round={true} />
        </PinterestShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
