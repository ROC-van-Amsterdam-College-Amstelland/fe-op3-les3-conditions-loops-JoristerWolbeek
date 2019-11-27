//javascript code

function showLoop()
{
    var i ;
    var myUitkomst = "" ;
        for (i=0; i<=50; i++) {
            if(i%2 == 0 ){
                myUitkomst += i + "<br>" ;    
            }
            else{
                console.log(i) ;
            }
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
}
