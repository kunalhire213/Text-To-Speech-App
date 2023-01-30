const userText = document.getElementById('inputText');
const speechBtn = document.getElementById('speech')

speechBtn.addEventListener('click', () => {
    speechText = userText.value;

    let speechData = new SpeechSynthesisUtterance();
    
    speechData.text = speechText;

    speechSynthesis.speak(speechData);
})
