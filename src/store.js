import { reactive } from "vue";

export const store = reactive({
    endpoint: 'https://api.themoviedb.org/3/search/movie?api_key=9d8a145937f8aeaaeb44276b273ddd7f&query=',
    films: [],
    film: '',
    endpointSerie: 'https://api.themoviedb.org/3/search/tv?api_key=9d8a145937f8aeaaeb44276b273ddd7f&query=',
    series: [],
    img: ''


})