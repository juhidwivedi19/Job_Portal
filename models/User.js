const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    role:{
           type: String,
           enum: ["recruiter","candidate"], // iske alawa koi aur hua to vo error dega
           default: "candidate"
          
         },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);

