// ==== ADVANCED Array Methods ====

// Self Study Questions

// 1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)
// A forEach loop is slower, and throws away return values. A map loop will store return values as it iterates over the array.

// 2. Explain the difference between a callback and a higher order function.
// A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers. A callback function is a function that is passed to another function with the expectation that the other function will call it.

// 3. What is closure?
// Closure is using a function inside of another function, and the value of the inner function is return in the outer function. 

// 4. Describe the four rules of the 'this' keyword.
// Global Context Rule - when this isn't defined on an object, it becomes globally scoped and defaults to the window object. 
// Implicit Rule - refers to using "this" inside of an object, so it defaults to the object it's used inside of
// Explicit Rule - Refers to using "this.obj" to directly name the object youre wanting to use
// New Rule - The new keyword is used in javascript to create a object from a constructor function.

// 5. Why do we need super() in an extended class?
// It's used to gain access to the parent class and gain access to the properties and methods. 



// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
  { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
  { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
  { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
  { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
  { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
  { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
  { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
  { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
  { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
];

/* Request 1: .forEach()

The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
.
*/
const displayNames = [];

function animalNames(zooAnimals){
  displayNames.push([zooAnimals.animal_name, zooAnimals.scientific_name].join())
}

zooAnimals.forEach(animalNames)
console.log(displayNames);

/* Request 2: .map()

The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.

*/

const lowCaseAnimalNames = [];

lowerCaseAnimalNames = lowCaseAnimalNames.push(zooAnimals.map(item => {
 return item.animal_name.toLowerCase()
}))

console.log(lowCaseAnimalNames)

/* Request 3: .filter() 

The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.

*/
const lowPopulationAnimals = [];

lowPopulationAnimals.push(zooAnimals.filter(animal => {
  return animal.population < 5
}))
console.log(lowPopulationAnimals);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.

*/
const populationTotal = zooAnimals.reduce(
  function(callBackPop, data){
    return callBackPop + data.population;
  }, 0);


console.log(populationTotal);


// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a, b)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!




/*

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/

