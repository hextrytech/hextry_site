import ArrowImage from "../assets/arrow.svg";
import BulpImage from "../assets/bulp.svg";
import HeadImage from "../assets/head.svg";
import BulpIdeaImage from "../assets/bulpidea.svg";
import TestImage from "../assets/Test.svg";
import DesignImage from "../assets/Design.svg";
import LineImage from '../assets/long_line_bullet.svg'
import "../index.css";

const DesignComponent = () => {
  return (
    <div className="p-16">
      <div className="flex gap-2 max-md:justify-center ">
      <img src={LineImage} width={8} alt="" />
      <h1 className="font-bold h2 py-4 text-3xl max-md:text-center">Design Process</h1>
      </div>
      <div className="grid grid-cols-9   py-4 gap-4 text-center  max-md:grid-cols-1">
        <div className="text-center flex items-center flex-col">
            <img src={HeadImage}  width={80} alt="" />
          
          <p>User Interviews</p>
          <p>User Research</p>
          <p>Competitive Analysis</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <img src={ArrowImage} width={50} className="max-md:rotate-90" alt="" />
        </div>
        <div className="text-center flex items-center flex-col">
        <img src={BulpImage}  width={70} alt="" />
         
          <p>personal</p>
          <p>empathy map</p>
          <p>journey map</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <img src={ArrowImage} width={50} className="max-md:rotate-90" alt="" />
        </div>
        <div className="text-center flex items-center flex-col">
        <img src={BulpIdeaImage}  width={60} alt="" />
       
          <p>user flow</p>
          <p>card sorting</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <img src={ArrowImage} width={50} className="max-md:rotate-90" alt="" />
        </div>
        <div className="text-center flex items-center flex-col">
            <img src={DesignImage} width={70} alt="" />
       
          <p>wireframe</p>
          <p>visual design</p>
        </div>
        <div className="flex justify-center items-center py-4">
          <img src={ArrowImage} alt="" width={50} className="max-md:rotate-90"/>
        </div>
        <div className="flex flex-col items-center ">
            <img src={TestImage} alt="" width={70} />
          
          <p>usability testing</p>
        </div>

      </div>
    </div>
  );
};

export default DesignComponent;
