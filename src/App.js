import { Lightning } from '@lightningjs/sdk'
import { InputField, Keyboard, Key } from '@lightningjs/ui'

export default class App extends Lightning.Component {
  static _template() {
    const myKeyboardConfig = {
      layouts: {
        ABC: [
          ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
          ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
          ['u', 'v', 'w', 'x', 'y', 'z'],
        ],
        123: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']],
      },
      buttonTypes: {
        default: {
          type: Key,
        },
      },
    }
    return {
      rect: true,
      color: 0xff142a7c,
      w: 1920,
      h: 1080,
      MyInputField: { type: InputField, description: 'hola' },
      MyKeyboard: {
        type: Keyboard,
        config: myKeyboardConfig,
        currentLayout: 'ABC',
        y: 200,
        signals: { onInputChanged: true },
      },
    }
  }

  _init() {
    const inputField = this.tag('InputField')
    this.tag('MyKeyboard').inputField(inputField)
  }
}
