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
