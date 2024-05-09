import React from "react";
import '../index.css'
import LineImage from '../assets/long_line_bullet.svg'

const DiscoverPhaseComponent = () => {
  return (
    <div className="p-16">
        <div className="flex gap-2 max-md:justify-center">
        <img src={LineImage} width={8} alt="" />
      <h1 className="font-bold text-3xl max-md:text-center h2">Discover Phase</h1>
        </div>
      <div className="grid grid-cols-2 max-md:text-center py-4 max-md:grid-cols-1">
        <div>
          <h1 className="text-2xl py-4 project-duration-items-sub">Qualitative Research</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi ipsum hic nemo modi, aspernatur molestiae odio ex quidem
            aperiam, ipsa labore necessitatibus! Atque, sed temporibus! Maxime
            fuga exercitationem officia!
          </p>
        </div>
        <div>
          <h1 className="text-2xl py-4 project-duration-items-sub">Key Insights Derived From The Interviews</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi ipsum hic nemo modi, aspernatur molestiae odio ex quidem
            aperiam, ipsa labore necessitatibus! Atque, sed temporibus! Maxime
            fuga exercitationem officia!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-md:text-center py-4 max-md:grid-cols-1">
        <div>
          <h1 className="text-2xl py-4 project-duration-items-sub">Quantitive Research</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            praesentium illum nam adipisci iure asperiores quidem excepturi,
            odit cupiditate magnam atque reiciendis, facere, iste qui omnis
            pariatur quisquam temporibus reprehenderit
          </p>
        </div>
        <div>
          <h1 className="text-2xl py-4 project-duration-items-sub">Key Insights Derived From The Servey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            animi ipsum hic nemo modi, aspernatur molestiae odio ex quidem
            aperiam, ipsa labore necessitatibus! Atque, sed temporibus! Maxime
            fuga exercitationem officia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPhaseComponent;
