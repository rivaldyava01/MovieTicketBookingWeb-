<template>
    <div v-for="history in movieHistory">
        <div v-for="(movieList,index) in getMovieList">
            <div class="flex flex-col h-15 sm:flex-row ml-3">
                <div v-if="history.MovieId === movieList.imdbID">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="movieList.Poster" :alt="movieList.Title">
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <p class="font-bold text-xl mb-2">{{movieList.Title}}</p>
                        <div class="flex flex-row">
                            <p class="font-bold mb-2">SeatCode : </p>
                            <p class="ml-2">{{history.SeatCode}}</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MovieHistory',
        computed: {
            movieHistory() {
                return this.$store.state.movieHistory
            }
        }
    }
</script>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const getMovieList = computed(() => {
  return store.getters.getMovieList;
});
onMounted(() => {
  store.dispatch("fetchMovieList");
});
</script>