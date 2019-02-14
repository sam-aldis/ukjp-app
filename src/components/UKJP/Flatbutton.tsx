export default class Template {
  public static Template() {
    return `
            <component>
            <button @click="onClick()" class="btn flat">{{text}}</button>
            </component>
            `;
  }
}
