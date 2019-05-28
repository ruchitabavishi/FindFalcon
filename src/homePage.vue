<template>
  <div>
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div class="row">
          <div class="col-sm-12">
            <h2>Finding Falcon!</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h3>Select the Plans You Want to Search in:</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            Destination 1:
            <div>
              <b-form-group id="destination1" v-if="planetListDestination1">
                <b-form-select
                  v-model="destination1"
                  :options="planetListDestination1"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Push"
                >
                  <template slot="selection" slot-scope="{ values, search, isOpen }">
                    <span
                      v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span>
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
            <div v-show="showVehicle1">
              <b-form-group v-if="vehicleListDestination1 && showVehicle1">
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="selected1"
                  :options="vehicleListDestination1"
                  name="radio-options1"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3">
            Destination 2:
            <div>
              <b-form-group id="destination2" v-if="planetListDestination2">
                <b-form-select
                  v-model="destination2"
                  :disabled="disableDestination2"
                  :options="planetListDestination2"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Push"
                >
                  <template slot="selection" slot-scope="{ values, search, isOpen }">
                    <span
                      v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span>
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
            <div>
              <b-form-group v-if="vehicleListDestination2  && showVehicle2">
                <b-form-radio-group
                  id="radio-group-2"
                  v-model="selected2"
                  :options="vehicleListDestination2"
                  name="radio-options2"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3">
            Destination 3:
            <div>
              <b-form-group id="destination3" v-if="planetListDestination3">
                <b-form-select
                  v-model="destination3"
                  :disabled="disableDestination3"
                  :options="planetListDestination3"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Push"
                >
                  <template slot="selection" slot-scope="{ values, search, isOpen }">
                    <span
                      v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span>
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
            <div v-show="showVehicle3">
              <b-form-group v-if="vehicleListDestination3  && showVehicle3">
                <b-form-radio-group
                  id="radio-group-3"
                  :key="forcerender"
                  v-model="selected3"
                  :options="vehicleListDestination3"
                  name="radio-options3"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
          <div class="col-md-3">
            Destination 4:
            <div>
              <b-form-group id="destination4" v-if="planetListDestination4">
                <b-form-select
                  v-model="destination4"
                  :disabled="disableDestination4"
                  :options="planetListDestination4"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Push"
                >
                  <template slot="selection" slot-scope="{ values, search, isOpen }">
                    <span
                      v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} options selected</span>
                  </template>
                </b-form-select>
              </b-form-group>
            </div>
            <div>
              <b-form-group v-if="vehicleListDestination4  && showVehicle4">
                <b-form-radio-group
                  id="radio-group-4"
                  v-model="selected4"
                  :key="forcerender"
                  :options="vehicleListDestination4"
                  name="radio-options4"
                  stacked
                ></b-form-radio-group>
              </b-form-group>
            </div>
          </div>
        </div>

        <div class="row">
          <b-button variant="primary" @click="findFalcon" :disabled="abc()">FIND FSLCON</b-button>
        </div>
      </div>
      <div class="col-sm-2" style="margin-top:90px; margin-left:20px">
        <h5>Time Taken : {{timeTaken}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import findFalcon from "./store/findFalcon";
export default {
  data() {
    return {
      finalResponse: null,
      planetList: null,
      timeTaken: 0,
      token: null,
      forcerender: false,
      showVehicle1: false,
      showVehicle2: false,
      showVehicle3: false,
      showVehicle4: false,
      vehicleListDestination1: null,
      vehicleListDestination2: null,
      vehicleListDestination3: null,
      vehicleListDestination4: null,
      disableDestination2: true,
      disableDestination3: true,
      disableDestination4: true,
      vehicleList: null,
      selected1: null,
      selected2: null,
      selected3: null,
      selected4: null,
      destination1: null,
      destination2: null,
      destination3: null,
      destination4: null,
      planetListDestination1: null,
      planetListDestination2: null,
      planetListDestination3: null,
      planetListDestination4: null
    };
  },
  methods: {
    findFalcon() {
      findFalcon
        .find({
          token: this.token,
          planet_names: [
            this.destination1,
            this.destination2,
            this.destination3,
            this.destination4
          ],
          vehicle_names: [
            this.selected1.substring(0, this.selected1.length - 3),
            this.selected2.substring(0, this.selected2.length - 3),
            this.selected3.substring(0, this.selected3.length - 3),
            this.selected4.substring(0, this.selected4.length - 3)
          ]
        })
        .then(res => {
          console.log(res.data);
          this.finalResponse = res.data;
          this.$root.$emit("success", {
            finalResponse: this.finalResponse,
            time: this.timeTaken
          });
        });
    },
    abc() {
      if (
        this.destination1 &&
        this.destination2 &&
        this.destination3 &&
        this.destination4 &&
        this.selected1 &&
        this.selected2 &&
        this.selected3 &&
        this.selected4
      )
        return false;
      else return true;
    }
  },
  mounted() {
    findFalcon
      .getPlanets()
      .then(res => {
        this.planetList = res.data;
        this.planetListDestination1 = res.data.map(v => v.name);
        this.planetListDestination2 = res.data.map(v => v.name);
        this.planetListDestination3 = res.data.map(v => v.name);
        this.planetListDestination4 = res.data.map(v => v.name);
      })
      .catch(error => {});
    let con = this;
    findFalcon
      .getVehicles()
      .then(res => {
        // console.log(res);
        con.vehicleListDestination1 = res.data;
        con.vehicleListDestination1.forEach(function(element) {
          element.disabled = false;
          element.text = element.name + "(" + element.total_no + ")";
        });

        con.vehicleListDestination3 = JSON.parse(
          JSON.stringify(con.vehicleListDestination1)
        );
        con.vehicleListDestination4 = JSON.parse(
          JSON.stringify(con.vehicleListDestination1)
        );
      })
      .catch(error => {});
    findFalcon.getToken().then(data => {
      this.token = data.data.token;
    });
  },
  watch: {
    selected1(val) {
      this.vehicleListDestination2 = JSON.parse(
        JSON.stringify(this.vehicleListDestination1)
      );
      let obj = this.vehicleListDestination2.find(v => v.text === val);
      let planet = this.planetList.find(v => v.name == this.destination1);
      this.timeTaken += planet.distance / obj.speed;
      obj.total_no = obj.total_no - 1;
      obj.text = obj.name + "(" + obj.total_no + ")";
      if (obj.total_no == 0) {
        obj.disabled = true;
      }
      this.showVehicle3 = false;
      this.destination3 = null;
      this.destination4 = null;
      this.disableDestination2 = false;
      this.disableDestination3 = true;
      this.disableDestination4 = true;
      this.forcerender = true;
      this.showVehicle4 = false;
    },
    selected2(val) {
      this.vehicleListDestination3 = JSON.parse(
        JSON.stringify(this.vehicleListDestination2)
      );
      let obj = this.vehicleListDestination3.find(v => v.text === val);
      let planet = this.planetList.find(v => v.name == this.destination2);
      this.timeTaken += planet.distance / obj.speed;
      obj.total_no = obj.total_no - 1;
      obj.text = obj.name + "(" + obj.total_no + ")";
      if (obj.total_no == 0) {
        obj.disabled = true;
      }
      this.destination4 = null;
      this.disableDestination2 = false;
      this.disableDestination3 = false;
      this.disableDestination4 = true;
      this.showVehicle4 = false;
      this.forcerender = true;
    },
    selected3(val) {
      this.vehicleListDestination4 = JSON.parse(
        JSON.stringify(this.vehicleListDestination3)
      );
      let obj = this.vehicleListDestination4.find(v => v.text === val);
      let planet = this.planetList.find(v => v.name == this.destination3);
      this.timeTaken += planet.distance / obj.speed;
      obj.total_no = obj.total_no - 1;
      obj.text = obj.name + "(" + obj.total_no + ")";
      if (obj.total_no == 0) {
        obj.disabled = true;
      }
      this.disableDestination2 = false;
      this.disableDestination3 = false;
      this.disableDestination4 = false;
    },
    selected4(val) {
      let obj = this.vehicleListDestination4.find(v => v.text === val);
      let planet = this.planetList.find(v => v.name == this.destination4);
      this.timeTaken += planet.distance / obj.speed;
    },
    destination1(val) {
      if (val) {
        this.planetListDestination2 = this.planetListDestination1.slice();
        let index = this.planetListDestination2.indexOf(val);
        if (index > -1) {
          this.planetListDestination2.splice(index, 1);
        }
        let planetDistance = this.planetList.find(v => v.name == val).distance;
        for (let i = 0; i < this.vehicleListDestination1.length; i++) {
          if (planetDistance > this.vehicleListDestination1[i].max_distance) {
            this.vehicleListDestination1[i].disabled = true;
          }
        }
      }
      this.showVehicle1 = true;
      this.showVehicle2 = false;
      this.showVehicle3 = false;
      this.showVehicle4 = false;
    },
    destination2(val) {
      if (val) {
        this.planetListDestination3 = this.planetListDestination2.slice();
        let index = this.planetListDestination3.indexOf(val);
        if (index > -1) {
          this.planetListDestination3.splice(index, 1);
        }
        let planetDistance = this.planetList.find(v => v.name == val).distance;
        for (let i = 0; i < this.vehicleListDestination2.length; i++) {
          if (planetDistance > this.vehicleListDestination2[i].max_distance) {
            this.vehicleListDestination2[i].disabled = true;
          }
        }
      }

      this.showVehicle1 = true;
      this.showVehicle2 = true;
      this.showVehicle3 = false;
      this.showVehicle4 = false;
    },
    destination3(val) {
      if (val) {
        this.planetListDestination4 = this.planetListDestination3.slice();
        let index = this.planetListDestination4.indexOf(val);
        if (index > -1) {
          this.planetListDestination4.splice(index, 1);
        }
        let planetDistance = this.planetList.find(v => v.name == val).distance;
        for (let i = 0; i < this.vehicleListDestination3.length; i++) {
          if (planetDistance > this.vehicleListDestination3[i].max_distance) {
            this.vehicleListDestination3[i].disabled = true;
          }
        }
      }

      this.showVehicle1 = true;
      this.showVehicle2 = true;
      this.showVehicle3 = true;
      this.showVehicle4 = false;
    },
    destination4(val) {
      this.showVehicle1 = true;
      this.showVehicle2 = true;
      this.showVehicle3 = true;
      if (val) {
        let planetDistance = this.planetList.find(v => v.name == val).distance;
        for (let i = 0; i < this.vehicleListDestination4.length; i++) {
          if (planetDistance > this.vehicleListDestination4[i].max_distance) {
            this.vehicleListDestination4[i].disabled = true;
          }
        }
      }
      this.showVehicle4 = true;
    }
  }
};
</script>
<style>
.col-sm-6 {
  padding-right: 10px;
  padding-left: 5px;
}
</style>
