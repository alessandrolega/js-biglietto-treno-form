function GeneraPrezzo(){
    let ValueNameSurname = document.getElementById('NameSurname').value;
    let ValueKm = parseInt(document.getElementById('Km').value);
    let ValueAgeUp = document.getElementById('AgeUp').value;
    let ValueAgeDown = document.getElementById('AgeDown').value;
    let RandomLittle = Math.floor(Math.random() * 10) +1;
    let RandomBig = Math.floor(Math.random() * 89999) +1;
    
    


    // Discount //
    
    let TicketPrice = 0.21 * ValueKm;
    let Discount20 = (TicketPrice * 0.8).toFixed(2);
    let Discount40 = (TicketPrice * 0.6).toFixed(2);
    
    
    
    
}