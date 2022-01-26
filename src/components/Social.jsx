import React from "react";
import {
  FaFacebookF,
  FaMailBulk,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ebzgr" },
  { Social: <FaGithub />, link: "https://github.com/ebzgr" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/ebzgr" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/barzegar.ebrahim" },
  { Social: <FaMailBulk />, link: "mailto:barzegar.ebrahim@gmail.com" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
