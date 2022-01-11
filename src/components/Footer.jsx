import { React } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 px-5 bg-gray-200 flex justify-around">
      <div>
        <p className="text-black font-mono text-sm sm:text-base">
          Made with ❤ by{" "}
          <a href="https://github.com/rohitjoey">
            <span className="underline underline-offset-2">
              Rohit Prajapati
            </span>
          </a>
        </p>
      </div>
      <div className=" flex">
        <a
          href="https://github.com/rohitjoey "
          className="text-lg p-1 mx-1 sm:p-2 sm:mx-2 sm:text-xl text-gray-800 hover:bg-gray-600 hover:text-white transition-colors duration-300 rounded-full"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a
          href="https://github.com/rohitjoey "
          className="text-lg p-1 mx-1 sm:p-2 sm:mx-2 sm:text-xl text-blue-800 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full"
        >
          <FaFacebook />
          <span class="sr-only">Facebook</span>
        </a>
        <a
          href="https://github.com/rohitjoey "
          className="text-lg p-1 mx-1 sm:p-2 sm:mx-2 sm:text-xl text-[#00acee] hover:bg-[#00acee] hover:text-white transition-colors duration-300 rounded-full"
        >
          <FaTwitter />
          <span class="sr-only">Twitter</span>
        </a>
        <a
          href="https://github.com/rohitjoey "
          className="text-lg p-1 mx-1 sm:p-2 sm:mx-2 sm:text-xl text-green-800 hover:bg-green-600 hover:text-white transition-colors duration-300 rounded-full"
        >
          <FaEnvelope />
          <span class="sr-only">Mail</span>
        </a>
        <a
          href="https://github.com/rohitjoey "
          className="text-lg p-1 mx-1 sm:p-2 sm:mx-2 sm:text-xl text-[#0e76a8] hover:bg-[#0e76a8] hover:text-white transition-colors duration-300 rounded-full"
        >
          <FaLinkedin />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
