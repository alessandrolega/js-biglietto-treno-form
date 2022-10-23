function GeneraPrezzo(){
    let ValueNameSurname = document.getElementById('NameSurname').value;
    let ValueKm = parseInt(document.getElementById('Km').value);
    let ValueAge = document.getElementById('InputAge').value;
    let RandomLittle = Math.floor(Math.random() * 10) +1;
    let RandomBig = Math.floor(Math.random() * 89999) +1;

    document.getElementById('NameSurname').innerHTML = ValueNameSurname;
    document.getElementById('Km').innerHTML = ValueKm;
    document.getElementById('CodiceCp').innerHTML = RandomBig;
    document.getElementById('RandomCarrozza').innerHTML = RandomLittle;
    


    // Discount //

    let TicketPrice = 0.21 * ValueKm;
    let Discount20 = (TicketPrice * 0.8).toFixed(2);
    let Discount40 = (TicketPrice * 0.6).toFixed(2);

    // Condizionale //


    if (ValueAge == "minorenne") {
        document.getElementById("FinalPrice").innerHTML = Discount20 + "€";

    } else if (ValueAge == "over65") {
        document.getElementById("FinalPrice").innerHTML = Discount40 + "€";

    } else {
        document.getElementById("FinalPrice").innerHTML = TicketPrice + "€";
    }

}
    



    
