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
  const hasElements = collection.length !== 0;
  return hasElements;
}

export default checkCollectionHasElements;
