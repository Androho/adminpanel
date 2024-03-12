<template>
  <div class="container center-align">
    <div class="z-depth-1 grey lighten-4 row"
         style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
      <h3 class="indigo-text center-align">Log In</h3>
      <form class="col s12" @submit.prevent="login">
        <div class='row'>
          <div class='col s12'>
          </div>
        </div>

        <div class='row'>
          <div class='input-field col s12'>
            <input class='validate' type='email' name='email' id="user_mail" v-model="user"/>
            <label for='user_mail'>Enter your email</label>
          </div>
        </div>

        <div class='row'>
          <div class='input-field col s12'>
            <input class='validate' type='password' id="password" v-model="password" required/>
            <label for='password'>Enter your password</label>
          </div>
          <label style='float: right;'>
            <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
          </label>
        </div>

        <br/>
        <center>
          <div class='row'>
            <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
          </div>
        </center>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LoginView",
  data() {
    return {
      user: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.get('http://bijb/edit/api/api.php?users=true');
        const users = response.data;

        const user = users.find(u => u.user_mail === this.user && u.user_password === this.password);
        console.log(user)

        if (user) {
          // Успішна авторизація - зберігаємо дані про користувача у sessionStorage
          sessionStorage.setItem('user', JSON.stringify(user));
          this.$emit('login-success');
        } else {
          // Помилка авторизації
          M.toast({html: 'Неправильний ім\'я користувача або пароль'});
        }
      } catch (error) {
        // Обробка помилки запиту до сервера
        console.error('Помилка запиту до сервера:', error);
        M.toast({html: 'Помилка запиту до сервера'});
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  margin-top: 10%;
  h3{
    text-transform: uppercase;
    margin: 0 auto;
  }
}
.login-form {
  max-width: 300px;
  margin: auto;
  border: blue solid 1px;
  padding: 10px;
  background: aliceblue;
  button{
    margin: 0 auto;
    display: block;
  }
}
.input-field input[type=date]:focus + label,
.input-field input[type=text]:focus + label,
.input-field input[type=email]:focus + label,
.input-field input[type=password]:focus + label {
  color: #e91e63;
}

.input-field input[type=date]:focus,
.input-field input[type=text]:focus,
.input-field input[type=email]:focus,
.input-field input[type=password]:focus {
  border-bottom: 2px solid #e91e63;
  box-shadow: none;
}
</style>