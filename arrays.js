var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  ["element",...array]
}

function destructivelyAddElementToBeginningOfArray(element,array) {
  array.unshift(`element`)
}

function accessElementInArray (array, index) {
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.lenth - 1)
}