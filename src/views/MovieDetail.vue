<template>
    <div v-for="(movieDetail,index) in getMovieDetail">
        <div v-if="index === 'data'">
            <div class="flex flex-col h-15 sm:flex-row ml-3">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" :src="movieDetail.Poster" :alt="movieDetail.Title">
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <p class="font-bold text-xl mb-2">{{movieDetail.Title}}</p>
                        <p>{{movieDetail.Plot}}</p>
                        <div class="flex flex-row">
                            <p class="font-bold mb-2">Genre : </p>
                            <p class="ml-2">{{movieDetail.Genre}}</p>
                        </div>
                         <div class="flex flex-row">
                            <p class="font-bold mb-2">Runtime : </p>
                            <p class="ml-2">{{movieDetail.Runtime}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12">
        <router-link :to="{name : 'selectseat', params: { id: $route.params.id }}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-screen mt-5 mb-3">
          Book
        </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
const route = useRoute()
const store = useStore();
const getMovieDetail = computed(() => {
  return store.getters.getMovieDetail;
});
// const id = computed(() => route.params.id);
// console.log(route.params.id)
onMounted(() => {
  store.dispatch("fetchMovieDetail", route.params.id);
});
</script>