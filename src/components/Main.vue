<script>
import MovieCard from './partials/MovieCard.vue';
import { store } from '../data/store'
export default {
    name:'Main',
    props:{
        type: String,
        value: String,
    },
    data() {
        return {
            store,
        }
    },
    methods:{

    },

    components:{
        MovieCard
    }
}
</script>

<template>
    <div class="d-flex row">
        <h1>{{ type }}</h1>
        <MovieCard v-for="card in store[value]" :key="card.id" :card="card"/>

    </div>
</template>

<style lang="scss" scoped>
h1{
    margin-top: 10px;
}
</style>