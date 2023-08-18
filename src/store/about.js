export default {
  namespaced: true, // 모듈이 될 수 있도록
  state: () => ({
    // 상태 정의
    name: "won",
    email: "won@uzen.net",
    blog: "https://github.com/uzen-won/vue3-Study",
    phone: "+82-10-1234-5678",
    image: "~/assets/logo.png",
    //image: "https://heropy.blog/css/images/logo/png",
  }),
};