var isDate = function(input) {
  // Check if input is a Date object
  if (Object.prototype.toString.call(input) === "[object Date]") {
    // Check if it's a valid Date object
    return !isNaN(input.getTime());
  }

  // Check if input is a string
  if (typeof input === "string") {
    // Attempt to parse the string into a Date object
    const parsedDate = new Date(input);
    // Check if the parsedDate is a valid Date object
    return !isNaN(parsedDate.getTime());
  }

  // If input is neither Date object nor string
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
