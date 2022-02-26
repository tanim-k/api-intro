// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function addData() {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => displayUsers(data));
}
function addUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}
function addPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}
function displayUsers(data) {
    console.log(data);
}