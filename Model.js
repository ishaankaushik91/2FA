import mongoose from "mongoose";

let people = new mongoose.Schema({
    name : {
        type : String
    },
    password : {
        type : String
    },
    phone : {
        type : String,
        unique : true
    }
});

export default mongoose.model("People", people, "people");