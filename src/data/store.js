import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/search/',
    apiKey: '0c78ff1cded4d1e91ba004e43bba9a90',
    typeToSearch:'',
    query: '',
    movie: [],
    tv: []
})