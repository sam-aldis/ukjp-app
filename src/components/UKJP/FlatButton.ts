import Vue from "vue";
import * as Theme from "@/plugins/Vuetify";
import * as Template from './Flatbutton.tsx';

@Component({
  template : Template.Template,
})


export default class FlatButton extends Vue {
  constructor() {
    super();
  }
  public new() {
    return Vue.component("ukjp-button",{
      props: {
        text: String,
        bgColor: String
      },
      methods: {
        onClick() {
          this.$emit("click");
        }
      }
    });
  }
</script>
<template>
  <button class="button is-primary" @click="onClick">This is a test</button>
</template>
<style>
button {
  user-select: none;
  box-shadow: -1px -2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: #3e83a8;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>

<style lang="scss" scoped>
button {
}
</style>
