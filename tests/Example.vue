<template>
  <div>{{ msg }}</div>
</template>
<script>

export default{ 
  data(){
    return{
      msg : 'test_hello!'
    };
  },
  mounted() {
    console.log(this.msg)
  }
}
</script>