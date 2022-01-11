import { React } from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

const About = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center font-mono">
        Hello World! 👋, I am Rohit.
      </p>
      {/* <div className="waving" data-hover="👋">
        sdf
      </div> */}

      <p className="mt-2 text-base text-grey-800 sm:text-xl  text-center font-mono leading-relaxed">
        I am a computer science student studying at Khwopa College of
        Engineering, Nepal. Love learning new tech and expanding knowledge in
        programming.
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20 mt-6">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;
