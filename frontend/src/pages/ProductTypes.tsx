import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ProductData } from "../typeofdata/productData";

const ProductTypes = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => {
      if (res?.status === 200) {
        setProduct(res?.data); // get this data from console
      } else {
        console.log("data fetching error", res);
      }
    });
  }, []);

  console.log(product);

  return (
    <div className=" mt-3">
      <div className=" flex  items-center justify-center mb-10">
        <div className=" grid grid-cols-1 md:grid-cols-3    gap-4">
          {product.map((item: ProductData) => (
            <div
              key={item?._id}
              className="border-solid border-2 border-black w-96 rounded-md px-3 py-1"
            >
              <div className=" flex flex-col items-center justify-center">
                <img className=" w-32 h-auto" src={item?.image} alt="image" />
              </div>

              <p className=" text-xl font-semibold">{item?.title}</p>
              <p className=" text-xl font-semibold">{item?.category}</p>
              <div className=" flex gap-2">
                <p className=" line-through">${item?.previousPrice}</p>
                <p className=" font-semibold">${item?.price}</p>
              </div>
              <p>
                <span className=" font-semibold">Brand: </span> {item?.brand}
              </p>
              <p>{item?.description}</p>
              <div className=" mt-1 mb-2">
                <button className=" w-full text-white rounded-md py-2 bg-black">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
