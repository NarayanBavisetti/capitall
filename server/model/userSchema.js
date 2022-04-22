const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
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

const User = mongoose.model("CapitallUser", userSchema);

module.exports = User;
