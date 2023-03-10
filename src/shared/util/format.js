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

/**
 * A utility function to convert a string to title case
 * @param {string} str - The string to convert to title case
 * @returns {string} - The converted string in title case
 */
export function toTitleCase(str) {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(" ");

  // Loop through the words array and capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words array back into a single string and return it
  return words.join(" ");
}

/**
 * Gets the file extension of a given URL.
 *
 * @param {string} url - The URL of the file.
 * @returns {string} The file extension (without the dot), or an empty string if the URL has no extension.
 */
export function getFileExtension(url) {
  // Get the last part of the URL by splitting it with a slash
  const parts = url.split("/");
  const filename = parts[parts.length - 1];

  // Get the file extension by splitting the filename with a dot
  const extensionParts = filename.split(".");

  // If there is no dot, return an empty string
  if (extensionParts.length === 1) {
    return "";
  }

  // Otherwise, return the last part of the extension (the file type)
  return extensionParts[extensionParts.length - 1];
}

/**
 * Gets the FAwesome icon id string of a given extension of a file.
 *
 * @param {string} extension - The extension of the file.
 * @returns {string} The file icon id.
 */
export function getIconId(extension) {
  const dictionary = {
    zip: "zipper",
    xlsx: "excel",
    xls: "excel",
    docx: "word",
    doc: "word",
    pdf: "pdf",
  };

  // Check if the extension is in the dictionary
  if (extension in dictionary) {
    // If it is, return its definition
    return `file-${dictionary[extension]}`;
  }
  // If it's not, return null
  return "file";
}
