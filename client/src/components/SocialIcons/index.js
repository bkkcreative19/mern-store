import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";

export const SocialIcons = ({ classname }) => {
  return (
    <ul className={classname}>
      <li>
        <AiOutlineTwitter />
      </li>
      <li>
        <AiFillFacebook />
      </li>
      <li>
        <AiOutlineInstagram />
      </li>
      <li>
        <FaTiktok />
      </li>
      <li>
        <AiFillYoutube />
      </li>
    </ul>
  );
};
