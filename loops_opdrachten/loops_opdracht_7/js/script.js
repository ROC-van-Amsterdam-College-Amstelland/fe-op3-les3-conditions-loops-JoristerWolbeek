//javascript code
//javascript code

function showLoop()
{
    var i ;
    var myUitkomst = "" ;
        for (i=0; i<=100; i++) {
            if(i%3 == 0 ){
                myUitkomst += i + " vet <br>" ;    
            }
            else if(i%5 == 0 )
                myUitkomst += i + " cool <br>" ; 
            else{
                myUitkomst += i + "<br>" ;
            }
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
}
