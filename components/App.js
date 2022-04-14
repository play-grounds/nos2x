import { html, Component } from '../js/preacthtm.js'
import '../js/dior.js'
import Navbar from '../components/Navbar2.js'
import handleMutation from '../js/handlemutation.js'

var title = 'nos2x'

console.log(di.data)


export default class App extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.processMutation = this.processMutation.bind(this)
  }

  async login() {
    console.log('login')
    let publicKey = await window?.nostr?.getPublicKey()

    // workaround for now
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      publicKey = publicKey.split(/(..)/g).filter(i => i).map(i => String.fromCharCode(parseInt(i, 16))).join('')
    }

    di.data.publicKey = publicKey

    if (di.data.publicKey) {
      di.data.loggedIn = true
    }
    di.data = di.data
  }

  async logout() {
    console.log('logout')
    di.data.publicKey = null
    di.data.loggedIn = false
    di.data = di.data
  }

  async componentDidMount() {
    console.log('handle mutations')
    handleMutation('data', this.processMutation)
  }

  processMutation() {
    console.log('process mutation!')
    this.setState({ mutation: true })
  }

  render() {
    return html`
    <${Navbar} title="${title}" />

    <div class="bg-gray-100">
    <div class=" px-10 text-green-600 py-3">
      ${!di.data.loggedIn ?
        html`<a onClick=${this.login}>Login</a>` :
        html`<a onClick=${this.logout}>Logout</a>`
      }

      

      <div>${di.data.publicKey}</div>

      <div class="font-bold">
      <br/>
      <a href="https://github.com/fiatjaf/nos2x#install" target="_blank">Install nos2x!</a>
      </div>


      </div>
    </div>`
  }

}
