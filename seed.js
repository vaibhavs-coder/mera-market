const mongoose=require('mongoose');
const mdl=require('./models/Product');
const products=[{name:"Mirzapur",
desc:"Mirzapur web series",
year:"2018",
image:"https://mcmscache.epapr.in/post_images/website_350/post_20445065/full.png",
youtube:"https://www.youtube.com/embed/BUIcp8dRvcI?si=q2Xi4sYGjOUkPdCX" 
},
{
    name:"Panchayat",
    desc:"Panchayat web series",
    year:"2020",
    image:"https://m.media-amazon.com/images/S/pv-target-images/1908332ac70f0d120ededb30a5400220a39cd2b52c4b94d4c682160f54d22fe7.jpg",
    youtube:"https://www.youtube.com/embed/MO43qLXkE3M?si=tdKClT33dP4tKPJA"
}];
async function seedDB(){
await mdl.insertMany(products);
};
module.exports=seedDB;