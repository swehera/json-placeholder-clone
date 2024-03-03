const express = require("express");
const router = express.Router();

const productData = [
  {
    _id: 1001,
    title: "iphone 15",
    price: 1500.99,
    previousPrice: 1600.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/p3s01cP/iphone15.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1002,
    title: "iphone 14",
    price: 1150.99,
    previousPrice: 1240.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/HD4JCrk/iphone2.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1003,
    title: "iphone New",
    price: 1100,
    previousPrice: 1200,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/51LfwZ3/iphone3.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1004,
    title: "iphone 15 pro",
    price: 1800.5,
    previousPrice: 1900.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/F4VHfPJ/iphone4.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1005,
    title: "iphone SE",
    price: 1725.99,
    previousPrice: 1785.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/hCqWjvQ/iphone5.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
  {
    _id: 1006,
    title: "iphone 15",
    price: 1590.99,
    previousPrice: 1670.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    category: "phone",
    image: "https://i.ibb.co/fYXtLrh/iphone6.jpg",
    isNew: true,
    brand: "Apple",
    quantity: 1,
  },
];

router.get("/", (req, res) => {
  res.send(productData);
});

module.exports = router;
