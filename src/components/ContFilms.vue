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
    <div class="container-bg">
        <div class="row">
            <div class="col-12" >
                <div class="content " v-if="store.films.length > 0">
                    <div class="col-12">
                        <h1  class="text-white float-start p-5">FILM</h1> 
                    </div>
                    <div class="film text-center" v-for="film, index in store.films" :key="index">
                        <img  :src="`https://image.tmdb.org/t/p/w342/${film.poster_path}`">
                        <div class="testo">
                            <h3 class="sott" >TITLE: "{{ film.title }}"</h3>
                            <h4>ORIGINAL TITLE: {{ film.original_title }}</h4>
                            <div> <country-flag :country='film.original_language' size='normal'/></div>
                            <div>
                                <span>RATING: </span>
                                <i v-for="n in 5" :key="n" class="fa-star" :class="{ 
                                    'fa-solid': n <= Math.round(film.vote_average / 2), 
                                    'fa-regular': n > Math.round(film.vote_average / 2) }" >
                                </i>
                            </div>
                            <p>"{{ film.overview }}"</p>
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

.container-bg {



    .content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 10px;
        border: solid 2px red;


        img {
            width: 342px;
            height: 513px;
            border: solid 5px white;

        }

        .sott {
            text-decoration: underline;
        }

        .red {
            color: red;
        }

        .fa-star {
            color: goldenrod;
        }


        .film {
            width: calc(100% / 5 - 10px);
            height: 513px;
            padding: 10px;
            margin: 10px;

            .testo {
                background-color: black;
                padding: 15px;
                width: 345px;
                height: 513px;
                color: white;
                position: relative;
                bottom: 513px;
                left: 0;
                opacity: 0;
                border: solid 5px white;


                &:hover {
                    opacity: 1;
                    transition: 3s;
                    transform: rotateY(360deg);

                }


            }



        }
    }
}
</style>