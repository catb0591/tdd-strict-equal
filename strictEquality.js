const strictEquals = (firstValue, secondValue) => {
  if (typeof firstValue == typeof secondValue) {
    return 'true'
  } else {
    return 'false'
  }
}

module.exports = strictEquals
