import movieStore from "~/store/movie"

describe('store/movie.js', () => { 
  let store
  beforeEach(() => { 
    store = _cloneDeep(movieStore)
    store.state = store.state()
    store.commit = (name, payload) => { 
      store.mutations[name](store.state, payload)
    }
    store.dispatch = (name, payload) => { 
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch
      }
      return store.actions[name](context, payload)
    }
  })

  test('영화 데이터를 초기화합니다', () => { 
    store.commit('updateState', {
      movies: [],
      message: '',
      loading: true
    })
    //store.mutations.updateState(store.state, {})
    store.dispatch('searchMovies', {})
  })

})