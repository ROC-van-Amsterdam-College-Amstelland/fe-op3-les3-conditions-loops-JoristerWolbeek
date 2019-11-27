//javascript code//javascript code
function showLoop()
{
var i ;
var myUitkomst = "" ;
    for (i=1;i<=50; i++) {
        if(i == 20 ) {
            myUitkomst += i + " dit is een mooi getal <br>" ;
        }
        else if(i == 40){
            myUitkomst += i + " dit is een mooi getal <br>" ;
        }
        else{
            myUitkomst += i + "<br>" ;
        }
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
} 