<template>
  <header class="home-header">
    <div>
      <img src="../assets/profile-photo.svg" alt="Profile Photo" class="profile-photo" />
      <span>Kamal</span>
    </div>

    <div>
      <img src="../assets/eye-icon.png" alt="Hide Details Icon" />
      <img src="../assets/notification-icon.png" alt="Notification Icon" />
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
};
</script>

<style>
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.home-header .profile-photo {
  background-color: #f0f0f0;
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
.home-header div span {
  font-size: 1.7em;
  font-weight: bold;
  color: #333;
}
.home-header div {
  display: flex;
  align-items: center;
}
.home-header img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.home-header img:last-child {
  margin-right: 0;
}
.home-header img {
  cursor: pointer;
}
.home-header img:hover {
  opacity: 0.8;
}
.home-header img:active {
  opacity: 0.6;
}
</style>
