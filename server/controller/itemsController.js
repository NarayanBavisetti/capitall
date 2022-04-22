const Items = require("../model/itemsSchema");

const sellItems = async (req,res) => {
    const {productName,  productType, price,address, city,state,pincode} = req.body;
    console.log(req.body)
    if (!productName || !productType|| !price|| !address|| !city|| !state|| !pincode) {
        res.status(400).json({message:"Please fill all the details"})
      }
    const item = await new Items({ user:req.user._id,productName,  productType, price,address, city,state,pincode,sold:false});
    await item.save();
    res.status(200).json(item)
}

const soldItems = async (req,res) => {
    const items = await Items.find({user : req.user.id,sold:true})
    res.status(200).json(items);
}

const purchasedItems = async (req,res) => {
    
}
const yourItems = async (req,res) => {
  
    const items = await Items.find({user : req.user._id})
    res.status(200).json(items);
}
const allItems = async (req,res) => {
    const items = await Items.find({sold:false})
    res.status(200).json(items);
}
module.exports = {
    sellItems,purchasedItems,soldItems,yourItems,allItems
}
