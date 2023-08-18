<template>
  <RouterLink to="/" class="logo">
    <span>OMDbAPI</span>.COM    
  </RouterLink> 
</template>

<style lang="scss" scoped>
@import "~/scss/main";
  .logo {
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $black;
    text-decoration: none;
    span {
      color: $primary;
    }
    &:hover {
      color: $black;
    }
  }
</style>