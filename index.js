console.log(`Hello World`);

let message = document.querySelector('#message');
document.querySelector("form").addEventListener("submit", addMovie);

function addMovie(event) {
    event.preventDefault();
    
    let inputField = document.querySelector('input');

    let movie = document.createElement('li');

    let movieTitle = document.createElement('span');
    movieTitle.addEventListener('click', crossOffMovie);
    movieTitle.textContent = inputField.value;

    
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie);

    inputField.value = '';
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`;
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')){
        message.textContent =  `${event.target.textContent} watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

function revealMessage(){
    message.classList.remove('hide');

    setTimeout(() => {
        message.classList.add('hide');
    }, 1000);
}