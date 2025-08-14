import mongoose from "mongoose";
//this is a schema which feild user will have
const userSchema=new mongoose.Schema(
   {
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,

    },
    profilePic:{
        type:String,
        default:""
        
    },
   },
   {timestamps:true}
);
//created a model called User which is depending on schema(userschema)
const User=mongoose.model("User",userSchema);
export default User;