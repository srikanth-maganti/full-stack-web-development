const mongoose=require("mongoose");

const chatschema=new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxLength:50,
    },
    created_at:{
        type:String,
        required:true,
    }

});


let chat=mongoose.model("chat",chatschema);
module.exports=chat;