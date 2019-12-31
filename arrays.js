var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
  [element, ...array] // non destructive
}

function addElementToBeginningOfArray(array, element)
{
  array.unshift(element)
}