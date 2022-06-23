const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
//Iteration 2
  .then((res) => {
    console.log(data)
    return Recipe.create({
      title: 'Spaguetti Bolognese',
      cusine: 'Italian',
      dishType: 'main_course',
      level: 'Amateur Chef',
      duration:180,
      creator: 'Chef Hernando 👨🏽‍🍳',
      ingredients: ['Tomate', 'cebolla', 'apio verde', 'carne']

    })
    // Run your code here, after you have insured that the connection was made
  })
  //Iteration 3

  .then((res)=>{
    console.log(data)
    return Recipe.insertMany(data);
  })
   //Iteration 4
  .then((res)=>{
    return Recipe.findOneAndUpdate({title: 'Rigatoni alla Genovese'}, {duration: 100})
  })
 //Iteration 5
  .then((res)=>{
    return Recipe.deleteOne(
      {title: 'Carrot Cake'}
      ) 
  })
  .then(
    console.log('borrado con exito')
  )
  //iteration 6
  .then((res)=>{
    console.log('cerrada la conexion')
    mongoose.connection.close()

  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
// empezando