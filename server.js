const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']


// -------------------------------------------------------------------
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const nums2 = nums.map((currentElement) => {
  return currentElement * '2';
});

conole.log(nums2);

// Your code here

// -------------------------------------------------------------------

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

// -------------------------------------------------------------------

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

// const [firstTopping, secondTopping] = pizzaToppings;

// console.log(firstTopping);
// console.log(secondTopping);


// console.log(pizzaToppings[0]);
// console.log(pizzaToppings[1]);

// -------------------------------------------------------------------

const person = {
  name: 'Alex',
  role: 'Software Engineer',
};

// Object destructuring:
const { name, role } = person;

console.log(name); // 'Alex'
console.log(role); // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name); // 'Alex'
console.log(person.role); // 'Software Engineer'

// -------------------------------------------------------------------

// -----------------------------------------------------------------
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const { make, model } = car;

console.log(make);
console.log(model);

console.log(car, make);
console.log(car, model);
// ------------------------------------------------------------------------

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const duplicateToppings = [...pizzaToppings];
console.log(duplicateToppings);


// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car, model: 'q7' };

console.log(car); 
console.log(myCar); 

// -------------------------------------
const propertyName = 'username'; // You can change this to 'age', 'email', etc.

const userProfile = {
  [propertyName]: 'michael_nunez' // Using propertyName as the dynamic key
};

console.log(userProfile);

// -------------------------
function describeAnimal(noun = 'cat', adjective = 'white') {
  console.log(`The ${noun} is ${adjective}.`);
}

// Calling the function with default values
describeAnimal(); // Logs: "The cat is white."

// Calling the function with supplied arguments
describeAnimal('dog', 'brown'); // Logs: "The dog is brown."

// --------------------------------

const pizza = tasty;
pizza === 'tasty' ? 
console.log('yum') : console.log('yuck')
// ---------------------------

const localLangConfig = null;  // Change this to 'es', 'fr', etc., or keep it null
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

// -----------------------------

const userSavedTheme = null; // Change this to 'dark', 'contrast', etc., or keep it null
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);
// ---------------------------------

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age;

console.log(cat);
