import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProperty } from "../features/listing/listingSlice";
import { Navigation} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              {
                <img
                  src={listingState?.property?.images[0]}
                  alt={listingState?.property?.title}
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/7e/7d/ed/lobby.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SingleList;
