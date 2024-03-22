import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesUser } from "../features/listing/listingSlice";
import { Link } from "react-router-dom";

const Mylistings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPropertiesUser());
  }, []);

  const properties = useSelector((state) => state.listing.property);

  return (
    <div className="p-3 max-w-3xl mx-auto">
      <h1 className="text-center my-7 text-3xl font-semibold">MY LISTINGS</h1>
      <div className="flex flex-col gap-3">
        {properties ? (
          properties.map((item, index) => {
            return (
              <Link  to={`/listing/${item._id}`}>
                <div
                  className="justify-between rounded-lg flex py-10 border bg-slate-100"
                  key={index}
                >
                  <img
                    src={item.images[0]}
                    className=" ml-10 w-30 h-20 rounded-md"
                  />
                  <span className="mt-5 font-semibold">{item.title}</span>
                  <span className="mr-10 mt-5 font-semibold">
                    ₹{item.price}
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>No Property Listed By You</h1>
        )}
      </div>
    </div>
  );
};

export default Mylistings;
