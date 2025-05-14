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
    <button @click="this.$emit('searched');" class="btn btn-primary">cerca</button>
</div>

</template>

<style lang="scss" scoped>

</style>