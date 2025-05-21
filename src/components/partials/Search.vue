<script>
import { store } from '../../data/store'
export default {
    name: 'Search',
    data() {
        return {
            store
        }
    },    
}
</script>

<template>
    <div class="d-flex">
    <input v-model="store.query" type="text" class="form-control me-3" id="exampleFormControlInput1" placeholder="Search">
    <select v-model="store.typeToSearch" class="form-select" aria-label="Default select example">
        <option value="" selected>Type</option>
        <option value="movie">Movie</option>
        <option value="tv">Tv</option>
        <option value="3">Both</option>
    </select>
    <button @click="this.$emit('searched');" class="btn btn-primary">cerca</button>
</div>

</template>

<style lang="scss" scoped>
.form-select{
    width: 100px;
}
</style>