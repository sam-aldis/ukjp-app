/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import UKJPButton from '../components/UKJPButton.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { UKJPButton },
    template: '<ukjp-button @click="action">Hello Button</ukjp-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { UKJPButton },
    render() {
      return <ukjp-button onClick={this.action}>With JSX</ukjp-button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: {  },
    template: '<ukjp-button @click="action">😀 😎 👍 💯</ukjp-button>',
    methods: { action: action('clicked') }
  }))
