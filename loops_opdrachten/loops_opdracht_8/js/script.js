//javascript code
//javascript code

function showLoop()
{
    var i ;
    var myUitkomst = "" ;
        for (i=0; i<=50; i++) {
            if(i%25 == 0 ){
                alert("helaas")   
            }
            else{
                myUitkomst += i + "<br>" ;    
            }
    }
    document.getElementById("knop").innerHTML = myUitkomst ;
}
