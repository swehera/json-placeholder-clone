import axios from "axios";
import React, { useEffect, useState } from "react";
import { PhotosData } from "../typeofdata/photosData";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/photos").then((res) => {
      if (res?.status === 200) {
        setPhotos(res?.data);
      } else {
        console.log("data fetching error", res);
      }
    });
  }, []);
  console.log(photos);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 px-10 py-5  gap-3">
      {photos.map((item: PhotosData) => (
        <div
          key={item?.id}
          className=" rounded-md  border-solid border-2 border-yellow-400 py-2 px-3"
        >
          <div className=" group rounded-md overflow-hidden">
            <img
              src={item?.image}
              alt="image"
              className="w-96 h-60 rounded-md group-hover:scale-110 duration-300"
            />
          </div>

          <p className=" text-[20px] md:text-[18px] font-semibold">
            {item?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Photos;
