import { Lightning, Utils } from '@lightningjs/sdk'
import UserLogin from './app/Login/UserLogin'
import PasswordLogin from './app/Login/PasswordLogin'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xff000000,
      },
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      UserLogin: {
        type: UserLogin,
        signals: { goPassword: true },
      },
      PasswordLogin: {
        type: PasswordLogin,
        signals: { goMain: true },
        alpha: 0,
      },
      Main: {
        text: { text: 'hola mundo' },
        alpha: 0,
      },
    }
  }

  _setup() {
    this._setState('UserLogin')
  }

  static _states() {
    return [
      class UserLogin extends this {
        $enter() {
          this.tag('UserLogin').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('UserLogin').setSmooth('alpha', 0)
          this._user = this.tag('UserLogin').getUser()
          console.log('user', this._user)
        }
        _getFocused() {
          return this.tag('UserLogin')
        }
        // becouse we have defined 'loaded'
        goPassword() {
          this._setState('PasswordLogin')
        }
      },
      class PasswordLogin extends this {
        $enter() {
          this.tag('PasswordLogin').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('PasswordLogin').setSmooth('alpha', 0)
          this._password = this.tag('PasswordLogin').getPassword()
          console.log('user:password', this._user, this._password)
        }
        _getFocused() {
          return this.tag('PasswordLogin')
        }
        // becouse we have defined 'loaded'
        goMain() {
          this._setState('Main')
        }
      },
      class Main extends this {
        $enter() {
          this.tag('Main').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('Main').setSmooth('alpha', 0)
        }
      },
    ]
  }
}
