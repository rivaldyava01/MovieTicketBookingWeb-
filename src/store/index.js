import { createStore } from 'vuex';
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    movieList: [],
    movieDetail: [],
    movieHistory: [ {MovieId: "blackpanther",SeatCode: "2b"}]
  },
  plugins: [createPersistedState()],
  getters: {
    getMovieList: (state) => state.movieList,
    getMovieDetail: (state) => state.movieDetail
  },
  mutations: {
    INSERT_MOVIEHISTORY(state, history){
      state.movieHistory.push(history);
      console.log(state.movieHistory[1])
;    },
    SET_MOVIELIST(state, movieList) {
      state.movieList =  movieList;
    },
    SET_MOVIEDETAIL(state, movieDetail) {
      state.movieDetail =  movieDetail;
    },
  },
  actions: {
    async fetchMovieList({ commit }) {
      try {
        const data = await axios.get(
          "https://www.omdbapi.com/?apikey=31ccf49&s=Keluarga"
        );
        commit("SET_MOVIELIST", data.data.Search);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchMovieDetail({ commit }, id) {
      try {
        const data = await axios.get(
          `https://www.omdbapi.com/?apikey=31ccf49&i=${id}`
        );
        commit("SET_MOVIEDETAIL", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async insertMovieHistory({commit}, history){
      try{
        // console.log("1234")
        commit('INSERT_MOVIEHISTORY', history)
      }catch(error){
        alert(error);
        console.log(error);
      }
   }
  },
  modules: {
  },
});
