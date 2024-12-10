// script.js
document.querySelector('.play-btn').addEventListener('click', () => {
  alert('Enjoy your movie!');
});

// Example of dynamic movie card creation
const movies = ['Movie 5', 'Movie 6', 'Movie 7'];
const movieContainer = document.querySelector('.movie-container');

movies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';
  movieCard.innerText = movie;
  movieContainer.appendChild(movieCard);
});
