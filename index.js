const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.js'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/* Iteration 2: wird auskommentiert, weil es kann nur einmal angelegt werden. Wird Node index.js ein zweites ausgeführt, kann ich nur eine Fehlermeldung bekommen. Gleiches gilt für Iteration 3. Alternativ könnte ich die Datenbank nach der Ausfühurng löschen. 
lRecipe.create({  
  title: 'Asian Glazed Chicken Thighs',
  level: 'Amateur Chef',
  ingredients: ['1/2 cup rice vinegar', '5 tablespoons honey', '1/3 cup soy sauce (such as Silver Swan®)', '1/4 cup Asian (toasted) sesame oil', '3 tablespoons Asian chili garlic sauce', '3 tablespoons minced garlic', 'salt to taste', '8 skinless, boneless chicken thighs'],
  cuisine: 'Asian',
  dishType: 'Dish',
  image: 'https://images.media-allrecipes.com/userphotos/720x405/815964.jpg',
  duration: 40,
  creator: 'Chef LePapu'
})
.then(recipe => {console.log('Gulaschsuppn cooked by Flo', recipe)})
.catch(err => {console.log ('Flo did not cook', err)});

*/
/*Recipe.find({ title: 'Asian Glazed Chicken Thighs' })
  .then(function(recipe){ console.log(.title)})     console.log Title
  .catch(errorCallback => {});*/
 
  /* Iteration 3* auch die muss später aus den gleichen Gründen wie Iteration 2 auskommentiert werden. Keine in (data) {} weil wir nichts abfragen. Die Daten sind in der Variablen data gespeichert, siehe line 3. Wir wollen die ganze Datenbank importieren. Geht noch nicht.*/
Recipe.insertMany(data) 
.then(correct => {console.log('Data are imported', correct)})
.catch(wrong => {console.log ('No data imported', wrong)})

module.exports = Recipe;
/* Iteration 4
Recipe.updateOne({title: "Rigatoni alla Genovese"},{duration: 100})
.then(data => console.log('success'))
.catch(err => console.log("error"))
*/

 /*Iteration 5 +6*/
Recipe.deleteOne({title:"Carrot Cake"})
.then(data => 
  {console.log(data, "success");
  mongoose.connection.close();
})
.catch(err => console.log(data, "err"));

/* Iteration 6 - wir können evt. nicht sagen, wann die Anwendung geschlossen wird, weil wir verschiedene asynchrone Versprechen haben.Daher in Iteration 5 */
d