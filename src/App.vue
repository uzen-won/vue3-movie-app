<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: { 
    Header,
    Footer
  },
  
}
</script>

<style lang="scss">
  @import '~/scss/main.scss';
  body {
    padding-bottom: 100px;
    font-weight: 500;
  }
</style>