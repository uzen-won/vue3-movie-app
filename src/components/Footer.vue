<template>
  <footer>
    <Logo />
    <a href="https://github.com/uzen-won/vue3-Study" target="_blank">copyright(c){{ new Date().getFullYear() }}All rights reserved</a>
  </footer>
</template>
<script>
import Logo from "~/components/Logo"
export default{ 
  components: {
    Logo
  },
  data(){
    return{

    };
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}

</style>