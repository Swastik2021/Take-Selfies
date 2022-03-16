var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new speechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}
Recognition.onresult= function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="Take my selfie."){
        console.log("taking selfie...")
        speak();
    }
}
function speak(){

var synth = window.speechSynthesis;
speak_data="Taking selfie in 5 seconds 5 4, 3 2, 1";
var utterthis =new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);
Webcam.attach(camera);

setTimeout(function(){
    take_snapshot();
    save();
},5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 90 
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    })
}
function save(){
    link = document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}