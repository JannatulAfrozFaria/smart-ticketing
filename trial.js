function selected(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('disabled');
    setBackgroundColorById(element);
    removeBackgroundColorById(element);
    const currentAvailableSeat = getTextElementValueById('current-available-seat');
    const updatedAvailableSeat = currentAvailableSeat - 1;
    setTextElementValueById('current-seat',updatedAvailableSeat);
    const currentSeatCount = getTextElementValueById('current-seatcount');
    const updatedSeatCount = currentSeatCount + 1;
    setTextElementValueById('current-seatcount',updatedSeatCount);
}
function findTicket(elementId){
    const element = document.getElementById(elementId);
    return element;
}
// Select a random seat
function selectARandomSeat(){
    const seatString = 'A1A2A3A4B1B2B3B4C1C2C3C4D1D2D3D4E1E2E3E4F1F2F3F4G1G2G3G4H1H2H3H4I1I2I3I4J1J2J3J4'
    const seats = seatString.split('');
    
    // const findTicket = document.getElementById('')
    seats.addEventListener('click', selected());
}
if(findTicket() === selectARandomSeat()){
    const currentAvailableSeat = getTextElementValueById('current-available-seat');
    const updatedAvailableSeat = currentAvailableSeat - 1;
    setTextElementValueById('current-seat',updatedAvailableSeat);
    const currentSeatCount = getTextElementValueById('current-seatcount');
    const updatedSeatCount = currentSeatCount + 1;
    setTextElementValueById('current-seatcount',updatedSeatCount);
}


const ticketChart = document.getElementById('ticket-chart');
ticketChart.addEventListener('click',selectARandomSeat());
