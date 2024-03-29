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
  const userLocale = navigator.language;
  const formattedDate = date.toLocaleDateString(userLocale, options);

  // Return the formatted date string
  return formattedDate;
};

/**
 * A utility function to convert a string to title case
 * @param {string} str - The string to convert to title case
 * @returns {string} - The converted string in title case
 */
export const toTitleCase = (str) => {
  // Convert the string to lowercase and split it into an array of words
  const words = str.toLowerCase().split(" ");

  // Loop through the words array and capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words array back into a single string and return it
  return words.join(" ");
};

/**
 * Gets the file extension of a given URL.
 *
 * @param {string} url - The URL of the file.
 * @returns {string} The file extension (without the dot), or an empty string if the URL has no extension.
 */
export const getFileExtension = (url) => {
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
};

/**
 * Gets the FAwesome icon id string of a given extension of a file.
 *
 * @param {string} extension - The extension of the file.
 * @returns {string} The file icon id.
 */
export const getIconId = (extension) => {
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
};

/**
 * Formats a string containing line breaks by replacing the line breaks with HTML <br/> tags.
 *
 * @param {string} inputString The string to format.
 * @returns {string} A new string with the line breaks replaced with HTML <br/> tags.
 */
export const formatStringWithBreaks = (inputString) => {
  // Replace all occurrences of '\n' with '<br/>'.
  const outputString = inputString.replace(/\n/g, "<br />");

  return outputString;
};

/**
 * Convert a HEX color string to an RGBA color string.
 *
 * @param {string} hex - The HEX color string to convert.
 * @param {number} [alpha=1] - The alpha value for the RGBA color (0-1).
 * @returns {string} The RGBA color string.
 */
export const hexToRgba = (hex, alpha = 1) => {
  // Parse the red, green, and blue values from the HEX string.
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  // Return the RGBA color string with the provided alpha value.
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Returns the inline styles for a section with a background color and image
 * @param {Object} colors - Object containing the background color and alpha values
 * @param {string} colors.bgColor - Background color in hex format
 * @param {string} colors.alpha - Alpha value for the background color
 * @param {string} bgImage - URL of the background image
 * @returns {Object|null} - Object containing the inline styles for the section or null if colors or bgImage are not passed
 */
export const getInlineSectionStyles = (
  colors,
  bgImage,
  vertAlignment = null
) => {
  // // Return null if bgImage is not passed
  // if (!bgImage) {
  //   return null;
  // }

  const styles = {};

  if (!bgImage) {
    if (colors?.bgColor) {
      const bgcolor = hexToRgba(
        colors?.bgColor || "#FFFFFF",
        colors?.alpha || 1
      );

      styles.backgroundColor = `${bgcolor}`;
    }
  } else {
    const bgcolor = hexToRgba(colors?.bgColor || "#FFFFFF", colors?.alpha || 0);
    styles.backgroundImage = `linear-gradient(${bgcolor}, ${bgcolor}), url(${bgImage})`;
    styles.backgroundRepeat = "no-repeat";
    styles.backgroundPosition = "center";
    styles.backgroundAttachment = "fixed";
    styles.backgroundSize = "cover";
  }

  if (vertAlignment) {
    styles.alignItems = vertAlignment;
  }

  return styles;
};
