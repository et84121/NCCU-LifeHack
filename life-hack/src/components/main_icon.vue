<template>
  <div style="background-color:white" :style="{ width: width, height: height }">
    <b-img :src="src" fluid blank blank-color="white" />
  </div>
</template>

<script>
export default {
  props: {
    height: Number,
    width: Number,
    src: String
  }
};
</script>

<style></style>
