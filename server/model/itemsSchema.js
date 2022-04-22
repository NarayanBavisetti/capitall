const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  productName: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },

  sold: {
    type: Boolean,
    required: true,
  },
});

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// userSchema.method.generateAuthToken = async function () {
//     try{
// let token = jwt.sign({_id:this._id }, process.env.JWT_SECRET )
//     }catch(err){
//         console.log(err);
//     }
// }

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;
