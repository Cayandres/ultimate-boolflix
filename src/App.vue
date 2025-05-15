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
            })
        }
    },
    mounted() {
        
    },
}
</script>

<template>
    <Search @searched="getApi('tv'), getApi('movie')"/>
    <div class="acContainer">
        <Main type="Movie" value="movie"/>
        <Main type="Tv" value="tv"/>
    </div>
</template>

<style lang="scss">
@use './scss/main.scss' as*;
.acContainer{
    margin: 0 auto;
    Main{
        min-width: 1200px;
    }
}
</style>