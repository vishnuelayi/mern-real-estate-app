import React, { useEffect, useState } from "react";
import SwiperComponent from "../components/Swiper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../features/listing/listingSlice";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const allProperties = useSelector((state) => state.listing.properties);

  const bannerImageArray = ["https://www.shutterstock.com/image-photo/panoramic-holiday-landscape-luxurious-beach-260nw-1688819209.jpg","https://st2.depositphotos.com/4695029/7141/i/450/depositphotos_71419053-stock-photo-beautiful-swimming-pool.jpg","https://media.istockphoto.com/id/536048545/photo/tropical-resort.jpg?s=612x612&w=0&k=20&c=TR9a_ToayikLVagrZlq8ebvZFRZx_WH25q9_9m884Jk="];

  // if (allProperties?.length > 0) {
  //   allProperties?.map((property) => {
  //     bannerImageArray.push(property?.images[0]);
  //   });
  // }

  

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 p-28 pb-10 ">
        <h1 className="text-slate-700 text-3xl font-bold lg:text-6xl">
          Find your next <span className="text-slate-400">perfect</span>
          <br />
          place with ease
        </h1>

        <p className="text-xl sm:text-sm text-gray-400 font-semibold">
          Elayi Estate is a leading real estate marketplace.
          <br /> Check out some of our featured properties below
        </p>
       

        
      </div>
      <div className="">
        <SwiperComponent images={bannerImageArray}/>
        </div>
    </div>
  );
};

export default Home;
