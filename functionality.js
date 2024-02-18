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
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//keyboard press
function handleKeyboardButtonPress(){

}
function handleKeyboardButtonPress(event){
    const customerPressed = event.key;
    console.log( 'player pressed :' , customerPressed);

    //stop the game if pressed 'Esc'
    if(customerPressed === 'Escape'){
        // gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,currentAlphabet);

    //---SHORT CUT APPROACH(WRITING COMMON FUNCTION FOR SCORE AND LIFE) for-----check matched or not
    if(customerPressed === expectedAlphabet ){
        console.log('you got a ticket');
        const currentSeat = getTextElementValueById('current-seat');
        const updatedSeat = currentSeat - 1;
        setTextElementValueById('current-seat',updatedSeat);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }
    }
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