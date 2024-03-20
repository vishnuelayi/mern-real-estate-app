import React from "react";

const CreateList = () => {
  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-center my-7 font-semibold text-3xl">
        Add a Property
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <input placeholder="Title" className="border p-3 rounded-md " />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-md "
          />
          <input placeholder="Location" className="border p-3 rounded-md " />

          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Pool</span>
            </div>
            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Gardern</span>
            </div>
            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Fireplace</span>
            </div>
            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Wi-Fi</span>
            </div>
            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Parking space</span>
            </div>

            <div className="flex gap-2">
              <input placeholder="Price" type="checkbox" className="w-5" />
              <span>Gym</span>
            </div>
          </div>

          <div className="flex gap-6 my-3 place-items-center flex-wrap">
            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md  "
                type="number"
                min={1}
                max={10}
              />
              <p className="mt-3">Bedrooms</p>
            </div>
            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md "
                type="number"
                min={1}
                max={10}
              />
              <p className="mt-3">Bathrooms</p>
            </div>

            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md "
                type="number"
                min={1}
              />
              <p className="mt-3">Area (sq m)</p>
            </div>

            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md "
                type="number"
                min={1}
              />
              <p className="mt-3">Price (₹)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          <p className="font-semibold">
            Images:{" "}
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              accept="image/*"
              multiple
              className="border-gray-300 border p-3 rounded-md w-full"
            />
            <button className="  text-green-700 border border-green-700 p-2 rounded-md shadow-lg disabled:opacity-85">
              UPLOAD
            </button>
          </div>
          <button className="text-white bg-slate-700 rounded-md p-3 hover:opacity-95 disabled:opacity-85">
            ADD PROPERTY
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateList;
