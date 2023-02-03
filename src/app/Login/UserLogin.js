import MyKeyboard from '../../components/MyKeyboard'

export default class UserLogin extends MyKeyboard {
  static _template() {
    return {
      ...super._template(),
      Label: {
        text: { text: ' Username:' },
        x: 480,
        y: 130,
      },
    }
  }

  onEnter(event) {
    super.onEnter(event)
    console.log('UserLogin', this._data)
    this.signal('goPassword')
  }

  getUser() {
    return this._data
  }
}
