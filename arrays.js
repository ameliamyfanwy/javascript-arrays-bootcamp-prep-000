var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function addElementToEndOfArray(array,element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  return array.push(element)
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  return array.unshift(element)
}

function accessElementInArray (array, index) {
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array1 = array.shift()
  return array1
}

function removeElementFromBeginningOfArray(array) {
  return array = array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array = array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.lenth - 1)
}