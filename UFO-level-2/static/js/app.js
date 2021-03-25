var tableData = data;

var tbody = d3.select("tbody");

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

var filters = {};

function sightingFilter() {
    //Select the input element and get the raw html node (explain?),

    var inputElement = d3.select(this).select("input");

    // Get value property from input element
    var inputValue = inputElement.property("value");

    var filterId = inputElement.attr("id");

    if (inputValue) {
        filters[filterId] = inputValue;
    }
    else {
        delete filters[filterId];
    }
    clickButton();
}

function clickButton() {

    let filteredData = tableData;
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    console.log(filteredData);
    console.log(inputValue);
    console.log(tableData);

    runEnter(filteredData);

};

d3.selectAll(".filter").on("change", sightingFilter);
runEnter(tableData);