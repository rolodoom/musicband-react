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

/**
 * This function takes a YouTube video ID as input and returns the URL of the
 * maximum resolution thumbnail for that video.
 * @param {string} videoId - An string with the video Id.
 * @returns {string} An string with the URL of the image.
 */
export const getYouTubeThumbnailUrl = (videoId) => {
  // Construct the URL for the maximum resolution thumbnail using the video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Return the maximum resolution thumbnail URL
  return thumbnailUrl;
};

/**
 * Converts a date string in YYYY-MM-DD format to a formatted date string.
 * @param {string} dateString - A date string in YYYY-MM-DD format.
 * @returns {string} A formatted date string (e.g. "December 15, 2022").
 */
export const formatDate = (dateString) => {
  // Create a new Date object from the input date string
  const date = new Date(dateString);

  // Define options for formatting the date string
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Use the toLocaleDateString method to format the date string according to the specified options
  // The "en-US" argument specifies the locale (American English)
  const formattedDate = date.toLocaleDateString("en-US", options);

  // Return the formatted date string
  return formattedDate;
};
