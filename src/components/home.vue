<script>
import { store } from '../store.js';

export default {
    name: 'home',

    data() {

        return {
            store

        }
    }
}
</script>
<template lang="">
  <div>
    <div class="container" v-if="store.series.length <= 0 ">
        <div class="row">
            <div class="content">
                <div class="py-4">
                    <h1>Titolo del momento</h1>
                    <img src="https://t.ctcdn.com.br/nlrrkirYLPxyQouu7Q2MHTd6o1E=/640x360/smart/i814909.jpeg" alt="">
                    <div class="butt">
                        <button class="btn red">
                            Guarda <i class="fas fa-play"></i>
                        </button> 
                    </div>
                </div>
                <div class="py-3">
                    <h2>Titolo: PLUTO</h2>
                    <h3>Anno: 2023</h3>
                    <h3>Rating: <span> <i v-for="n in 5" :key="n" class="fa-star fa-solid"></i></span></h3>
                    <h3>Trama:</h3>
                    <h4>Pluto segue le peripezie di Gesicht per scovare l'identità dell'antagonista misterioso con la consulenza di Brau1589 - incrocio tra Hannibal Lecter e Lilith di Evangelion - un robot superconnesso inchiodato a un muro in una struttura di sicurezza dopo essere passato alla Storia per essere l'unico robot ad aver ucciso un uomo.</h4>
                </div>
            </div>
        </div>
    </div>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

.container {
    color: white;


    .content {

        .fa-star {
            color: goldenrod;
        }

        button {
            background-color: rgb(255, 255, 255);
            color: rgb(0, 0, 0);

        }

        .butt {
            padding: 15px;
            position: absolute;
            top: 600px;

        }


        img {
            width: 70%;
            border: solid white 3px;
        }

        h1 {
            color: white;
        }
    }

}
</style>