// Code here`

class Secret {
  constructor(param) {
    this.param = param
  }
  getSecret() {
    // console.log(this.param);
    return this.param
  }
  setSecret(arg) {
    this.param = arg
    return this.param
  }
}
// const result = new Secret('our secret')
// result.Secret
// // console.log(result.Secret)
// result.getSecret()
// result.setSecret('hello new secret')
// result.getSecret()
module.exports = Secret
