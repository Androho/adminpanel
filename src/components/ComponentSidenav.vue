<template>
  <ul id="slide-out" class="sidenav" ref="sidenav">
    <li>
      <div class="user-view">
        <div class="background">
          <img src="">
        </div>
        <a href="#user"><img class="circle" src=""></a>
        <a href="#name"><span class="white-text name">John Doe</span></a>
        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div>
    </li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li>
      <div class="divider"></div>
    </li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
</template>

<script>
export default {
  name: "ComponentSidenav",
  mounted() {
    const elems = this.$refs.sidenav;
    M.Sidenav.init(elems);
  }
}
</script>

<style scoped lang="scss">

</style>