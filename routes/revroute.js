const express=require('express');
const router=express.Router();
const mdl=require('../models/Product');
const Review=require('../models/Review');
router.post('/:id/review',async(req,res)=>{
   let {id}=req.params;
    let {rating,comment}=req.body;
    let product=await mdl.findById(id);
    let review=new Review({rating,comment});
    console.log(mdl.reviews);
    product.reviews.push(review);
    await review.save();
    await product.save();
res.redirect(`/${id}`);
});

module.exports=router;