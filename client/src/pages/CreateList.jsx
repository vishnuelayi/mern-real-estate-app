import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CreateList = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ imageUrls: [] });
  const [uploadError, setUploadError] = useState(false);
  const [filePercentage, setFilePercentage] = useState(0);

  //handler for deleting uploaded picture
  const handleDeletePicture = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleUpload = () => {
    if (files?.length > 0 && files?.length < 7) {
      const promises = [];

      for (let i = 0; i < files?.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises).then((urls) => {
        setFormData({
          ...formData,
          imageUrls: formData.imageUrls.concat(urls),
        });
      });
    } else {
      console.log("Images should be atleast 1 and maximum 6");
      setUploadError(true);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      uploadBytesResumable(storageRef, file)
        .then((snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setFilePercentage(progress);
          if (progress === 100) {
            getDownloadURL(storageRef)
              .then((url) => {
                resolve(url);
              })
              .catch((error) => {
                setUploadError(true);
                console.log(error);
              });
          }
        })
        .catch((error) => {
          setUploadError(true);
          console.log(error);
        });
    });
  };

  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-center my-7 font-semibold text-3xl">
        Add a Property
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-3 flex-1">
          <input
            placeholder="Title"
            className="border p-3 rounded-md focus-within:outline-none"
          />
          <textarea
            placeholder="Description"
            className="border p-3 rounded-md focus-within:outline-none"
          />
          <input
            placeholder="Location"
            className="border p-3 rounded-md focus-within:outline-none"
          />

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
                className="border-gray-300 p-3 rounded-md  focus-within:outline-none"
                type="number"
                min={1}
                max={10}
              />
              <p className="mt-3">Bedrooms</p>
            </div>
            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md focus-within:outline-none"
                type="number"
                min={1}
                max={10}
              />
              <p className="mt-3">Bathrooms</p>
            </div>

            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md focus-within:outline-none"
                type="number"
                min={1}
              />
              <p className="mt-3">Area (sq m)</p>
            </div>

            <div className="flex gap-2">
              <input
                className="border-gray-300 p-3 rounded-md focus-within:outline-none"
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
              onChange={(e) => setFiles(e.target.files)}
              multiple
              className="border-gray-300 border p-3 rounded-md w-full"
            />
            <button
              className="  text-green-700 border border-green-700 p-2 rounded-md shadow-lg disabled:opacity-85 hover:bg-green-700 hover:text-white"
              type="button"
              onClick={handleUpload}
            >
              UPLOAD
            </button>
          </div>
          {uploadError && (
            <p className="text-red-600 text-sm">
              Atleast 1 image is required (max 6)
            </p>
          )}

          {formData?.imageUrls?.length > 0 &&
            formData.imageUrls.map((url, index) => {
              return (
                <div
                  className="flex justify-between p-3 border items-center"
                  key={index}
                >
                  <img src={url} className="object-contain rounded w-20 h-20" />
                  <MdDelete
                    onClick={() => handleDeletePicture(index)}
                    fontSize={25}
                    className="mr-5 hover:opacity-70 text-red-600 cursor-pointer"
                  />
                </div>
              );
            })}
          <button className="text-white bg-slate-700 rounded-md p-3 hover:opacity-95 disabled:opacity-85">
            ADD PROPERTY
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateList;
