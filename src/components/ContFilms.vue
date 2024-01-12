<script>
import { store } from '../store.js';
export default {
    name: 'ContFilms',
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
                        <!-- <img :src="" > -->
                        <div class="testo">
                            <p >{{ film.title }}</p>
                            <p>{{ film.original_title }}</p>
                            <p>{{ film.original_language }}</p>
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