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
 * of items sorted by date in given order.
 * Default soret is descending.
 * @param {array} items - An array of items.
 * @param {string} order - An string with the order ASC, DESC.
 * @returns {array} Sorted array.
 */
export const getSortedItems = (items, order) => {
  // Make a copy of the original array to avoid modifying it
  const copy = [...items];

  if (order && order.toLowerCase() === "asc") {
    // Sort the items by date in ascending order
    const sortedItems = copy.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // Return the sorted array
    return sortedItems;
  }

  // Sort the items by date in descending order
  const sortedItems = copy.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Return the sorted array
  return sortedItems;
};

/**
 * A utility function to randomize the order of an array
 * @param {array} arr - The array to randomize
 * @returns {array} - The randomized array
 */
export function shuffleItems(arr) {
  // Create a new array to store the randomized elements
  const shuffled = [...arr];

  // Loop through the array from the end to the beginning
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap the element at index i with the element at index j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return the shuffled array
  return shuffled;
}
