var mydiv = document.getElementById("mydiv");
mydiv.addEventListener("click", function(){
  alert("Hello World! You're doing it");  
});

var classdivs = document.getElementsByClassName("classdiv");

var writeFunction = function() {
    document.write("How about this?");
};

for (var i = 0; i < classdivs.length; i++) {
    classdivs[i].addEventListener('dblclick', writeFunction);
};

//initialize function called when the script loads
function initialize(){
    cities();
    myFunc();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var myDiv =  document.getElementById("tableDiv");
    myDiv.appendChild(table);
};

//call the initialize function when the window has loaded

function myFunc(){
    var myAutoDiv = document.getElementById("myAutoDiv");
    myAutoDiv.innerHTML = "Let's script some html!"
};

window.onload = initialize();