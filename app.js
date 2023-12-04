const express=require('express');
const app=express();
const path=require('path');
const ejsMate=require('ejs-mate');
const seedDB = require('./seed');
const reviewRoutes=require('./routes/revroute');
const productRoutes=require('./routes/route');
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
app.engine('ejs' , ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
seedDB();
app.use(productRoutes);
app.use(reviewRoutes);
app.listen(8000,(req,res)=>{
    console.log("Server connected at 8000");
});



