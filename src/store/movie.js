import axios from "axios";
import _uniqBy from "lodash/uniqBy";

const _defaultMessage = "Search fot the movie title!"

export default {
  // module!
  namespaced: true,
  // data!
  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {},
  }),
  // computed!
  getters: {},
  //methods!
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
        //state.message = payload.message;
      });
    },
    resetMovies(state) {
      state.movies = [];
      state.message = _defaultMessage;
      state.loading = false
    },
  },
  // 비동기
  actions: {
    async searchMovies({ state, commit }, payload) {
      commit("updateState", {
        message: "",
      });
      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1,
        });
        const { Search, totalResults } = res.data;

        commit("updateState", {
          // _uniqBy(배열 , '속성의이름')    속성의 이름으로 고유화 된 배열 데이터가 반환됨
          movies: _uniqBy(Search, "imdbID"),
        });

        console.log(res);
        console.log(`totalResults: ${totalResults}`); //320
        console.log(`typeof totalResults: ${typeof totalResults}`); // string

        const total = parseInt(totalResults, 10);
        const pageLength = Math.ceil(total / 10);
        console.log(pageLength);

        //추가요청
        if (pageLength > 1) {
          for (let page = 2; page <= pageLength; page++) {
            if (page > payload.number / 10) break;
            const res = await _fetchMovie({
              ...payload,
              page,
            });
            const { Search } = res.data;
            //commit 메소드실행 updateState라는 변이 메소드 실행
            commit("updateState", {
              // ...전개연산자
              movies: [...state.movies, ..._uniqBy(Search, "imdbID")],
            });
          }
        }
      } catch (message) {
        commit("updateState", {
          movies: [],
          message,
        });
      }
    },
    async searchMovieWithId({ state, commit }, payload) {
      if (state.loading) return;

      commit("updateState", {
        theMovie: {},
        loading: true,
      });

      try {
        const res = await _fetchMovie(payload);
        console.log(res.data);
        commit("updateState", {
          theMovie: res.data,
        });
      } catch (error) {
        commit("updateState", {
          theMovie: {},
        });
      } finally {
        commit("updateState", {
          loading: false,
        });
      }
    },
  },
};

function _fetchMovie(payload) {
  const { title, type, year, page, id } = payload;
  const OMDB_API_KEY = "7035c60c";
  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.Error) {
          reject(res.data.Error);
        }
        resolve(res);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
