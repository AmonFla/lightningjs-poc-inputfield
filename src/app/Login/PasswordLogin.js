import MyKeyboard from '../../components/MyKeyboard'

export default class PasswordLogin extends MyKeyboard {
  static _template() {
    return {
      ...super._template(),
      Label: {
        text: { text: ' Password:' },
        x: 480,
        y: 130,
      },
    }
  }

  onEnter(event) {
    super.onEnter(event)
    this.signal('goMain')
  }

  getPassword() {
    return this._data
  }
}
