const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/vibhu').then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log(err);
});
const schema={
    name:{
        type:String,
        trim:true
    },
    desc:{
        type:String,
        trim:true
    },
    year:{
        type:String,
        trim:true
    },
    image:{
        type:String,
        trim:true
    },
    youtube:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
};
const mdl=mongoose.model('miniplixed',schema);
module.exports=mdl;
