const express = require("express");
const router = express();

const photoData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lovely Nature",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1569158049406-6dc6f71ccd48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Waterfall",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nature Beauty",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hill",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1600399507991-c9f51bc7cc2f?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sun Set",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1669202448479-f690dc19efd5?q=80&w=1505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cloud in mount",
  },
];

router.get("/", (req, res) => {
  res.send(photoData);
});

module.exports = router;
