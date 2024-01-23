
const speech = new SpeechSynthesisUtterance();
console.log(speech)

let voices = [];

let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices(); //getVoices will provide all the voices available in this system
    speech.voice = voices[0]

    voices.forEach((voice, i) =>  (voiceSelect.options[i] = new Option(voice.name, i)));
}
 voiceSelect.addEventListener('change',() =>{
    speech.voice = voices[voiceSelect.value];
 })


document.getElementById('speech-btn').addEventListener('click',() =>{
    speech.text = document.getElementById('txtarea').value;
    window.speechSynthesis.speak(speech)
})