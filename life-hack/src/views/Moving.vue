<template>
  <b-container>
    <b-breadcrumb
      class="my-2"
      :items="[
        { text: '首頁', to: { name: 'Home' } },
        { text: '交通', to: { name: 'Move' }, active: true }
      ]"
    ></b-breadcrumb>
    <b-row>
      <b-col> </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style></style>
