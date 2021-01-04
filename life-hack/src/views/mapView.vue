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
      <b-col col cols="12" xl="6">
        <b-card class="my-2 bg-dark">
          <b-row align-h="center" align-v="center" cols="3">
            <b-col
              v-for="(m, index) in foodsubcats"
              :key="index"
              style="min-width:30px;"
            >
              <b-button class="my-2 pt-3" block @click="foodsubcat = m.name">
                <b-img class="mt-1" :src="m.pic" block center width="80vw" />
                <p class="mt-1" style="font-size: 1.5rem;">{{ m.name }}</p>
              </b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <!-- 商店選擇 -->
      <b-col col xl="2">
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
      <b-col col xl="4">
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

      <b-col class="mt-2 text-left">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">
                針對政大附近飲食商家的校內調查
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>
                    <a :href="require('url-loader!../data/food.pdf')"
                      >本次表單</a
                    >
                    回收了146份，99.3%為政⼤學⽣，94.5%為非⽂⼭區常住居⺠（4年以上），填寫表單
                    的有61.6%是男性，38.4%是女性，年齡集中在18到20表單回應圖表。
                    從表單中可以看出最多⼈接受的午餐價格是80～100元的區間，多數同學吃葷，習慣在店內⽤餐。
                    我們分別調查了同學最推薦和最不推薦的早餐、午餐/晚餐和飲料店，以下是研究結果。
                  </p>
                  <ul>
                    <li>
                      推薦早餐店： 1.古早味蛋餅飯糰 2.德合香早餐店 3.⼭的另⼀邊
                    </li>
                    <li>推薦的理由： 1.餐點符合胃⼝ 2.cp值⾼ 3.上菜速度快</li>
                    <li>
                      推薦的午餐/晚餐： 1.坡坡恰恰/⼤汗⿇辣鴨⾎（並列）
                      2.樂⼭食堂
                    </li>
                    <li>推薦的理由： 1.餐點符合胃⼝ 2.cp值⾼ 3.上菜速度快</li>
                    <li>推薦的飲料店： 1.龍⾓⼿作茶 2.50嵐 3.迷客夏</li>
                    <li>
                      <p>推薦的理由： 1.餐點符合胃⼝ 2.cp值⾼ 3.服務態度佳</p>
                    </li>
                    <li>
                      <p>
                        不推薦的早餐店： 1.布朗期優先早餐店 2.德合香早餐店
                        3.⼩貓咪早餐店/無（並列）
                      </p>
                    </li>
                    <li>不推薦的理由： 1.餐點不符胃⼝ 2.cp值低 3.衛⽣不佳</li>
                    <li>
                      不推薦的午餐/晚餐： 1.吉ᰀ家 2.重慶酸辣粉/殺⼈魔王燒臘
                      3.湯饌
                    </li>
                    <li>不推薦的理由： 1.餐點不符胃⼝ 2.cp值低 3.衛⽣不佳</li>
                    <li>不推薦的飲料店是： 1.無 2.cow banana 3.迷客夏</li>
                    <li>不推薦的理由： 1.餐點不符胃⼝ 2.cp值低 3.無</li>
                  </ul>
                  <p>我們發現會讓同學推薦早餐和午餐/晚餐同學的三個點是</p>
                  <ol>
                    <li>餐點符合胃⼝</li>
                    <li>cp值⾼</li>
                    <li>上菜速度快</li>
                  </ol>
                  <p>⽽讓同學不推薦的三個點是</p>
                  <ol>
                    <li>餐點不符胃⼝</li>
                    <li>cp值低</li>
                    <li>衛⽣不佳。</li>
                  </ol>
                  <p>可以發現如果店家衛⽣不佳容易使同學不推薦。</p>
                  <p>讓同學推薦飲料店的三個點是</p>
                  <ol>
                    <li>餐點符合胃⼝</li>
                    <li>cp值⾼</li>
                    <li>服務態度佳</li>
                  </ol>
                  <p>⽽讓同學不推薦的三個點是</p>
                  <ol>
                    <li>餐點不符胃⼝</li>
                    <li>
                      cp值低 從這裡可以發現許多同學對飲料店並沒有特別的喜好。
                    </li>
                  </ol>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>

    <!-- 玩樂 -->
    <b-row class="mt-3" align-h="center" align-v="center" v-if="tabIndex === 1">
      <!-- 商店選擇 -->
      <b-col cols="12" xl="4" class="my-2">
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
      <b-col xl="4">
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
      <b-col cols="12" xl="4" class="my-2">
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
