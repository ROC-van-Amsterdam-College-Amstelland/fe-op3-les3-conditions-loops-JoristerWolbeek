//javascript code
//javascript code
function getSaldo()
{
    var mySaldo = prompt("hoeveel geld staat er nu op uw rekening?")
 
    if(mySaldo == 500 ) 
        {
            alert("er is geld gestort")
        }
    else if(mySaldo >= 501 )
        {
            alert("Er is geld gestort en u heeft een bonus!")
        }
    else
        {
            alert("er is geen geld gestort")
        }
 
}