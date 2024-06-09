const TMDB_API_KEY = 'de34df46a91c183f531ab74166ed9501';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const MOVIES_PER_PAGE = 20; // Number of movies to load per page
let currentPage = 1;

document.addEventListener('DOMContentLoaded', async () => {
    const genres = await getGenres();
    renderGenres(genres);
});

document.getElementById('get-recommendations').addEventListener('click', async () => {
    const selectedGenres = getSelectedGenres();
    if (selectedGenres.length > 0) {
        const movies = await getMoviesByGenres(selectedGenres);
        renderRecommendations(movies);
    }
});

async function getGenres() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`);
        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        return [];
    }
}

function renderGenres(genres) {
    const genreSelection = document.getElementById('genre-selection');
    genreSelection.innerHTML = ''; // Clear previous genres if any
    genres.forEach(genre => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genre.id;
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(genre.name));
        genreSelection.appendChild(label);
    });
}

function getSelectedGenres() {
    const checkboxes = document.querySelectorAll('#genre-selection input:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

async function getMoviesByGenres(genres) {
    if (genres.length === 0) return []; // No genres selected

    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genres.join(',')}&page=${currentPage}`);
        const data = await response.json();
        currentPage++; // Increment page number for next call
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}

function renderRecommendations(movies) {
    const recommendationsList = document.getElementById('recommendations');

    if (movies.length === 0 && currentPage === 1) {
        recommendationsList.innerHTML = '<li>No movies found for the selected genres.</li>';
        return;
    }

    // Shuffle the movies before rendering
    shuffleArray(movies);

    movies.forEach(movie => {
        const li = document.createElement('li');
        li.className = 'movie-item';

        const img = document.createElement('img');
        img.src = movie.poster_path ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/150';
        img.alt = movie.title;

        const title = document.createElement('p');
        title.textContent = movie.title;

        li.appendChild(img);
        li.appendChild(title);
        recommendationsList.appendChild(li);

        // Trigger reflow to restart animation (optional, depending on browser behavior)
        void li.offsetWidth;
        li.style.opacity = '0';
        li.style.animation = 'fadeIn 1s forwards';
    });
}

// Function to shuffle array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const recommendation = document.getElementById('get-recommendations');

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 32) {
        recommendation.click();
    }
});
