function getSaldo()
{
    var mySaldo = prompt("hoeveel geld staat er nu op uw rekening?") //hier wordt gevraagd via een prompt wat de variable mysaldo gaat zijn
 
    if(mySaldo == 500 ) //hier wordt de variable vergeleken met de uitkomsten, in dit geval of het gelijk is aan
        {
            alert("er is geld gestort") //hier wordt laten zien in de vorm van een alert een berichtje
        }
    else if(mySaldo >= 501 ) //hier wordt de variable vergeleken met de uitkomsten, in dit geval 501 of groter
        {
            alert("Er is geld gestort en u heeft een bonus!") //hier wordt laten zien in de vorm van een alert een berichtje
        }
    else //hier wordt de variable vergeleken met de uitkomsten, in dit geval alle andere mogelijke uitkomsten
        {
            alert("er is geen geld gestort") //hier wordt laten zien in de vorm van een alert een berichtje
        }
 
}