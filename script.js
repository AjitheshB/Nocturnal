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
                    ${movie.year} · ${movie.runtime} min
                </p>


                <p class="movie-genres">
                    ${movie.genres.join(" · ")}
                </p>

                <hr width="40%">

                <p class="movie-descr">
                    ${movie.description || ""}
                </p>

            </div>
        </article>
        `).join("")
    
}

const favGrid = document.querySelector("#favgrid")

function displayFav(movieList) {
    favGrid.innerHTML = movieList.map((movie, index) => `
        <article class="fav-card" onclick="toggleFav(this)">

            <div class="fav-poster" data-title="${movie.title}">
                <img
                    src="${movie.poster}"
                    alt="${movie.title} poster"
                    loading = "lazy"
                    onerror="this.remove()"
                >

                <span class="fav-rank ${index === 0 ? 'rank-first' : ''}">
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

                <hr width="25%">

                <h3>${movie.title}</h3>


                <p class="fav-desc">
                    ${movie.year}${movie.endYear ? `-${movie.endYear}` : ""}
                     <br> ${movie.runtime} ${movie.runtimeUnit || "min"} 
                </p>

                <p class="fav-genres">
                    ${movie.genres.join(" · ")}
                </p>
                
                <hr width="30%">

                <p class="fav-descr">
                    ${movie.description || ""}
                </p>

            </div>

            <div class="fav-featured">
                <div class="fav-banner">
                    <img
                        src= "${movie.banner}"
                        alt = "${movie.title} banner"
                        class="fav-banner-img"
                    >

                    <div class="fav-banner-content">
                        <h1>${movie.title}</h1>
                        <p>${movie.description}</p>
                    </div>
                </div>
            </div>
        </article>
        `).join("")
    
}
loadMovies()
