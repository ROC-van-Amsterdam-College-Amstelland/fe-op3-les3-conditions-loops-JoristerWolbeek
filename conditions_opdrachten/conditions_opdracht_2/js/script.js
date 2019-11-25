//javascript code
function getSaldo()
{
    var mySaldo = prompt("hoe geld heb je")
 
    if(mySaldo <=25 ) 
        {
            alert("Sorry, je hebt te weinig saldo!")
        }
    else if(mySaldo > 25 )
        {
            alert("Je hebt voldoende saldo om € 25 op te nemen.")
        }
 
}