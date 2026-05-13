const express = require("express");
const mongoose = require("mongoose");
const cryptoRoutes = require("./App/Routes/cryptoRoutes.js"); 
const cors = require("cors");
require("dotenv").config();
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/crypto", cryptoRoutes);

mongoose.connect(process.env.DBURL)
  		  .then( () =>{
     			   console.log("Conncted to MongoDB")

                app.listen(process.env.PORT, () =>{
                        console.log("Server is running on " + process.env.PORT);
                })
	        })
        .catch((error) => console.log(error));



