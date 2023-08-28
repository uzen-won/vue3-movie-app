<template>
  <div>Child: {{ msg }}</div>
</template>
<script>

export default{ 
  components:{},
  data(){
    return{
      msg: {
        type: String,
        default : ''
      }
    };
  },
  methods:{}
}
</script>