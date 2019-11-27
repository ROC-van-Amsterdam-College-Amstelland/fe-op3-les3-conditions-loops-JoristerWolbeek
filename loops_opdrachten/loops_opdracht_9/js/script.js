//javascript code
//javascript code
//javascript code

function showLoop()
{
    var i ;
    var myUitkomst = "" ;
        for (i=1; i<=5; i++) 
        {
            if(i==5){
                myUitkomst += i + " het einde is bereikt" ;
            }
            else if( i==1) {
                myUitkomst += i + " dit is het begin" ;
            }
            else{
                myUitkomst += i ;    
            }
    console.log(myUitkomst) ; 
        }
}
