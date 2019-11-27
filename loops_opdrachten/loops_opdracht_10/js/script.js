//javascript code
function showLoop()
{
    var cars = ["Audi", "Volkswagen", "Mini", "Tesla", "Toyota"] ;
    var x = cars[0] ;
    for (x=0; cars<=4; x++){
        x += cars ;
    }
    document.getElementById("knop").innerHTML = cars + "<br>"
}