<script>
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'ContFilms',
    components: {
        CountryFlag
    },
    data() {

        return {
            store

        }
    }
}
</script>
<template lang="">
  <div>
    <div class="container">
        <div class="row">
            <div class="col-12" >
                <div class="content">
                    <div class="film text-center" v-for="film, index in store.films" :key="index">
                        <img :src="`https://image.tmdb.org/t/p/w185/${film.poster_path}`">
                        <div class="testo">
                            <p >{{ film.title }}</p>
                            <p>{{ film.original_title }}</p>
                            <country-flag :country='film.original_language' size='normal'/>
                            <p>{{ film.vote_average }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

.content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;


    .film {
        width: calc(100% / 6 - 10px);

        padding: 10px;
        margin: 10px;

        .testo {
            background-color: black;
            line-height: 100px;
            height: 300px;
            color: white;
        }



    }
}
</style>