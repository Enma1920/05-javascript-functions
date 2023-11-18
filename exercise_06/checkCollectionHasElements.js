/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Get length of a collection and check whether it is empty or not
 *
 * @param {array} collection
 * @returns boolean
 */

function checkCollectionHasElements(collection) {
  const isEmpty = collection.length == 0 ? true : false;
  return isEmpty;
}

export default checkCollectionHasElements;
