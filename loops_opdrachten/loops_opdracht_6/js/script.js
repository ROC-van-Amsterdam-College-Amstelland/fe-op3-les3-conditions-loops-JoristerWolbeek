//javascript code
//javascript code

function showLoop()
{
    var i ;
    var myUitkomst = "" ;
    var myMax = document.getElementById("xd").value ; 
        for (i=0; i<=myMax; i++) {
                myUitkomst += i + "<br>" ;    
            }
        document.getElementById("knop").innerHTML = myUitkomst ;
    }
    
