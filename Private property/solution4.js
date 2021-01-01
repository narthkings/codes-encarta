function Secret(param) {
  let secret = param

  const getSecret = () => {
    return secret
  }
  const setSecret = (newSecret) => {
    return (secret = newSecret)
  }
  return {
    getSecret,
    setSecret,
  }
}

module.exports = Secret
