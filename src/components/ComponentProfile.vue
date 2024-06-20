<template>
  <div class="card profile">
    <h4 class="card-header blue-grey-text center">Profile Details</h4>
    <!-- Account -->
    <div class="card-body center">
      <div class="card-img">
        <div class="card">
          <img src="../assets/user.png" alt="user-avatar" class="" id="uploadedAvatar">
          <div>
            <p>Name: <b>{{ this.user.user_name }}</b></p>
            <p>Role: <b>Admin</b></p>
          </div>
        </div>

      </div>
      <div class="card" style="width: 100%;">
        <div class="card-content">
          <p><strong><b>Адреса:</b></strong> 123 Street, City, Country</p><br>
          <p><strong><b>Меїл:</b></strong> {{ this.user.user_mail }}</p><br>
          <p><strong><b>Освіта:</b></strong> Some University</p><br>
          <p><strong><b>Блок дозволів:</b></strong> Read: {{ this.user.user_read }}, Write: {{ this.user.user_write }},
            Edit: {{ this.user.user_edit }}</p><br>
          <p><strong><b>Роль:</b></strong> Викладач</p><br>
        </div>
        <div class="card-action">
          <a href="#" class="blue-text">Перейти до редагування</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentProfile",
  data() {
    return {
      user: {},
      isAdmin: false
    };
  },
  mounted() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    this.user = user
    if (this.user.user_edit=== 0 || this.user.user_write === 0) {
      this.isAdmin = false
    } else this.isAdmin = true
    console.log(this.isAdmin)
    console.log(user)
  }
}
</script>

<style scoped lang="scss">
.card {
  border-radius: 5px;
  margin: 10px;

  img {
    padding: 10px;
    border-radius: 50%
  }
}

.profile {
  margin: 5px auto;
  width: 95%;
  padding: 10px;
  border-radius: 5px;
  background-color: #bcc7d4;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header {
  justify-content: center;
  margin: 5px auto;
}

.card-img {
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>