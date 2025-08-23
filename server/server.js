const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");         
const requestRoutes = require("./routes"); 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/request", requestRoutes);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(PORT));
});
