<template>
  <div>{{ msg }}</div>
</template>
<script>

export default{ 
  data(){
    return{
      msg : 'component msg'
    };
  },
  mounted() {
    console.log(this.msg)
  }
}
</script>