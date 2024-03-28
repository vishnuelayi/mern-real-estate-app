import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";

const PropertyCard = ({property}) => {
  
  return (
    <div className=" w-full sm:w-[330px] rounded-lg bg-white ml-5 mt-3 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={property?.images[0]}
        className="h-[320px] w-full sm:h-[220px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"/>
        
    

      <div className="p-4 flex flex-col gap-2">
        <p className="font-semibold truncate text-lg text-slate-700">
          
          {property?.title}
        </p>
        <div className="flex items-center">
          <MdLocationPin fontSize={17} className="text-green-700 mr-2" />
          <p className="text-sm text-slate-600">{property?.location}</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm line-clamp-2 ">
            {property?.description}
          </p>
        </div>

        <div id="basic icons" className="flex gap-3">
          <div className="flex gap-1 items-center text-green-800">
            <FaBath />
            <span>{property?.bathrooms}</span>
          </div>

          <div className="flex gap-1 items-center text-green-800">
            <FaBed />
            <span>{property?.bedrooms}</span>
          </div>

          <div className="flex gap-1 items-center text-green-800">
            <RiHome3Fill />
            <span>{property?.area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
