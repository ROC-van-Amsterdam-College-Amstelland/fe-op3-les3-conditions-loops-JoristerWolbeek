//javascript code
function rekenenplus(myOperator)
{
var getal1; 
var getal2;
var myAnwser ;
getal1 = parseInt(document.getElementById("getal1").value) ;
getal2 = parseInt(document.getElementById("getal2").value) ;

    if(myOperator == "+"){
        myAnwser = getal1 + getal2 ;
    }
    else{
        myAnwser = getal1 - getal2 ;
    }
    alert(parseInt(myAnwser)) ;
}
