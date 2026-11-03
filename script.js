lucide.createIcons();

// =========
// MOVIES
// =========

const movies = [
    {
        id:1,
        title:"The Shining",
        year:1980,
        genres: ["Horror", "Thriller"],
        runtime: 146,
        rating: 9.2,
        poster:"assets/posters/theshining.jpg",
        description: "A writer takes a job at an isolated hotel, where unsettling events begin to unfold..."
    },

    {
        id: 2,
        title: "Coraline",
        year: 2009,
        genres: ["Animation", "Fantasy", "Horror"],
        rating: 9.0,
        runtime: 100,
        poster: "assets/posters/coraline.jpg",
        description: "A young girl discovers a perfect parallel world hiding a secret"
    },

    {
        id: 3,
        title: "Knives Out",
        year: 2019,
        genres: ["Mystery", "Comedy", "Crime"],
        runtime: 130,
        rating: 8.7,
        poster: "assets/posters/knivesout.jpg"
    },

    {
        id: 4,
        title: "Obsession",
        year: 2025,
        genres: ["Thriller", "Horror", "Romance"],
        runtime: 109,
        rating: 7.0,
        poster: "assets/posters/obsession.jpg",
        description: "A young man's wish to make his crush fall in love with him takes a dark turn"
    }
]

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