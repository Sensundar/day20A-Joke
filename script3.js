document.addEventListener('DOMContentLoaded', () => {
    const jokeText = document.getElementById('joke-text');
    const getJokeButton = document.getElementById('get-joke-button');

    getJokeButton.addEventListener('click', () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeText.textContent = data.value;
            })
            .catch(error => {
                jokeText.textContent = 'Oops! Something went wrong.';
                console.error(error);
            });
    });
});

