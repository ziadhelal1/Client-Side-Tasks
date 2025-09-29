//
import { greetUser } from './utils.js';
console.log(greetUser('Ziad'));


// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.

new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 2000);
}).then((message) => {
    console.log(message);
});

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome!");
        }, 1000);
    });
}
waitAndGreet();

//4- Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchAndLog() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log(`Nmae : ${user.name} , address   : ${user.address}`)

    }
    catch (error) {
        console.log('error fetching user ', error)
    }

}
fetchAndLog();
//5.Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.

async function FetchAndLogs() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        return posts.slice(0, 3).map(post => post.title);
        

    }
    catch (error) {
        console.log(`error from Fetch and Logs `, { error });

    }

}
FetchAndLogs().then (console.log);
//6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function timer() {
    let count = 1;
    function next() {
        if (count <= 3) {
            console.log(count);
            count++;
            return new Promise(resolve => setTimeout(resolve, 1000)).then(next);
        }
    }
    next();
}
timer();


//7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function safeParseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log('Invalid JSON:', error.message);
        return null;
    }
}

console.log(safeParseJSON('{"name": "Ziad"}')); // will work
console.log(safeParseJSON('{name: Ziad}'));     // will not work



//8.Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.

async function countCompletedTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        const todos = await response.json();
        const completedCount = todos.filter(todo => todo.completed).length;
        return completedCount;
    } catch (error) {
        console.log('Error fetching todos:', error);
        return 0;
    }
}

countCompletedTodos().then(count => console.log('Completed todos:', count));

//9.Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
import DataFetcher from './utils.js';
const fetcher = new DataFetcher();
fetcher.getUserId(1).then(user => console.log(user));