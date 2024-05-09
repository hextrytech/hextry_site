import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const Overview = () => {

  const scrollRef = useRef()
  useGSAP(()=>{

    gsap.fromTo('.para', {
      
      opacity:0,
      y:20
    }, {
      opacity: 1,
      y: 0,
      delay:5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.para',  // Element that triggers the animation
        start: 'top 100%', // Start the animation when the top of the trigger element is 80% in view
        end: 'bottom 100%', // End the animation when the bottom of the trigger element is 20% in view
        scrub: 3,         // Smoothly scrub through animation values while scrolling
         // Optional: Show markers on the page to visualize trigger start/end
      }

    })
  }, [])

  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:text-center gap-14 p-16">
      <div ref={scrollRef} className="overview-1">
        <h1 className=" para project-duration-items-sub font-bold text-2xl py-2 ">Overview</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          tenetur in repellendus minus ab, eos possimus id asperiores ea,
          dolorem impedit laborum aut maiores odit necessitatibus sit totam
          eaque! Veniam.
        </p>
      </div>
      <div ref={scrollRef} className="overview-2">
        <h1 id="title" className="para project-duration-items-sub font-bold text-2xl py-2 ">Overview</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          tenetur in repellendus minus ab, eos possimus id asperiores ea,
          dolorem impedit laborum aut maiores odit necessitatibus sit totam
          eaque! Veniam.
        </p>
      </div>
      <div ref={scrollRef} className="overview-3">
        <h1 id="title" className="para project-duration-items-sub font-bold text-2xl py-2">Overview</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          tenetur in repellendus minus ab, eos possimus id asperiores ea,
          dolorem impedit laborum aut maiores odit necessitatibus sit totam
          eaque! Veniam.
        </p>
      </div>
      <div ref={scrollRef} className="overview-4">
        <h1 id="title" className="para project-duration-items-sub font-bold text-2xl py-2">Overview</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          tenetur in repellendus minus ab, eos possimus id asperiores ea,
          dolorem impedit laborum aut maiores odit necessitatibus sit totam
          eaque! Veniam.
        </p>
      </div>
    </div>
  );
};

export default Overview;


// useGSAP(()=>{
//   const boxes = gsap.utils.toArray(scrollRef.current.children)
//   boxes.forEach((box)=> {
//     gsap.to(box, {
//       x:150, 
//       rotation:360,
//       borderRadius: '100%',
//       scale: 1.5,
//       scrollTrigger:{
//         trigger: box,
//         start: 'bottom, bottom',
//         end: 'top 20%',
//         scrub: true,
//       },
//       ease: 'power1.inOut'
//     })
//   })
// }, [])