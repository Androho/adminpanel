<template>
  <ComponentHeader/>
  <ComponentSidenav/>
  <RouterView/>
</template>

<script>

import {useRouter} from "vue-router";
import ComponentHeader from "../components/ComponentHeader.vue";
import ComponentSidenav from "../components/ComponentSidenav.vue";

export default {
  name: "MainView",
  components: {ComponentSidenav, ComponentHeader},
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  // data: () => ({
  //   dropdown: null,
  //   datetime: '',
  //   date: '',
  //   username: ''
  // }),
  mounted() {

  },
  methods: {

    // logout() {
    //   // Очищаємо дані про користувача у sessionStorage
    //   sessionStorage.removeItem('user');
    //   this.isLoggedIn = false;
    //   this.router.push('/login')
    // },
  },
}
</script>

<style scoped lang="scss">
main {
  margin: 0 auto;
  height: 100%;
}
</style>