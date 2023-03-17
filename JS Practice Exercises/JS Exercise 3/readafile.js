const fs = require("fs");

function readFileContents(filepath, callback) {
  // Use the readFile method of the fs module to read the contents of the file
  fs.readFile(filepath, "utf8", (error, contents) => {
    if (error) {
      // If an error occurs, call the callback with the error as the first argument
      callback(error);
    } else {
      // If the file is read successfully, call the callback with the contents as the second argument
      callback(null, contents);
    }
  });
}

// Example usage
readFileContents("example.txt", (error, contents) => {
  if (error) {
    console.error(error);
  } else {
    console.log(contents);
  }
});
