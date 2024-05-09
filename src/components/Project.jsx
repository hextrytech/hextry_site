import React, { useRef } from "react";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import LineImage from "../assets/long_line_bullet.svg";
import AdobeIllustratorImage from "../assets/adobe-illustrator.svg";
import AdobePhotoshopImage from "../assets/adobe-photoshop.svg";
import AdobeXDImage from "../assets/adobe-xd.svg";

gsap.registerPlugin(useGSAP);

const Project = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5, // Adjusted delay for smoother animation start
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".para",
          start: "top 100%", // Start animation when 80% of the trigger element is in view
          end: "bottom 100%", // End animation when 20% of the trigger element is in view
          scrub: 6,
          // Optional: Show markers on the page to visualize trigger start/end
        },
      }
    );

    gsap.fromTo(
      ".title",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".title",
          start: "top 100%",
          end: "bottom 100%",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="px-16">
      <div className="flex gap-2 max-md:justify-center py-2">
        <img src={LineImage} width={8} alt="" />
        <h1 className="font-bold h2 text-3xl ">
          Project Duration
        </h1>
      </div>
      <div
        ref={scrollRef}
        className="grid grid-cols-4 gap-8  max-md:grid-cols-2 max-md:text-center"
      >
        <div>
          <h2 className="title font-bold text-green-500 text-2xl project-duration-items">
            12 weeks
          </h2>
          <p className="para project-duration-items-sub">Timeline</p>
        </div>
        <div>
          <h2 className="title font-bold text-green-500 text-2xl project-duration-items">
            90+
          </h2>
          <p className="para project-duration-items-sub">Screens</p>
        </div>
        <div>
          <div className="flex flex-row max-md:justify-center">
            <img width={32} src={AdobeXDImage} alt="" />
            <img width={32} src={AdobeIllustratorImage} alt="" />
            <img width={32} src={AdobePhotoshopImage} alt="" />
          </div>
          <p className="para project-duration-items-sub ">Tools</p>
        </div>
        <div>
          <h2 className="title font-bold text-green-500 text-2xl project-duration-items">
            Android/IOS
          </h2>
          <p className="para project-duration-items-sub">Project</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
