$.getJSON("Doar.json", function(doar){


document.getElementById("Doar").innerHTML = doar.Doações[0].doação;

});