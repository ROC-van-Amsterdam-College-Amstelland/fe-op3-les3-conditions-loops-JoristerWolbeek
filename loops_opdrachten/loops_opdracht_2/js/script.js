//javascript code
function showLoop()
{
var i ;
var myUitkomst = "" ;
    for (i=20;i >= 0; i--) {
        myUitkomst += i + "<br>" ;
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
} 