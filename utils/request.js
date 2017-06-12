import base from '../assets/plugins/request'

class request extends base {
  constructor() {
    super()
    this.$$prefix = ''
    this.$$path = {
      signUp: 'client/sign'
    }
  }
  // 登陆
  signUp(params) {
    return this.postRequest(this.$$path.signUp, params)
  }
}

export default request