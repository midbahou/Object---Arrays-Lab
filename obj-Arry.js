
//* ============================================ Part 2: Expanding Functionality =====================================================

// Example CSV string
const csvString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Split the CSV into rows based on newline
const rows = csvString.split("\n"); // Use csvString.split("\n") to divide the string into individual rows.

// Calculate the number of columns dynamically from the first row
// The first row (rows[0]) is split by "," to determine the number of columns. The length of the resulting array gives the number of columns.
const columnCount = rows[0].split(",").length;

// Create a two-dimensional array to store the data
const csvData = []; // Parent array to hold all rows

// Use a standard for loop to iterate through each row.
for (let i = 0; i < rows.length; i++) {
    const row = rows[i].split(","); // Split each row into columns
    csvData.push(row); // Add the row array to the parent array
}

// Log the two-dimensional array
console.log(csvData);

// Output the number of columns for reference
console.log(`Number of columns: ${columnCount}`);




//* ============================================ Part 3: Transforming Data =====================================================

// Define the CSV Data
const parsedCSV = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"]
];

// Extract headers from the first row
const headers = [];
for (let i = 0; i < parsedCSV[0].length; i++) {
    // parsedCVS[0]: Refers to the first row of the data, which contains the headers (["ID", "Name", "Occupation", "Age"]).
    headers.push(parsedCSV[0][i].toLowerCase()); // ["id", "name", "occupation", "age"]
    console.log(headers);    
}

// Transform rows into objects
const transformedData = [];
//   Since the first row (parsedCVS[0]) is already used for headers, start from the second row (i = 1).
for (let i = 1; i < parsedCSV.length; i++) {
    const row = parsedCSV[i]; // Each row refers to a record like ["42", "Bruce", "Knight", "41"].
    const rowObject = {}; // For each row, initialize an empty object rowObject.
    
    // Map each column of the current row to its corresponding header.
    for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = row[j]; // Match the column data (row[j]) with its corresponding header (headers[j]).
    }
    console.log(rowObject); // {id: '42', name: 'Bruce', occupation: 'Knight', age: '41'}
    transformedData.push(rowObject);
}

// Print the transformed data as an array of objects.
console.log("Transformed Data:");
console.log(transformedData);




//* ============================================ Part 4: Sorting and Manipulating Data =====================================================

// The pop() method removes the last element from the array.
transformedData.pop();  // The transformedData array is now one item shorter than before.
console.log(transformedData); // the last item {id: '98', name: 'Bill', occupation: 'Doctor’s Assistant', age: '26'} is removed,


// After calling splice(1, 0, ...), the new object { id: "48", name: "Barry", occupation: "Runner", age: "25" } is inserted at index 1 in the transformedData array.
transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });


// pusg(), adds the object { id: "7", name: "Bilbo", occupation: "None", age: "111" } to the end of the transformedData array.
transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });


//*TODO: Calculating the Average Age:
// This code calculates the average age of all the people in the transformedData array.
let ageSum = 0; // A variable ageSum is initialized to 0. It will hold the total sum of all ages.
for (let i = 0; i < transformedData.length; i++) {
  ageSum += parseInt(transformedData[i].age); // Convert age to a number
}

let averageAge = ageSum / transformedData.length; // calculates the average by dividing the total sum of ages by the number of entries in the transformedData array.
console.log("Average Age:", averageAge); // prints the calculated average age to the console.





//* ================================================= Part 5: Full Circle ================================================================

let transformedDataP5 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" },
  ];
  
  // Object.keys(transformedDataP5[0]): This extracts the keys (column names) of the first object in the array (transformedDataP5[0]).
  // For example, the keys of the first object { id: "42", name: "Bruce", occupation: "Knight", age: "41" } are ["id", "name", "occupation", "age"].
  let headers2 = Object.keys(transformedDataP5[0]).join(","); // .join(","): Joins the keys with a comma to create a single string representing the header row. This will result in: "id,name,occupation,age".
  let csvRows = [headers2]; // This initializes an array csvRows, which will store each row of the CSV data, starting with the header row (headers2).
  

  for (let i = 0; i < transformedDataP5.length; i++) {
    // Object.values(transformedDataP5[i]): This extracts the values (data) from each object in the array. For example, for the object { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, it will return the values ["42", "Bruce", "Knight", "41"].
    let row = Object.values(transformedDataP5[i]).join(",");
    csvRows.push(row); // csvRows.push(row): Adds each row (the string representing the data) to the csvRows array.
  }
  

  let csvString2 = csvRows.join("\n"); // This produces the final CSV string with each row on a new line.
  console.log("CSV String:\n" + csvString2);
  