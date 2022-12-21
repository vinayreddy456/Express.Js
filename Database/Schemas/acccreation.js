const mongoose=require('mongoose');
const create=new mongoose.Schema({
    username:{
        type:mongoose.SchemaTypes.String,
        required:true,
    },
    contactnumber:{
        type:mongoose.SchemaTypes.String,
        required:true
    },
    HostelName:{
        type:mongoose.SchemaTypes.String,
        required:true,
    },
    category:{
        type:mongoose.SchemaTypes.String,
        required:true,
    },
    price:{
        type:mongoose.SchemaTypes.String,
        required:true,
    }


})
module.exports=mongoose.model('accreate',create);