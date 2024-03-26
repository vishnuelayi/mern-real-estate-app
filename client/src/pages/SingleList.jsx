import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProperty } from "../features/listing/listingSlice";
import { MdOutlinePool } from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";

import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";

import SwiperComponent from "../components/Swiper";

const SingleList = () => {
  const itemId = useParams().id;

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const listingState = useSelector((state) => state.listing);

  useEffect(() => {
    dispatch(getSingleProperty(itemId));
  }, [itemId]);

  return (
    <div className="flex flex-col ">
      {isLoading ? (
        <p className="text-center font-semibold my-7">Loading...</p>
      ) : (
        <main className="p-5 mb-4">
          <SwiperComponent images={listingState?.property?.images} />
          <div
            className="flex my-5 ml-5 gap-3 items-center
          "
          >
            <h2 className="text-4xl font-semibold">
              {listingState?.property?.title}
            </h2>
            <p className="p-1 rounded-lg bg-green-600 text-white text-center mt-2">
              {listingState?.property?.location}
            </p>
          </div>
          <p className="ml-5">{listingState?.property?.description}</p>
          <div className="flex gap-2 items-center text-green-700">
            <div className="flex gap-2 items-center mt-3">
              <FaBed className="ml-5 text-2xl" />
              <p>{listingState?.property?.bedrooms} Bedrooms</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <FaBath className="ml-5 text-2xl" />
              <p>{listingState?.property?.bedrooms} Bathrooms</p>
            </div>

            <div className="flex gap-2 items-center mt-3">
              <RiHome3Fill className="ml-5 text-2xl" />
              <p>{listingState?.property?.area} m/sq</p>
            </div>
          </div>

          <div className="flex gap-4 ml-5 items-center mt-5">
            <p className=" text-white bg-red-700 rounded-md px-10 py-2 cursor-pointer">I'm Intrested</p>
            <p className=" text-white bg-blue-700 rounded-md px-10 py-2 cursor-pointer">Quote a bid</p>
          </div>
        </main>
      )}
    </div>
  );
};

export default SingleList;
