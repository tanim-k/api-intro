// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

function addData() {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}
function addUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
function addPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
// OWN PRACTICE
function addPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
function displayPhotos(data) {
    for(const user of data){
        console.log(user.url);
    }
}
function displayUsers(data) {
    const ul = document.getElementById('users');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name / user.email
        li.innerText = `name: ${user.name}. email: ${user.email}`;
        ul.appendChild(li);
    }    
}