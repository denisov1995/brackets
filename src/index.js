module.exports = function check(str, bracketsConfig) {
  let array = bracketsConfig.map(i => i.join(''))
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
    for (let j = 0; j < array.length; j++) {
      str = str.replace(array[j], '')
    }
  }
  if (str.length === 0) {
    return true
  } else {
    return false
  }
}