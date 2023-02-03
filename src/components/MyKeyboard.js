import { Colors, Lightning } from '@lightningjs/sdk'
import { InputField, Keyboard } from '@lightningjs/ui'
import { keyboardConfig } from './KeyboardConfig'

export default class MyKeyboard extends Lightning.Component {
  static _template() {
    return {
      ...super._template(),
      Content: {
        InputFieldWrapper: {
          x: 480,
          y: 230,
          rect: true,
          h: 90,
          w: 960,
          InputField: { x: 20, y: 20, type: InputField },
        },
        Keyboard: {
          y: 380,
          w: 1920,
          type: Keyboard,
          config: keyboardConfig,
          currentLayout: 'abc',
          maxCharacters: 24,
          signals: { onEnter: true },
        },
      },
    }
  }

  _setup() {
    const inputField = this.tag('InputField')
    this.tag('Keyboard').inputField(inputField)
  }

  onEnter(event) {
    this._data = event.input
  }

  _active() {
    super._active()
    this.tag('InputFieldWrapper').color = Colors('red').get()
  }

  _getFocused() {
    return this.tag('Keyboard')
  }

  static set data(str) {
    this.data = str
  }

  static get data() {
    return this._data
  }

  $getData() {
    return this._data
  }
}
