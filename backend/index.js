const express = require("express");
const productData = require("./routes/api/product");
const userData = require("./routes/api/user");
const photoData = require("./routes/api/photos");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running here...");
});

app.use("/product", productData);
app.use("/users", userData);
app.use("/photos", photoData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
