lucide.createIcons();

// =========
// MOVIES
// =========

let movies = [
    
]

async function loadMovies() {
    const response = await fetch("movielist.json")
    movies= await response.json()

    displayMovies(movies)
}

loadMovies()

const movieGrid = document.querySelector("#movie-grid")

function displayMovies(movieList) {
    movieGrid.innerHTML = movieList.map(movie => `
        <article class="movie-card">

            <div class="movie-poster" data-title="${movie.title}">
                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                    loading = "lazy"
                    onerror="this.remove()"
                >

                <span class="movie-rating">
                    ★ ${movie.rating.toFixed(1)}
                </span>
            </div>

            <div class="movie-info">
                <p class="movie-yr">
                    ${movie.year} · ${movie.runtime} min
                </p>

                <h3>${movie.title}</h3>

                <p class="movie-genres">
                    ${movie.genres.join(" · ")}
                </p>

            </div>
        </article>
        `).join("")
    
}

displayMovies(movies)