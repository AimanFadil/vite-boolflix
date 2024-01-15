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
    <div class="container-big">
        <div class="row">
            <div class="col-12" >
                <div class="content text-center">
                    <div class="col-12">
                        <h1 class="">SERIE TV</h1> 
                    </div>
                    <div class="film text-center" v-for="serie, index in store.series" :key="index">
                        <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`">
                        <div class="testo">
                            <h3 >{{ serie.name }}</h3>
                            <h4>{{ serie.original_name }}</h4>
                            <div><country-flag :country='serie.original_language' size='normal'/></div>
                            <i v-for="n in 5" :key="n" class="fa-star" :class="{ 
                                'fa-solid': n <= Math.round(serie.vote_average / 2), 
                                'fa-regular': n > Math.round(serie.vote_average / 2) }" >
                            </i>
                            <p>"{{ serie.overview }}"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

.content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;

    img {
        height: 513px;
        max-width: 342px;
        position: relative;
    }


    .film {
        width: calc(100% / 5 - 10px);

        padding: 10px;
        margin: 10px;

        .testo {
            background-color: black;
            padding: 15px;
            width: 342px;
            height: 513px;
            color: white;
            position: absolute;
            top: 130px;
            opacity: 0;

            &:hover {
                opacity: 1;

            }


        }



    }
}
</style>