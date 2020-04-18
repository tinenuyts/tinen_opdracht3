const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/kunst.json');
const image = require('./img/img.json');

app.get("/", function(request, response){
 response.render("home", {
   logo: image.logo,
   kunst: data.werken,
   een: image.een,
   twee: image.twee,
   drie: image.drie
 });
});

app.get("/home", function(request, response){
 response.render("home", {
   logo: image.logo,
   kunst: data.werken,
   een: image.een,
   twee: image.twee,
   drie: image.drie
 });
});

app.get("/contact", function(request, response){
 response.render("contact", {
   logo: image.logo
 });
});


app.get("/img1p", function(request, response){
 response.render("img1p", {
   logo: image.logo,
   kunst: data.werken,
   een: image.een
 });
});

app.get("/img2p", function(request, response){
 response.render("img2p", {
   logo: image.logo,
   kunst: data.werken,
   twee: image.twee
 });
});

app.get("/img3p", function(request, response){
 response.render("img3p", {
   logo: image.logo,
   kunst: data.werken,
   drie: image.drie
 });
});

app.get("/img4p", function(request, response){
 response.render("img4p", {
   logo: image.logo,
   kunst: data.werken,
   vier: image.vier
 });
});

app.get("/img5p", function(request, response){
 response.render("img5p", {
   logo: image.logo,
   kunst: data.werken,
   vijf: image.vijf
 });
});

app.get("/img6p", function(request, response){
 response.render("img6p", {
   logo: image.logo,
   kunst: data.werken,
   zes: image.zes
 });
});

app.get("/img7p", function(request, response){
 response.render("img7p", {
   logo: image.logo,
   kunst: data.werken,
   zeven: image.zeven
 });
});

app.get("/img8p", function(request, response){
 response.render("img8p", {
   logo: image.logo,
   kunst: data.werken,
   acht: image.acht
 });
});

app.get("/img9p", function(request, response){
 response.render("img9p", {
   logo: image.logo,
   kunst: data.werken,
   negen: image.negen
 });
});

app.get("/img10p", function(request, response){
 response.render("img10p", {
   logo: image.logo,
   kunst: data.werken,
   tien: image.tien
 });
});


app.get('/galerij', function(req, res){
  res.render('galerij', {
    logo: image.logo,
    kunst: data.kunstwerken,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
});


app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
