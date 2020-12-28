<template>
  <b-container fluid style="width: calc(100% - 40px);">
    <b-breadcrumb
      class="my-1"
      :items="[
        { text: '首頁', to: { name: 'Home' } },
        { text: '地圖', to: { name: 'Map' }, active: true }
      ]"
    ></b-breadcrumb>
    <b-row class="mt-1">
      <b-col>
        <b-tabs v-model="tabIndex" fill>
          <b-tab
            title="食物"
            @click="$router.push({ name: 'Map', params: { type: 'food' } })"
          ></b-tab>
          <b-tab
            title="育樂"
            @click="$router.push({ name: 'Map', params: { type: 'fun' } })"
          ></b-tab>
          <b-tab
            title="醫療"
            @click="$router.push({ name: 'Map', params: { type: 'medic' } })"
          ></b-tab>
        </b-tabs>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      align-v="center"
      style="height:40vh;background-color:gray;"
    >
      <b-col>
        <GmapMap
          :center="center"
          :zoom="16"
          ref="mapRef"
          mapId="59738f92abbb4752"
          style="width: 100%; height: calc(40vh - 30px);"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          >
          </gmap-info-window>
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.location"
            :clickable="true"
            :draggable="false"
            @click="toggleInfoWindow(m, i)"
          />
        </GmapMap>
      </b-col>
    </b-row>

    <!-- 食物 -->
    <b-row align-h="center" align-v="center" v-if="tabIndex === 0">
      <!-- 食物類別 -->
      <b-col cols="4">
        <b-card class="my-2 bg-dark">
          <b-row align-h="center" align-v="center" cols="3">
            <b-col v-for="(m, index) in foodsubcats" :key="index">
              <b-button class="my-2 pt-3" block @click="foodsubcat = m.name">
                <b-img class="mt-1" :src="m.pic" block center width="80vw" />
                <p class="mt-1" style="font-size: 1.5rem;">{{ m.name }}</p>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- 商店選擇 -->
      <b-col cols="2">
        <b-card class=" bg-info">
          <b-list-group v-if="foodsubcat">
            <b-list-group-item
              button
              @click="tirgger(shop)"
              v-for="(shop, index) in foodData[foodsubcat]"
              :key="index"
            >
              {{ shop["店名"] }}
            </b-list-group-item>
          </b-list-group>
          <b-card-text v-else>
            請先選擇類別
          </b-card-text>
        </b-card>
      </b-col>

      <!-- 商店資料展示 -->
      <b-col>
        <b-card class=" bg-info">
          <b-card-text class="text-left" v-if="shopinfo.店名">
            <li
              v-for="(i, index) in Object.keys(shopinfo).filter(
                key => key != 'location'
              )"
              :key="index"
            >
              {{ i }} : {{ shopinfo[i] }}
            </li>
          </b-card-text>
          <b-card-text v-else>
            請先選擇商店
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- 玩樂 -->
    <b-row class="mt-3" align-h="center" align-v="center" v-if="tabIndex === 1">
      <!-- 商店選擇 -->
      <b-col cols="2">
        <b-card class="pb-2 bg-info" style=" height:40vh; overflow:auto;">
          <b-list-group>
            <b-list-group-item
              button
              @click="tirgger(shop)"
              v-for="(shop, index) in funData"
              :key="index"
            >
              {{ shop["店名"] }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <!-- 商店資料展示 -->
      <b-col>
        <b-card class=" bg-info">
          <b-card-text class="text-left" v-if="shopinfo.店名">
            <li
              v-for="(i, index) in Object.keys(shopinfo).filter(
                key => key != 'location'
              )"
              :key="index"
            >
              {{ i }} : {{ shopinfo[i] }}
            </li>
          </b-card-text>
          <b-card-text v-else>
            請先選擇商店
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <!-- 醫療 -->
    <b-row class="mt-3" align-h="center" align-v="center" v-if="tabIndex === 2">
      <!-- 商店選擇 -->
      <b-col cols="2">
        <b-card class="pb-2 bg-info">
          <b-list-group>
            <b-list-group-item
              button
              @click="tirgger(shop)"
              v-for="(shop, index) in medicData"
              :key="index"
            >
              {{ shop["店名"] }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <!-- 商店資料展示 -->
      <b-col>
        <b-card class=" bg-info">
          <b-card-text class="text-left" v-if="shopinfo.店名">
            <li
              v-for="(i, index) in Object.keys(shopinfo).filter(
                key => key != 'location'
              )"
              :key="index"
            >
              {{ i }} : {{ shopinfo[i] }}
            </li>
          </b-card-text>
          <b-card-text v-else>
            請先選擇商店
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import raw_foodData from "../data/food.json";
import raw_funData from "../data/fun.json";
import raw_medic from "../data/medic.json";
export default {
  props: {
    type: String
  },
  watch: {
    tabIndex(newVal) {
      if (newVal === 0) {
        this.markers = Object.keys(raw_foodData)
          .map(key => raw_foodData[key])
          .flat();
      } else if (newVal === 1) {
        this.markers = raw_funData;
      } else if (newVal === 2) {
        this.markers = raw_medic;
      }
    }
  },
  data() {
    return {
      foodData: raw_foodData,
      funData: raw_funData,
      medicData: raw_medic,
      center: { lat: 24.9871149, lng: 121.5735548 },
      tabIndex: null,
      markers: Object.keys(raw_foodData)
        .map(key => raw_foodData[key])
        .flat(),
      foodsubcat: null,
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      shopinfo: {}
    };
  },
  computed: {
    foodsubcats() {
      return Object.keys(raw_foodData).map(element => {
        if (element === "雷店") {
          return { name: element, pic: require("../assets/bad.png") };
        }
        if (element === "宵夜") {
          return { name: element, pic: require("../assets/cupnoodle.png") };
        }
        if (element === "點心") {
          return { name: element, pic: require("../assets/snack.png") };
        }
        if (element === "異國料理") {
          return { name: element, pic: require("../assets/hamburger.png") };
        }
        if (element === "中式料理") {
          return { name: element, pic: require("../assets/chinesefood.png") };
        }
        if (element === "早餐+飲料類") {
          return { name: element, pic: require("../assets/breakfest.png") };
        }
      });
    }
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.center = marker.location;
      this.infoWindowPos = marker.location;
      this.infoOptions.content = marker["店名"] + "<br />" + marker["地址"];

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    tirgger(shop) {
      this.center = shop.location;
      this.infoWinOpen = true;
      this.infoWindowPos = shop.location;
      this.infoOptions.content = shop["店名"] + "<br />" + shop["地址"];
      this.shopinfo = shop;
    }
  },
  updated() {
    switch (this.type) {
      case "food":
        this.tabIndex = 0;
        break;
      case "fun":
        this.tabIndex = 1;
        break;
      case "medic":
        this.tabIndex = 2;
        break;
      default:
        break;
    }
  }
};
</script>
