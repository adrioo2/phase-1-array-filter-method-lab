// Code your solution here
const findMatching = (names, string) => {
  return names.filter(names => names.toUpperCase() === string.toUpperCase())
}
const fuzzyMatch = (array, string) => {
  return array.filter(array => array.charAt(0) === string.charAt(0))
}
function matchName(array, string) {
  return array.filter(function (array) { 
    return array.name === string })
}