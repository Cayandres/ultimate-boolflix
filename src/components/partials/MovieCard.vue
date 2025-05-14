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
        card:String
    },
}
</script>

<template>
      <div class="card col-3" style="width: 18rem;">
        <img :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" class="card-img-top" alt="..." @error="onImageError" >
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
</template>

<style lang="scss" scoped>
    .card {
    margin: 1rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .card-img-top {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    .card-body {
        text-align: center;
    }

    .list-group-item {
        font-size: 0.9rem;
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