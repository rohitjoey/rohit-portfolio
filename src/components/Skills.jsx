import { React } from "react";
import { SiReact } from "react-icons/si";

const Skill = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black sm:text-4xl font-bold text-center font-mono">
        Tech I am familiar with
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-32 sm:w-52 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiReact className="text-[#61DBFB] mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center font-mono">
            React
          </p>
        </div>
        <div className="flex flex-col w-32 sm:w-52 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiReact className="text-[#61DBFB] mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center font-mono">
            React
          </p>
        </div>
        <div className="flex flex-col w-32 sm:w-52 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiReact className="text-[#61DBFB] mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center font-mono">
            React
          </p>
        </div>
        <div className="flex flex-col w-32 sm:w-52 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiReact className="text-[#61DBFB] mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center font-mono">
            React
          </p>
        </div>
        <div className="flex flex-col w-32 sm:w-52 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiReact className="text-[#61DBFB] mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center font-mono">
            React
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
