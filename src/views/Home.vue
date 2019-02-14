<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg">
    <UKJPButton/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FlatButton from "@/components/UKJP/FlatButton.vue"; // @ is an alias to /src

@Component({
  component: {
    FlatButton
  }
})
export default class Home extends Vue {}
</script>
