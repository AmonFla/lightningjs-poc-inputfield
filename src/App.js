import { Lightning } from '@lightningjs/sdk'
import { InputField } from '@lightningjs/ui'
import { Keyboard, KEYBOARD_FORMATS } from '@lightningjs/ui-components'

export default class App extends Lightning.Component {
  static _template() {
    return {
      MyKeyboard: {
        type: Keyboard,
        formats: KEYBOARD_FORMATS.qwerty,
      },
      InputField: {
        type: InputField,
      },
    }
  }
}
