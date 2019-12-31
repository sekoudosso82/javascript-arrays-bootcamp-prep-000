var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
  var result = [element, ...array] // non destructive
}

