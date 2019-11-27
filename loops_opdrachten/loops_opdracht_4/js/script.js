//javascript code
function showLoop()
{
var i ;
var myUitkomst = "" ;
    for (i=0; i<=1000; i++) {
        myUitkomst += i + "<br>" ;
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
} 