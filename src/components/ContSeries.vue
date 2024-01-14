<script>
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'ContSeries',
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
                <div class="content text-center">
                    <div class="col-12">
                        <h1 class="">SERIE TV</h1> 
                    </div>
                    <div class="film text-center" v-for="serie, index in store.series" :key="index">
                        <img :src="`https://image.tmdb.org/t/p/w185/${serie.poster_path}`">
                        <div class="testo">
                            <p >{{ serie.name }}</p>
                            <p>{{ serie.original_name }}</p>
                            <country-flag :country='serie.original_language' size='normal'/>
                            <p>{{ serie.vote_average }}</p>
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