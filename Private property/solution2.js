function Secret(param) {
  return (this.mySecret = param)
}

Secret.prototype.getSecret = function () {
  return this.mySecret
}

Secret.prototype.setSecret = function (newParam) {
  return (this.mySecret = newParam)
}
module.exports = Secret

// let littleSecret = new Secret('mytinny winny secret')
// // console.log(littleSecret)
// console.log(littleSecret.getSecret())
// console.log(littleSecret.setSecret('Updated Secret'))
// console.log(littleSecret.getSecret(), "updated")
