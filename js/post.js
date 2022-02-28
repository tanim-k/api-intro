function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
// loadPosts();
function displayPosts(posts) {
    const postDiv = document.getElementById('posts');
    for( const post of posts ) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p> `;
        postDiv.appendChild(div);
        console.log(post.body)
    }
}
function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify({
            title:'my new post',
            body: 'this is my post',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(response => response.json())
    .then(data => console.log(data));

}
