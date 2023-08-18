<template>
  <div class="container">
    <input type="text" class="form-control" v-model="title" placeholder="Search for Movies, Series & more"
      @keyup.enter="apply()" /> <!-- keyup -> 키를 눌렀다가 뗐을때 -->
    <div class="selects">
      <!-- 
        $data는 script에 있는 데이터와 동일하다
        data(){}안에 들어있는 데이터에 접근가능
       -->
      <select v-for="fil in filters" v-model="$data[fil.name]" :key="fil.name" class="form-select">
        <option value="" v-if="fil.name === 'year'">All Years</option>
        <option v-for="item in fil.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-primary" @click="apply()">Apply</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for (let i = thisYear; i >= 1985; i--) {
              years.push(i)
            }
            return years
          })()
        },
      ]
    };
  },
  methods: {
    async apply() {
      //actions를 동작 시킨다
      this.$store.dispatch('movie/searchMovies', {
        // movie.js payload로 전달
        title: this.title,   
        type: this.type,
        number: this.number,
        year: this.year,
      })
      //Search Movies
      // const resPoster = res.data.Search[0].Poster
      // console.log(resPoster)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;

  >* {
    margin-right: 10px;
    font-size: 15px;

    &:last-child {
      margin-right: 0px;
    }
  }

  .selects {
    display: flex;

    select {
      width: 120px;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>