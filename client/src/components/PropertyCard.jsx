import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";

const PropertyCard = () => {
  return (
    <div className=" w-full sm:w-[330px] rounded-lg bg-white ml-5 mt-3 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg"
        className="h-[320px] w-full sm:h-[220px] object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <p className="font-semibold truncate text-lg text-slate-700">
          Oak Resort & Ayurvedic Spa
        </p>
        <div className="flex items-center">
          <MdLocationPin fontSize={17} className="text-green-700 mr-2"/>
          <p className="text-sm text-slate-600">Munnar, Kerala</p>
        </div>

        <div>
            <p className="text-gray-500 text-sm  ">Welcome to our Ayurvedic Spa Resort, a sanctuary of tranquility and rejuvenation nestled amidst nature's embrace. Immerse yourself in the ancient wisdom of Ayurveda as our expert therapists guide you on a transformative journey towards holistic well-being.



.</p>
        </div>





        <div id="basic icons" className="flex gap-3">

        <div className="flex gap-1 items-center text-green-800">
        <FaBath />
        <span>5</span>
        </div>

        <div className="flex gap-1 items-center text-green-800">
        <FaBed/>
        <span>5</span>
        </div>

        <div className="flex gap-1 items-center text-green-800">
        <RiHome3Fill/>
        <span>2500</span>
        </div>


        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
