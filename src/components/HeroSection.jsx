import React from 'react';
import RobotImage from '../assets/images/Robot_with_Drone.svg';
import '../index.css'
import FeatherImage from '../assets/Group 41390.svg'

const HeroSection = () => {
  return (
    <div className="  h-screen bg-cover bg-center  grid grid-cols-2 pl-16 max-md:pl-0 max-md:pt-10 max-md:grid-cols-1 items-center justify-center hero-section">
      <div className=" flex flex-col justify-center col-span-1  max-md:items-center">
        <p className="text-white text-5xl max-md:text-3xl font-bold mb-4">Drone Controller KIT</p>
        <div className='bg-green-950 p-5  w-fit rounded-lg'>

        <p className="text-white  text-5xl max-md:text-3xl connect ">CONNECT</p>
        </div>
        <p className="text-white text-3xl max-md:text-2xl my-2 ">Dream it, build it...</p>
        <p className="text-white  font-semibold">
          Are you on the hunt for the perfect drone?
        </p>
        <p className='text-white font-semibold'>

          Don't worry, we are here to help you from A to Z.
        </p>
      </div>
      <div className="flex justify-center col-span-1 items-center">
        <img className='max-md:w-[250px]' src={RobotImage} alt="Robot with Drone" width={350} />
      </div>
    </div>
  );
};

export default HeroSection;
