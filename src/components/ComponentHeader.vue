<template>
  <div class="navbar-fixed">
    <nav class="indigo accent-2">
      <div class="nav-wrapper">
        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <a href="/" class="brand-logo"><img src="../assets/adminLogo.svg"></a>
        <div class="nav__right right">
          <span class="">{{ date }}</span>
          <ul class="right hide-on-small-and-down">
            <li>
              <a
                  class="dropdown-trigger white-text upper"
                  href="#"
                  data-target="dropdown"
                  ref="drop"
              >
                {{ username }}
                <i class="material-icons right">arrow_drop_down</i>
              </a>

              <ul id='dropdown' class='dropdown-content'>
                <li>
                  <router-link to="/profile" class="indigo-text accent-2">
                    <i class="material-icons">account_circle</i>Profile
                  </router-link>
                </li>
                <li class="divider" tabindex="-1"></li>
                <li>
                  <a href="#" class="indigo-text accent-2" @click="logout">
                    <i class="material-icons">assignment_return</i>LogOut
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "ComponentHeader",
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  data: () => ({
    dropdown: null,
    datetime: '',
    date: '',
    username: ''
  }),
  methods: {
    logout() {
      // Очищаємо дані про користувача у sessionStorage
      sessionStorage.removeItem('user');
      this.isLoggedIn = false;
      this.router.push('/login')
    },
  },
  mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.drop, {
      constrainWidth: true
    });
    this.datetime = new Date()
    this.date = this.datetime.toDateString()
    const user = JSON.parse(sessionStorage.getItem('user'));
    this.username = user.user_name
    console.log(this.username)
  },
}
</script>

<style scoped lang="scss">
nav {
  max-width: 1280px;

  img {
    margin-top: 7px
  }

  a.sidenav-trigger {
    display: flex;
  }
}

.upper {
  text-transform: uppercase;
}
</style>