const api_key = 'api_key=4b4da59d544abb821702438d2bde4937';
const URL = 'https://api.themoviedb.org/3';
const language = 'language=pt-BR'

export async function GET_MOVIES() {
    return [
        {
            slug: 'Originals',
            title: 'Originais da Netflix',
            items: await fetchMovies(`/discover/tv?with_network=213&${language}&${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await fetchMovies(`/trending/all/week?${language}&${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            items: await fetchMovies(`/movie/top_rated?${language}&${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await fetchMovies(`/discover/movie?with_genres=28&${language}&${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await fetchMovies(`/discover/movie?with_genres=35&${language}&${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await fetchMovies(`/discover/movie?with_genres=27&${language}&${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await fetchMovies(`/discover/movie?with_genres=10749&${language}&${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await fetchMovies(`/discover/movie?with_genres=99&${language}&${API_KEY}`)
        },
    ]
}