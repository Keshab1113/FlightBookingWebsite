import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faPhone,
  faComments
} from "@fortawesome/free-solid-svg-icons";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import video from "/vid-1.mp4"
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex flex-col justify-center sm:h-[25rem] h-screen items-center">
      <video src={video} muted autoPlay loop className=" object-cover w-full sm:h-[25rem] h-full" />
      <footer className=" w-11/12 absolute flex flex-col">
        <div className=" h-[80%] w-full flex sm:flex-row flex-col justify-center items-center">
          <div className="footerLinks">
            <h1 className="footerHeading">Quick Links</h1>
            <Link className="followlinks"><FontAwesomeIcon icon={faHouse} className="icons" />Home</Link>
            <Link className="followlinks"><FontAwesomeIcon icon={faUser} className="icons" />AboutUs</Link>
            <Link className="followlinks"><FontAwesomeIcon icon={faPhone} className="icons" />ContactUs</Link>
            <Link className="followlinks"><FontAwesomeIcon icon={faComments} className="icons" />Feedback</Link>
          </div>
          <div className="footerLinks">
            <h1 className="footerHeading">Follow Us</h1>
            <Link className="followlinks"><FaFacebook className="icons" />Facebook</Link>
            <Link className="followlinks"><FaWhatsapp className="icons" />Whatsapp</Link>
            <Link className="followlinks"><FaLinkedin className="icons" />Linkedin</Link>
            <Link className="followlinks"><FaTwitter className="icons" />Twitter</Link>
          </div>
          <div className="footerLinks">
            <h1 className="footerHeading">About this Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed ratione voluptatem saepe natus voluptas ut quia, et excepturi dicta delectus sunt. Inventore ut eum distinctio facere ipsum. Magni, doloremque!</p>
          </div>
        </div>
        <div className="h-[20%] w-full border-t">
          <p className=" text-[17px] text-white mt-3 flex justify-center font-semibold">
            © 2024 || All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
