const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    JobTitle: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true,
       
    },
    Location: {
        type: String,
        required: true
    },
    Salary:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    CreatedBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
});

module.exports = mongoose.model("Job", jobSchema);