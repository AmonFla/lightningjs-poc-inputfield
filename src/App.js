import { Lightning } from '@lightningjs/sdk'
import { InputField, Keyboard } from '@lightningjs/ui'
import { myKeyboardConfig } from './Libs/KeyboardDefinition'

export default class App extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      color: 0xff142a7c,
      w: 1920,
      h: 1080,
      MyKeyboard: {
        type: Keyboard,
        config: myKeyboardConfig,
        currentLayout: 'ABC',
        y: 500,
        x: 500,
        signals: { onInputChanged: true },
      },
      MyInputField: {
        type: InputField,
        cursorVisible: true,
        autoHideCursor: false,
        inputText: { text: 'Username', fontFace: 'Regular', textColor: 0xffffffff },
        cursor: {
          y: 400,
          x: 500,
          w: 2,
          h: 40,
          color: 0xffffffff,
        },
      },
    }
  }

  _init() {
    const inputField = this.tag('InputField')
    this.tag('MyKeyboard').inputField(inputField)
  }

  onInputChanged(inputData) {
    console.log(inputData)
  }
}
