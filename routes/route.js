const express=require('express');
const router=express.Router();
const mdl=require('../models/Product');
router.get('/',async(req,res)=>{
    const p=await mdl.find({});
    res.render('home',{p});
});
router.get('/add',(req,res)=>{
    res.render('add');
});
router.post('/',async(req,res)=>{
    mdl.create({name:req.body.name,desc:req.body.desc,year:req.body.year,image:req.body.image,youtube:req.body.youtube});
    res.redirect('/');
});
router.get('/:id',async(req,res)=>{
    const id=req.params;
    const pk=await mdl.findById(id.id).populate('reviews');

    res.render('show',{pk})
});
router.get('/:id/edit',async(req,res)=>{
const idc=req.params;
const found=await mdl.findById(idc.id);
res.render('edit',{found});
});
router.patch('/:id',async(req,res)=>{
let {id}=req.params;
let {name,desc,year,image,youtube}= req.body;
await mdl.findByIdAndUpdate(id,{name,desc,year,image,youtube});
res.redirect(`/${id}`);
});
router.delete('/:id',async(req,res)=>{
const id=req.params;
const pro=await mdl.findById(id.id);
await mdl.findByIdAndDelete(id.id);

res.redirect('/');
});

module.exports=router;
