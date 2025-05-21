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
            store.movie = ''
            store.tv = ''
            axios.get(store.apiUrl + value,{
                params: {                    
                    api_key: store.apiKey,
                    query: store.query,
                }
            })
            .then(result => {
                store[value] = result.data.results
                console.log(store.typeToSearch);
                
            })
        },
        getType(type){
            if (type === 'movie') {
                this.getApi(type)
            } else if(type === 'tv'){
                this.getApi('tv')
            } else {
                this.getApi('tv')
                this.getApi('movie')
            }
        }
    },
    mounted() {
        
    },
}
</script>

<template>
    <Search @searched="getType(store.typeToSearch)"/>
    <div class="acContainer">
        <Main v-if="store.movie.length > 0" type="Movie" value="movie"/>
        <Main v-if="store.tv.length > 0" type="Tv" value="tv"/>
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