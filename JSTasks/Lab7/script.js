// 1- Write a function that greets a user,
//  using a default parameter for the name.
function greetUser(name = "Guest") {
	return `Hello, ${name}!`;
}
// 2- Write a function that calculates 
// the total price with a default tax rate parameter.
function calculateTotal(price, taxRate = 0.25) {
	return price + price * taxRate;
}
// 3- Write a function that creates a user object, using a default role parameter.
function createUser(name, role = "user") {
	return { name, role };
}
// 4- Write a function that multiplies any number of arguments using the rest operator.
function multiplyAll(...nums) {
	return nums.reduce((acc, val) => acc * val, 1);
}
// 5- Write a function that multiplies 
// the first argument by the sum of all the rest using the rest operator.
function multiplyFirstBySum(first, ...rest) {
	return first * rest.reduce((acc, val) => acc + val, 0);
}
// 6- Write a function that takes a variable number of strings
//  and returns them as a single array using the rest operator.
function collectStrings(...strings) {
	return [...strings];
}
// 7- Create a new array by combining two arrays using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
// 8- Copy an array using the spread operator.
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);

// 9- Merge two objects into one using the spread operator.
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const mergedObj = { ...objA, ...objB };
console.log(mergedObj)
// 10- Update a property in an object using the spread operator to create a new object.
const user = { name: "Ziad", age: 25 };
const updatedUser = { ...user, age: 26 };
// 11- Destructure an array to get the first and second elements into variables.
const numbers = [100, 200, 300];
const [firstNum, secondNum] = numbers;
// 12- Destructure an array to get the first element and the rest into another array.
const [firstElement, ...restElements] = numbers;
// 13- Destructure an object to extract two properties into variables.
const person = { name: "Ziad", age: 30, city: "MANS" };
const { name, age } = person;
// 14- Destructure an object and rename the extracted properties.
const { name: personName, age: personAge } = person;
// 15- Write a function that takes an object as a parameter 
// and uses destructuring in the parameter list to extract specific properties.
function printUserInfo({ name, age }) {
	return `Name: ${name}, Age: ${age}`;
}
