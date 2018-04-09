// import custom css
require('./index.css');

import { person, sayHello } from './lib';

alert(person.name)
console.log(sayHello("Costas"));

// Async example
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts));