lucide.createIcons();

// =========
// MOVIES
// =========

let movies = []

let favMovies = []

async function loadMovies() {
    const response = await fetch("movielist.json")
    movies= await response.json()

    const favResponse = await fetch("favlist.json")
    favMovies =  await favResponse.json()

    displayMovies(movies)
    displayFav(favMovies)
}

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

                <h3>${movie.title}</h3>

                <p class="movie-yr">
                    ${movie.year} · ${movie.runtime} 
                </p>


                <p class="movie-genres">
                    ${movie.genres.join(" · ")}
                </p>

            </div>
        </article>
        `).join("")
    
}

const favGrid = document.querySelector("#favgrid")

function displayFav(movieList) {
    favGrid.innerHTML = movieList.map((movie, index) => `
        <article class="fav-card">

            <div class="fav-poster" data-title="${movie.title}">
                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                    loading = "lazy"
                    onerror="this.remove()"
                >

                <span class="fav-rank">
                    ${index + 1}
                </span>

                <span class="fav-rating">
                    ★ ${movie.rating.toFixed(1)}
                </span>
            </div>

            <div class="fav-info">
                <span class="fav-type">
                    ${movie.type || "Movie"}
                </span>

                <h3>${movie.title}</h3>


                <p class="fav-desc">
                    ${movie.year}${movie.endYear ? `-${movie.endYear}` : ""}
                     · ${movie.runtime} ${movie.runtimeUnit || "min"} 
                </p>

                <p class="fav-genres">
                    ${movie.genres.join(" · ")}
                </p>

                <p class="fav-descr">
                    ${movie.description || ""}
                </p>

            </div>
        </article>
        `).join("")
    
}
loadMovies()