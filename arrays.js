var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
  var result = [element, ...array] // non destructive
  return result 
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  var result = [...array, element]
  return result
}

































