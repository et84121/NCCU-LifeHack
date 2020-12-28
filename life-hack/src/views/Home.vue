<template>
  <div>
    <b-container class="bg-dark" fluid style="position: absolute;left: 0px;">
      <b-row align-h="center" align-v="center" style="height: 100vh">
        <b-col>
          <router-link to="/">
            <h1 class="mainTitle">NCCU LifeHack</h1>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid style="position: absolute;left: 0px;">
      <b-row align-h="center" align-v="center" style="height: 50vh">
        <b-col>
          <router-link to="/map/food">
            <b-img class="m-3" src="../assets/food.png" fluid width="200px" />
            <h2 class="navText">食</h2>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/move">
            <b-img class="m-3" src="../assets/bus.png" fluid width="200px" />
            <h2 class="navText">行</h2>
          </router-link>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center" style="height: 50vh">
        <b-col>
          <router-link to="/dorm">
            <b-img class="m-3" src="../assets/house.png" fluid width="200px" />
            <h2 class="navText">住宿</h2>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/map/fun">
            <b-img class="m-3" src="../assets/fun.png" fluid width="200px" />
            <h2 class="navText">育樂</h2>
          </router-link>
        </b-col>
        <b-col>
          <router-link to="/map/medic">
            <b-img class="m-3" src="../assets/medic.svg" fluid width="200px" />
            <h2 class="navText">醫療</h2>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import icon from "../components/main_icon";

export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.mainTitle {
  font-weight: bold;
  font-size: 80px;
  color: #4bc6b9;
  text-shadow: white 3px 3px, rgb(160, 160, 160) 6px 6px;
}

.navText {
  color: #fdffff;
  font-size: 45px;
  text-shadow: rgb(92, 92, 92) 3px 3px 0px;
}

a.router-link-active {
  text-decoration: none;
}
</style>
