//1.-----scroll to ticket section
function scrollToTicketSection() {
    var ticketSection = document.getElementById('target-section');
    ticketSection.scrollIntoView({ behavior: "smooth" });
}

//SHORTCUTS for function operation
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//-------utility function--------01
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}
//-------utility function--------02
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');
}

//-------utility function--------03
function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
//-------utility function--------04
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//-------utility function--------04
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
//setting the initial values of seat available and seat count
setTextElementValueById('current-seat-count', 0);
setTextElementValueById('current-available-seat', 40);
setTextElementValueById('total', 0);

//hide the entry primarily
document.getElementById('entrySection').classList.add('hidden');

// Select the ticket entries list
const ticketEntries = document.getElementById('ticketEntries');


//--------------------------------------------------------------
// Select all ticket buttons
const tickets = document.querySelectorAll('.ticket');
// Set initial total
let grandTotal = 0;

//when someone clicks on a ticket------:
tickets.forEach(ticket => {
    ticket.addEventListener('click', (e) => {
        if (ticket.classList.contains('disabled') || document.querySelectorAll('.selected').length>3) return; //exit if ticket is already disabled
        const clickValue = e.target.innerText;
        console.log(clickValue);

        // Disable ticket and change background color
        ticket.classList.add('disabled');
        ticket.classList.remove('bg-[#F7F8F8]')
        // ticket.style.backgroundColor = 'bg-[#1DD100]';
        ticket.classList.add('bg-[#1DD100]', 'text-white', 'selected');

        //available seat Decrease
        const currentAvailableSeat = getTextElementValueById('current-available-seat');
        const updatedAvailableSeat = currentAvailableSeat - 1;
        setTextElementValueById('current-available-seat', updatedAvailableSeat);

        //seatcount increase
        const currentSeatCount = getTextElementValueById('current-seat-count');
        const newSeatCount = currentSeatCount + 1;
        setTextElementValueById('current-seat-count', newSeatCount);

        //entry of new ticket purchase
        document.getElementById('entrySection').classList.remove('hidden');
        document.getElementById('entrySection').classList.add('block');

        //AppendChild
        const entrySection = document.getElementById('entrySection');
        const newEntry = document.createElement('ul');
        newEntry.innerHTML = '<li class="flex flex-row justify-between"><span>'+clickValue+'</span> <span>Economy</span><span> 550 </span> </li>'
        entrySection.appendChild(newEntry);

        //total price display
        const currentTotal = getTextElementValueById('total');
        const updatedTotal = currentTotal + 550;
        setTextElementValueById('total', updatedTotal);

        // Calculate grand total and display
        grandTotal += 550;
        updateGrandTotal();

        // Check if maximum tickets reached
        if (document.querySelectorAll('.ticket.disabled').length <= 4) {
            document.getElementById('nextButton').disabled = false;
        }
        //   --------edition start
        else if (document.querySelectorAll('.ticket.disabled').length >= 4) {
            document.getElementById('nextButton').disabled = true;
        }
    });
});

  document.querySelector('#applyCouponButton').addEventListener('click',updateGrandTotal);
// Function to update Grand total and display
function updateGrandTotal() {
    const couponCode = document.getElementById('couponCodeInput').value;
    let discount = 0;

    if (couponCode === 'NEW15') {
        discount = 0.15;
        document.getElementById('discount-section').classList.add('hidden');
    } else if (couponCode === 'Couple 20') {
        discount = 0.20;
        document.getElementById('discount-section').classList.add('hidden');
    }
    const discountedTotal = grandTotal * (1 - discount);

    document.getElementById('grandTotal').textContent = `BDT ${discountedTotal.toFixed(2)}`;
}


// Event listener for coupon code input
document.getElementById('couponCodeInput').addEventListener('input', () => {
    const applyButton = document.getElementById('applyCouponButton');
    applyButton.disabled = false;
});
// Event listener for apply coupon button
document.getElementById('applyCouponButton').addEventListener('click', () => {
    updateTotal();
});
// Event listener for phone number input
document.getElementById('phoneNumberInput').addEventListener('input', () => {
    const nextButton = document.getElementById('nextButton');
    nextButton.disabled = false;
});



//-------------success-modal
function successModal() {
    hideElementById('home');
    showElementById('success-modal');
}
//-------------continue button
function goToHome() {
    hideElementById('success-modal');
    showElementById('home');

    //reset score and life
    setTextElementValueById('total', 0);
    setTextElementValueById('grandTotal', 0);
}

