function Secret(param) {
  let secret = param

  this.getSecret = () => {
    return secret
  }

  this.setSecret = (newSecret) => {
    return (secret = newSecret)
  }
}

module.exports = Secret

// let logOut = new Secret('hey do yunno my secret')

// console.log(logOut.secret)
// logOut.getSecret()
// console.log(logOut.getSecret())

// console.log(logOut.setSecret('yeah I do know your secret'))
// console.log(logOut.getSecret())
