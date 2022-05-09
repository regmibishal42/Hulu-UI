

const API_KEY = process.env.API_KEY

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/weeks?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies:{
        title:"Comedy",
        url:`discover/movie/?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies:{
        title:"Romance",
        url:`discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystryMovies:{
        title:"Mystry",
        url:`discover/movie/?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFiMovies:{
        title:'SciFi',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern:{
        title:"Western",
        url:`discover/movie/?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimationMovies:{
        title:'Animation',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTv:{
        title:"Tv Movie",
        url:`discover/movie/?api_key=${API_KEY}&with_genres=10770`,
    },
}