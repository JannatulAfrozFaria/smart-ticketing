//1.-----scroll to ticket section
function scrollToTicketSection(){
    var ticketSection = document.getElementById('target-section');
    ticketSection.scrollIntoView({behavior: "smooth"});
}

//SHORTCUTS for function operation
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//-------utility function--------01
function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}
//-------utility function--------02
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');
}

//-------utility function--------03
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
//-------utility function--------04
function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//-------utility function--------04
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

//-------------success-modal
function successModal(){
    hideElementById('home');
    showElementById('success-modal');
}
//-------------continue button
function goToHome(){
    hideElementById('success-modal');
    showElementById('home');
}