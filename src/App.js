import { InputField } from '@lightningjs/ui'
import { Base, Keyboard, KEYBOARD_FORMATS } from '@lightningjs/ui-components'

// https://rdkcentral.github.io/Lightning-UI-Components/?path=/docs/elements-keyboard--basic

export default class App extends Base {
  static _template() {
    return {
      rect: true,
      color: 0xff142a7c,
      w: 1920,
      h: 1080,
      InputField: {
        type: InputField,
        cursor: {
          rect: true,
          y: 450,
          x: 500,
          w: 400,
          h: 50,
          color: 0xffffffff,
        },
      },
      MyKeyboard: {
        type: Keyboard,
        formats: KEYBOARD_FORMATS.qwerty,
        y: 500,
        x: 500,
      },
    }
  }
}
