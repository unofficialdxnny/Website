const TMDB_API_KEY = 'de34df46a91c183f531ab74166ed9501';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const MOVIES_PER_PAGE = 20; // Number of movies to load per page
let currentPage = 1;
let selectedGenres = [];

document.addEventListener('DOMContentLoaded', async () => {
    const genres = await getGenres();
    renderGenres(genres);
});

document.getElementById('get-recommendations').addEventListener('click', async () => {
    selectedGenres = getSelectedGenres();
    const movies = await getMoviesByGenres(selectedGenres);
    renderRecommendations(movies, false);
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
        label.className = 'custom-checkbox';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genre.id;

        const checkmark = document.createElement('span');
        checkmark.className = 'checkmark';

        label.appendChild(checkbox);
        label.appendChild(checkmark);
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

function renderRecommendations(movies, clearPrevious = false) {
    const recommendationsList = document.getElementById('recommendations');
    if (clearPrevious) {
        recommendationsList.innerHTML = ''; // Clear previous recommendations
    }

    if (movies.length === 0 && clearPrevious) {
        recommendationsList.innerHTML = '<li>No movies found for the selected genres.</li>';
        return;
    }

    // Shuffle the movies before rendering
    shuffleArray(movies);
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.className = 'movie-item';
        li.dataset.movieId = movie.id;

        const img = document.createElement('img');
        img.src = movie.poster_path ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}` : 'https://via.placeholder.com/150';
        img.alt = movie.title;

        const title = document.createElement('p');
        title.textContent = movie.title;

        const yearSpan = document.createElement('span');
        yearSpan.textContent = `${getReleaseYear(movie.release_date)}`;
        yearSpan.classList.add('movie-year');

        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(yearSpan); // Appending year after title
        recommendationsList.appendChild(li);

        // Add click event listener to each movie item
        li.addEventListener('click', () => showMovieDetails(movie.id));
    });
}

// Function to get release year from release date
function getReleaseYear(releaseDate) {
    return releaseDate ? new Date(releaseDate).getFullYear() : 'Unknown';
}


// Function to shuffle array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function showMovieDetails(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=credits`);
        const movie = await response.json();
        const modal = document.getElementById('movie-modal');
        document.getElementById('movie-title').textContent = movie.title;
        document.getElementById('movie-description').textContent = movie.overview;

        const castList = document.getElementById('movie-cast');
        castList.innerHTML = ''; // Clear previous cast list
        movie.credits.cast.slice(0, 10).forEach((castMember, index) => {
            if (index > 0) {
                castList.innerHTML += ', '; // Add comma between cast members
            }
            const castLink = document.createElement('a');
            castLink.href = `https://www.themoviedb.org/person/${castMember.id}`;
            castLink.target = '_blank';
            castLink.textContent = castMember.name;
            castList.appendChild(castLink);
        });

        modal.style.display = 'block';

        const closeButton = modal.querySelector('.close');
        closeButton.onclick = () => {
            modal.style.display = 'none';
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}



// Function to check if the bottom of the page is reached
function isBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to handle infinite scrolling
async function handleScroll() {
    if (isBottom()) {
        const movies = await getMoviesByGenres(selectedGenres);
        renderRecommendations(movies);
    }
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Event listener for button click
// const recommendationButton = document.getElementById('get-recommendations');
// document.addEventListener('keyup', function (event) {
//     if (event.keyCode === 32) {
//         recommendationButton.click();
//     }
// });

