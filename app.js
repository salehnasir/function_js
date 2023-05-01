function calculateFactorial(inputId, outputId) {
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);
  
    const inputNumber = parseInt(inputElement.value);
  
    let factorial = 1;
  
    for (let i = 1; i <= inputNumber; i++) {
      factorial *= i;
    }
  
    outputElement.textContent = factorial;
  }

  function removeVowels(inputId, outputId) {
    // Get the input and output elements
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);
  
    // Get the input string
    const inputString = inputElement.value;
  
    // Define a regular expression that matches vowels
    const vowelsRegex = /[aeiou]/gi;
  
    // Remove all vowels from the input string using the regular expression
    const outputString = inputString.replace(vowelsRegex, '');
  
    // Set the output element's text content to the modified string
    outputElement.textContent = outputString;
  }
  function findMax(inputId, outputId) {
    // Get the input and output elements
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);
  
    // Get the input array
    const inputArray = JSON.parse(inputElement.value);
  
    // Find the maximum number in the input array
    const maxNumber = Math.max(...inputArray);
  
    // Set the output element's text content to the maximum number
    outputElement.textContent = maxNumber;
  }
  function capitalizeWords(inputId, outputId) {
    // Get the input and output elements
    const inputElement = document.getElementById(inputId);
    const outputElement = document.getElementById(outputId);
  
    // Get the input string
    const inputString = inputElement.value;
  
    // Split the string into an array of words
    const words = inputString.split(' ');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words back into a string
    const outputString = capitalizedWords.join(' ');
  
    // Set the output element's text content to the capitalized string
    outputElement.textContent = outputString;
  }
  function calculateAverage() {
    // Get the input and output elements
    const input = document.getElementById("inputArray");
    const output = document.getElementById("outputAverage");

    // Parse the input value as an array of numbers
    const numbers = input.value.split(",").map(Number);

    // Calculate the average of the numbers
    const average = numbers.reduce((total, number) => total + number, 0) / numbers.length;

    // Display the result in the output element
    output.textContent = `The average is ${average.toFixed(2)}`;
  }

  function checkPalindrome() {
    // Get the input and output elements
    const input = document.getElementById("inputString");
    const output = document.getElementById("outputPalindrome");

    // Get the input value and remove any non-alphanumeric characters and spaces
    const inputValue = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the input value
    const reversedValue = inputValue.split("").reverse().join("");

    // Check if the input value and the reversed value are equal
    if (inputValue === reversedValue) {
      output.textContent = "true";
    } else {
      output.textContent = "false";
    }
  }

  function sortStrings() {
    // Get the input and output elements
    const input = document.getElementById("inputArray");
    const output = document.getElementById("outputSorted");

    // Get the input value and split it into an array
    const inputArray = input.value.split(",");

    // Sort the array alphabetically
    const sortedArray = inputArray.sort();

    // Join the sorted array into a string with commas
    const outputValue = sortedArray.join(", ");

    // Display the sorted array in the output element
    output.textContent = outputValue;
  }

  function isPrime() {
    const num = parseInt(document.getElementById("number").value);
    let prime = true;
  
    if (num === 1) {
      prime = false;
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          prime = false;
          break;
        }
      }
    } else {
      prime = false;
    }
  
    document.getElementById("output").innerHTML = prime;
  }

  function sortObjectsByProperty() {
    // Get input array of objects
    const inputArray = JSON.parse(document.getElementById("input").value);
  
    // Get property to sort by
    const propertyToSortBy = document.getElementById("property").value;
  
    // Sort the array of objects by the given property
    const sortedArray = inputArray.sort((a, b) => {
      if (a[propertyToSortBy] < b[propertyToSortBy]) {
        return -1;
      } else if (a[propertyToSortBy] > b[propertyToSortBy]) {
        return 1;
      } else {
        return 0;
      }
    });
  
    // Display the sorted array in the output element
    document.getElementById("output").innerHTML = JSON.stringify(sortedArray);
  }
  
  

      
  