var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

//create table element
var table = document.createElement("table");

function initialize(){
    buildTable();
    addColumns();
    addEvents();
};

//build table from existing data
function buildTable(){

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
    table.appendChild(headerRow);

    //loop through cityPop to populate table data
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; 
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; 
        tr.appendChild(pop);

    table.appendChild(tr);
    };
}

//Add city Size column to table
function addColumns(){
    
    //select all existing rows of the previously generated table
    //for each, add appropriate column data
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;
            
            //conditional to determine city siz
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';  
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};

    });
};

function clickme(){
    alert('Hey, you clicked me!');
};

//add events to table
function addEvents(){
    //add click event using predefined function 'clickme' above
    document.querySelector("table").addEventListener("click", clickme);

    //add mouseover event using anonymous function
	document.querySelector("table").addEventListener("mouseover", function() {
		
		    var color = "rgb(";

		    for (var i=0; i<3; i++){

			    var random = Math.round(Math.random() * 255);

			    color += random;

			    if (i<2){
		    		color += ",";
			
			    } else {
		    		color += ")";
	    	};
            console.log(color)
		    
            document.querySelector("table").style.color = color;
	    };
    });
}

//add table to div with id = mydiv in index.html
document.querySelector("#mydiv").appendChild(table);

//ensure scripts are not run until html content is fully downloaded
document.addEventListener('DOMContentLoaded',initialize)