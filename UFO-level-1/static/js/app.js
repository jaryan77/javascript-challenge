// from data.js
var tableData = data;

// YOUR CODE HERE
// Create variable for table body to put the output data into
var tbody = d3.select("tbody");
// var form = d3.select("form")
// Select the filter button
// not sure if this would be #button or 'filter-btn'
// var button = d3.select("#filter-btn");

// // name event handler function
// button.on("click", runEnter);
// form.on("submit",runEnter);

// Use function from above
function runEnter(data) {
    //Prevent page from refreshing
    // d3.event.preventDefault();
    tbody.html("");

    data.forEach((dataRow) => {
        var row = tbody.append("tr"); 
    
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
              cell.text(val);
            }
        );
    });
}

function clickButton() {
    //Select the input element and get the raw html node (explain?),
    //   use id="datetime" from line 40 w/ input tag
    //  ----- moving this code out of function
    var inputElement = d3.select("#datetime");

    // Get value property from input element
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(row => row.datetime === inputValue);
    
    console.log(filteredData);
    console.log(inputValue);
    console.log(tableData);

    runEnter(filteredData);
    //Select list element by class name?? referencing "table-area" line 51 in html
    // var list = d3.select("");

    // list.html("");

    // list.append("tr").text(`${datetime}`);
    // list.append("tr").text(`${city}`);
    // list.append("tr").text(`${state}`);
    // list.append("tr").text(`${country}`);
    // list.append("tr").text(`${shape}`);
    // list.append("tr").text(`${durationMinutes}`);
    // list.append("tr").text(`${comements}`);
};

d3.selectAll("#filter-btn").on("click",clickButton);
runEnter(tableData);



