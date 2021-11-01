const strictEquals = (firstValue, secondValue) => {
  if (typeof firstValue == typeof secondValue && firstValue == secondValue) {
    return 'true'
  } else {
    return 'false'
  }
}

module.exports = strictEquals
