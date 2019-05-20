// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select("table")
var tbody = table.append("tbody")

//function ufosightings(data){
   // data.forEach(function(sighting){
     //   var row = tbody.append("tr");
      //  Object.entries(sighting).forEach(function([key, value]) {
            //console.log(key, value);
         //   var cell = row.append("td");
         //   cell.text(value)
           // });
          // });
       // };
   
data.forEach(function(ufosightings) {
   console.log(ufosightings);
        var row = tbody.append("tr");

    Object.entries(ufosightings).forEach(function([key, value]) {
    console.log(key, value);
       var cell = row.append("td");
        cell.text(value)
    });
   });


var button =d3.select("#filter-btn");



function changeHandler(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    var newTable = tableData.filter(sighting => sighting.datetime === inputValue);
   
   newTable.forEach(function(filteredsightings){
        var row = tbody.append("tr");
        Object.entries(filteredsightings).forEach(function([key, value]){
        //    console.log(key, value);
           var cell = row.append("td");
          cell.text(value)
        });
   });
};

//inputValue.on("change", changeHandler);
button.on("click", changeHandler);

//filter.on("click", function(){
  //  d3.event.preventDefault();

    //var inputElement = d3.select("#datetime");
    //var inputValue = inputElement.property("value");

    //console.log(inputValue);

    //var filteredData = tableData.filter(event => event.datetime === inputValue);

   // console.log(filteredData);
//});
