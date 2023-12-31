import React from "react";
import "./Footer.css";
import logo from "../../images/Footer/lemlemLogo.jpg";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="logo">
        <a href="/">
          <img className="h-20 rounded-full" src={logo} />
        </a>

        <p className="slogan text-md font-serif font-bold">
          A SCHOOL STRIVING TO PROVIDE QUALTY EDUCATION FOR MINMAL FEE
        </p>
      </div>

      <div className="links ">
        <p className=" text-xl font-serif font-bold pl-8 ">Go to</p>
        <ul className="space-y-">
          <li className=" flex space-x-2 ">
            <ArrowRightCircleIcon className="h-6 " />
            <a href="/about-us">About us</a>
          </li>
          <li className=" flex space-x-2">
            <ArrowRightCircleIcon className="h-6 " />
            <a href="/Achievement">Achivement</a>
          </li>
          <li className=" flex space-x-2">
            <ArrowRightCircleIcon className="h-6 " />
            <a href="/Gallery">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="officeHour">
        {" "}
        <h4 className="text-xl font-serif font-bold mb-3 pl-14">Office hour</h4>
        <h6>Monday to Friday 8:00AM - 5:00PM </h6>{" "}
        <div>
          {" "}
          <div className="social-media  ">
            {" "}
            <a href="#" target="_blank">
              {" "}
              <i className="text-white">
                <FacebookIcon />{" "}
              </i>{" "}
            </a>{" "}
            <a href="#" target="_blank">
              {" "}
              <i className="text-white">
                <InstagramIcon />{" "}
              </i>{" "}
            </a>{" "}
            <a href="#" target="_blank">
              {" "}
              <i className="text-white">
                <TwitterIcon />{" "}
              </i>{" "}
            </a>{" "}
            <a href="https://t.me/LemHS" target="_blank">
              {" "}
              <i className="text-white">
                <TelegramIcon />{" "}
              </i>{" "}
            </a>{" "}
          </div>{" "}

        </div>

        <div className="copyright mt-11 md:mt-4 ">
          <p><span>Copyright 2023</span> ALL RIGHTS RESERVED <CopyrightIcon/></p>
        </div>
      </div>
      <div className="space-y-1   ">
        {" "}
        <h3 className="text-xl font-serif font-bold pl-14 mb-3 contact">
          Contact us
        </h3>
        <div className="flex space-x-2">
          <MapPinIcon className="h-6 " />
          <p>Addis Ababa, Ethiopia</p>
        </div>
        <div className="flex space-x-2">
          <EnvelopeIcon className="h-6 " />
          <p>lemlemkg@ethionet.et</p>
        </div>
        <div className="flex space-x-2">
          <PhoneIcon className="h-6 " />
          <p>+251-111-140-074 </p>
        </div>
      </div>
    </footer>
  );
  }
export default Footer;
