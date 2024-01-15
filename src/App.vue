<script>
import { store } from './store.js';
import Header from './components/Header.vue'
import ContFilms from './components/ContFilms.vue';
import ContSeries from './components/ContSeries.vue';
import axios from 'axios';
export default {
  components: {
    Header,
    ContFilms,
    ContSeries
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {


      let filmUrl = store.endpoint

      if (store.film !== '') {
        filmUrl += `${store.film}`


      }

      axios.get(filmUrl).then((response) => {
        this.store.films = response.data.results


      })

      let serieUrl = store.endpointSerie

      if (store.film !== '') {
        serieUrl += `${store.film}`


      }
      axios.get(serieUrl).then((response) => {
        this.store.series = response.data.results
      })



    },




  },
  created() {
    this.getFilms()

  },
}
</script>
<template lang="">
  <div>
    <Header @cerca="getFilms" />
    <ContFilms />
    <ContSeries />
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
</style>