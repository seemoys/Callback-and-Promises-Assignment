fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(response => console.log(response))
    // .catch(error => console.error(error));