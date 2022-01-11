import { React } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import dog from "../assets/images/dog.jpg";

const Skill = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5">
        <div>
          <img
            src={dog}
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-md"
            alt="profile_photo"
          />
        </div>
        <div className="text-center mt-5">
          <p className="font-semibold text-xl sm:text-2xl font-mono text-gray-900">
            Rohit Prajapati
          </p>
          <p className="font-mono text-gray-600 text-md sm:text-lg pt-1 pb-3 w-auto inline-block border-b-2">
            Software Engineer
          </p>
        </div>
        <div className="flex justify-center mt-4">
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
    </div>
  );
};

export default Skill;
