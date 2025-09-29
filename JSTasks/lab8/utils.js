// Write a function that greets a user, using a default parameter for the name.
//1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.


export function greetUser(name) {
    return `Hello, ${name}!`;
}
export default class DataFetcher {
    async getUserId(id) {
         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        return user
        
    }
}


