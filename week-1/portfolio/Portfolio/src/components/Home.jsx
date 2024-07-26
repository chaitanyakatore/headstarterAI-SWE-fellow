import React from "react";
import profilePic from "../assets/profile.jpg"; // Adjust the path to your image

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen p-4 bg-gray-100 mt- lg:mt-[-6rem]">
      {/* Introduction Section */}
      <div className="lg:w-1/2 p-4 lg:p-8 text-center lg:text-right flex flex-col items-center lg:items-end justify-center">
        <div className="flex flex-col items-center lg:items-end">
          <h1 className="text-3xl font-bold mb-2">
            Hi there, I'm Chaitanya 👋
          </h1>
          <div className="relative">
            <hr className="w-1/2 border-gray-400 mb-4 -ml-4 lg:ml-0" />
          </div>
        </div>
        <p className="text-lg mt-4 ml-4">
          I'm a tea appassionato and world traveler who enjoys creating <br />
          impactful designs through engaging experiences.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start items-center p-4 ">
        <img
          src={profilePic}
          alt="Chaitanya"
          className="w-64 h-64 object-cover ml-8"
        />
      </div>
    </div>
  );
};

export default Home;
