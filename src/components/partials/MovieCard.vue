<script>
export default {
    name:'MovieCard',
    data() {
        return {
            max: 5,
        }
    },
    methods: {
        onImageError(event){
            event.target.src = '/img/placeholder.jpg'
        },
        voteAverage(int){
            return Math.ceil(int / 2)
        }
    },
    props:{
        card: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
      <div class="card col-2">
        <div class="poster">
            <img :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" class="card-img-top card-image" alt="..." @error="onImageError" >
        </div>
        <div class="overflow">
            
            <div class="card-body">
                <h5 class="card-title">{{card.title || card.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <p class="card-flag"><img class="flag" :src="`/flags/4x3/${card.original_language}.svg`"   :alt="`${card.original_language}`"></p>
                </li>
                <li class="list-group-item">
                    <i v-for="n in max"
                             :key="n"  
                             :class="{'fa-solid fa-star' : n <= voteAverage(card.vote_average),
                                'fa-regular fa-star' : n > voteAverage(card.vote_average)
                             }"
                            >
                    </i>
                </li>
                <li class="list-group-item">{{ card.overview || card.original_title }}</li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .card {
        margin: 20px;
        .poster{
            position: relative;
        }
        
        .overflow{
            height: 100%;
            text-align: center;
            overflow: scroll;
            position: absolute;
            top: 0;
            opacity: 0;
            background-color: rgba(0, 0, 0, 0.307); 
            &:hover{
                opacity: 1;
                background-color: rgba(0, 0, 0, 0.307); 
            }
            .list-group {
                background-color: rgba(0, 0, 0, 0.307); 

            }
        }
        .card-flag{
            .flag{
            height: 20px;
            }
    }
    li{
        i{
            color: gold;
        }
    }
}
</style>