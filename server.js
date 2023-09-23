const express = require("express");
const app = express();
//  the following line of code is needed for our application to be able to use the JSX View Engine
const jsxEngine = require("jsx-view-engine");

// Data
// in order to get fruits, it has to go through the following file structure:
const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables")

// adding our view templates
// these ALWAYS go above your routes
//  the following 2 lines of code are ALSO needed for our application to be able to use the JSX View Engine
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Routes
// Index Route - all the fruits
app.get("/fruits/", (req, res) => {
  // res.send(fruits);
  res.render("fruits/Index", { fruits: fruits });
});

// Show Route - one particular fruit by id
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("fruits/Show", {
    //second param must be an object
    fruit: fruits[req.params.indexOfFruitsArray], //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]})
  }); // renders the info using the appropriate template

  // ---------------------


// Index Route - all the vegetables
app.get("/vegetables/", (req, res) => {
  // res.send(vegetables);
  res.render("vegetables/Index", { vegetables: vegetables });
});
});
// Show Route - one particular vegetable by id
app.get("/vegetables/:indexOfVegetablesArray", (req, res) => {
  // res.send(vegetables[req.params.indexOfVegetablesArray]);
  res.render("vegetables/Show", {
    //second param must be an object
    vegetable: vegetables[req.params.indexOfVegetablesArray], //there will be a variable available inside the ejs file called vegetable, its value is vegetables[req.params.indexOfVegetablesArray]})
  }); // renders the info using the appropriate template


});

app.listen(3000, () => {
  console.log("listening");
});
