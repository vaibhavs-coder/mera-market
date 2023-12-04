const mongoose=require('mongoose');
const reviewschema={
    rating:{
        type:Number,
        min:0,
        max:5,
        
    },
    comment:{
        type:String,
        trim:true,
    }
    }
        const Review=mongoose.model('Review',reviewschema);
        module.exports=Review;
    
