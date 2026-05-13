const axios = require("axios");
const Crypto = require("../models/Crypto");

const savecryptoData = async (req, res) =>{
    try{
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
         await Crypto.deleteMany();
        const savedData = await Crypto.insertMany(data);
        res.json(savedData );
    }catch(error){
        console.log(error);
    }
}

const getCryptoData = async (req, res) => {
    try{
        const data = await Crypto.find();
        res.json(data);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    savecryptoData,
    getCryptoData
}