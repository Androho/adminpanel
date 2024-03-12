<template>
  <div class="wrap">
    <LoginView v-if="!isLoggedIn" @login-success="loginSuccess" />
    <MainView v-else />
  </div>
</template>

<script>
import {RouterLink, RouterView} from 'vue-router'
import MainView from "./views/MainView.vue";
import LoginView from "./views/LoginView.vue";

export default {
  components: {LoginView, MainView},
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    loginSuccess() {
      this.isLoggedIn = true;
    },
  },
  created() {
    // Перевіряємо, чи є дані про користувача у sessionStorage
    const user = sessionStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
    }
  },
}

</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
}
</style>
