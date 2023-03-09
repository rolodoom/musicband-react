/**
 * Takes an array of items as input and returns the latest
 * item based on the date property.
 * @param {array} items - An array of items.
 * @returns {object} return the latest item from the filterd array.
 */
export const getLatestItem = (items) => {
  // Sort the items by date in descending order
  const sortedItems = items.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return the latest item (i.e., the first item in the sorted array)
  return sortedItems[0];
};

/**
 * This function takes an array of items as input and returns a new array
 * of items sorted by date in descending order, but excluding the latest item.
 * @param {array} items - An array of items.
 * @returns {array} Sorted array without the latest item.
 */
export const getSortedItemsWithoutLatest = (items) => {
  // Make a copy of the original array to avoid modifying it
  const copy = [...items];

  // Sort the items by date in descending order
  const sortedItems = copy.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Remove the latest item (i.e., the first item in the sorted array)
  sortedItems.shift();

  // Return the sorted array without the latest item
  return sortedItems;
};

/**
 * This function takes an array of items as input and returns a new array
 * of items sorted by date in descending order.
 * @param {array} items - An array of items.
 * @returns {array} Sorted array.
 */
export const getSortedItems = (items) => {
  // Make a copy of the original array to avoid modifying it
  const copy = [...items];

  // Sort the items by date in descending order
  const sortedItems = copy.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return the sorted array
  return sortedItems;
};
