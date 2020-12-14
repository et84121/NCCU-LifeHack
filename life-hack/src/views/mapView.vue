<template>
  <b-container fluid style="width: calc(100% - 40px);">
    <b-row class="pt-3">
      <b-col>
        <b-tabs v-model="tabIndex" fill>
          <b-tab title="食物" active></b-tab>
          <b-tab title="育樂"></b-tab>
          <b-tab title="醫療"></b-tab>
        </b-tabs>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      align-v="center"
      style="height:47vh;background-color:gray;"
    >
      <b-col>
        <GmapMap
          :center="{ lat: 24.9871149, lng: 121.5735548 }"
          :zoom="16"
          ref="mapRef"
          map-type-id="terrain"
          style="width: 1800px; height: 400px"
        >
          <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          /> -->
        </GmapMap>
      </b-col>
    </b-row>
    <b-row align-h="center" align-v="center" class="m-3">
      <b-col>
        <b-card>
          <b-row cols="3">
            <b-col v-for="(m, index) in foodsubcat" :key="index">
              <b-button class="m-1" block>{{ m }}</b-button>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <!-- <b-card
          img-src="https://placekitten.com/600/400"
          img-alt="Card image"
          img-right
        >
          <b-card-text class="text-left">
            <li>
              龍角手作茶
            </li>
            <li>
              台北市文山區指南路二段33號
            </li>
            <li>
              11:00 - 22:00(週日只到21:00)
            </li>
            <li>
              $100
            </li>
            <li>
              4.7
            </li>
          </b-card-text>
        </b-card> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import foodData from "../data/food.json";
export default {
  data() {
    return {
      tabIndex: null,
      foodsubcat: Object.keys(foodData)
    };
  }
};
</script>
