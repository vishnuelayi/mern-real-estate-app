import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProperty } from "../features/listing/listingSlice";

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
    <div>
      {isLoading ? (
        <p className="text-center font-semibold my-7">Loading...</p>
      ) : (
        <main>
          <SwiperComponent images={listingState?.property?.images} />
        </main>
      )}
    </div>
  );
};

export default SingleList;
