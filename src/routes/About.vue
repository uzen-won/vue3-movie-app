<template>
 <h1>About!</h1>
</template>

<script>
export default {
  computed: {
    image() { 
      return this.$store.state.about.image
    },
    name() { 
      return this.$store.state.about.name
    },
    email() {
      return this.$store.state.about.email
    },
    blog() {
      return this.$store.state.about.blog
    },
    phone() {
      return this.$store.state.about.phone
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
  }
}


</style>