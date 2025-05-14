<script>
import Search from './components/partials/Search.vue'
import axios from 'axios'
import { store } from './data/store'
import Main from './components/Main.vue'
export default {
    name: 'App',
    data() {
        return {
            store
        }
    },
    components:{
        Main,
        Search,
    },
    methods:{
        getApi(value){
            axios.get(store.apiUrl + value,{
                params: {                    
                    api_key: store.apiKey,
                    query: store.query,
                }
            })
            .then(result => {
                store[value] = result.data.results
                console.log(value, store[value]);
                
            })
        }
    },
    mounted() {
        
    },
}
</script>

<template>
    <Search @searched="getApi('tv'), getApi('movie')"/>
    <Main type="Movie" value="movie"/>
    <Main type="Tv" value="tv"/>
</template>

<style lang="scss">
@use './scss/main.scss' as*;

</style>