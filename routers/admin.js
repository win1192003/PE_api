const express = require("express");
const Meals = require("../models/Meals");
const path = require("path");
const router = express.Router();

router.use('/assets/images', express.static(path.join(__dirname, '../assets/images')));

router.post("/meals/add", async (req, res) => {
  // Create a new meal
  try {
    const meal = new Meals(req.body);
    
    await meal.save();
    res.status(201).send({ message: 'Meal created successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).send(error); 
    }
});   

router.get("/meals", async (req, res) => {
  try {
    const meals = await Meals.find({});
    res.send(meals);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get("/meals/", async (req, res) => {
//   try {
//     const meal = await Meals.findById(req.params.id);
//     if (!meal) {
//       return res.status(404).send();
//     }
//     res.send(meal);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;