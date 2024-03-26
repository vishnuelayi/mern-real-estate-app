import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getPropertiesUser } from "../features/listing/listingSlice";

import { MdDelete } from "react-icons/md";

const Mylistings = () => {
  const dispatch = useDispatch();

  
  const [deletedItemId, setDeletedItemId] = useState(null);

    
  const propertyList = useSelector((state) => state.listing.property);
  

  //fetching properties added by current user
  useEffect(() => {
    dispatch(getPropertiesUser());
  }, []);
 

//onclick delete api call
  const handleDelete = (_id) => {
    dispatch(deleteItem({id:_id}))
    setDeletedItemId(_id);
  }



  return (
    <div className="p-3 max-w-3xl mx-auto">
      <h1 className="text-center my-7 text-3xl font-semibold">MY LISTINGS</h1>
      <div className="flex flex-col gap-3">
      {propertyList ? (
  propertyList.map((item, index) => {
    return (
      item._id !== deletedItemId && (
        <div
          className="justify-between rounded-lg flex py-10 border bg-slate-100"
          key={index}
        >
          <img
            src={item.images[0]}
            className=" ml-10 w-30 h-20 rounded-md"
          />
          <span className="mt-6 font-semibold">{item.title}</span>
          <span className="mr-10 mt-6 font-semibold">
            ₹{item.price}
          </span>
          <MdDelete
            fontSize={25}
            className="mr-5 hover:opacity-70 text-red-600 cursor-pointer mt-6"
            onClick={() => handleDelete(item?._id)}
          />
        </div>
      )
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
