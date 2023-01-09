
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) { 
      
    console.log(event);

    var Content = event.results[0][0].transcript; 

    Textbox.innerHTML = Content; 
    console.log(Content);

    if(Content =="selfie")
    {
        console.log("tirando selfie --- ");
        speak();
    }
}

function speak() {
 var synth = window.speechSynthesis;
 Webcam.attach(camera);
setTimeout(function()
{
    imgId = "Selfie1";
    takeSelfie();
    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 5000);
setTimeout(function()
{
    imgId = "Selfie2";
    takeSelfie();
    speakData = "Tirando sua selfie em 10 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 10000);
setTimeout(function()
{
    imgId = "Selfie3";
    takeSelfie();
    speakData = "Tirando sua selfie em 15 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1 src="'+data_uri+'"/>' ;       
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2 src="'+data_uri+'"/>' ;       
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3 src="'+data_uri+'"/>' ;       
        }
    })
}

