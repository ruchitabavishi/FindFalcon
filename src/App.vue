<template>
  <div>
    <div v-if="home">
      <home-page></home-page>
    </div>
    <div v-else>
      <div style="margin-left:180px">
        <h4>{{message1}}</h4>
        <br>
        <div v-if="timeTaken && planetFound">
          <h4>Time Taken: {{timeTaken}}</h4>
          <br>
          <h4>Planet Found : {{planetFound}}</h4>
        </div>
        <b-button variant="primary" @click="startAgain">FIND FSLCON</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import homePage from "./homePage.vue";
export default {
  name: "app",
  data() {
    return {
      message1: null,
      time: null,
      planetFound: null,
      home: true
    };
  },
  components: {
    homePage
  },
  created() {
    this.$root.$on("success", this.findFunction);
  },
  methods: {
    findFunction(val) {
      if (val.finalResponse.status == "success") {
        this.timeTaken = val.time;
        this.planetFound = val.finalResponse.planet_name;
        this.message1 =
          "Success!! Congratulations on Finding Falcon. King Khan is mighty Pleased..";
      } else {
        this.message1 = "Sorry! Couldn't Find the Planet";
      }
      this.home = false;
    },
    startAgain() {
      this.home = true;
    }
  }
};
</script>

