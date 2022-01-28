var dog = 0;
var cat = 0;
var lion = 0;
function start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WR9OJfFNO/model.json", itisloaded);
}
function itisloaded(){
    audio = new Audio("Welcome.ogg");
    audio.play();
    classifier.classify(my_results);
}
function my_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_r = Math.floor(Math.random() * 255);
        random_g = Math.floor(Math.random() * 255);
        random_b = Math.floor(Math.random() * 255);

        document.getElementById("hearing").style.color="rgb(" + random_r + ", " + random_g + ", " + random_b + ")";
        document.getElementById("detector").style.color="rgb(" + random_r + ", " + random_g + ", " + random_b + ")";
        
        animal = document.getElementById("anomal");
        sound = results[0].label;

        if(sound == "Background Noise"){
            animal.src="listen.gif";
            document.getElementById("hearing").innerHTML="I can hear - Background Noise";
            document.getElementById("detector").innerHTML="Detected Dog - " + dog + ", Detected Lion - " + lion + ", Detected Cat - " + cat;
        }
        else if(sound == "Doggy"){
            animal.src="bark.gif";
            dog = dog+1;
            document.getElementById("hearing").innerHTML="I can hear - Dog";
            document.getElementById("detector").innerHTML="Detected Dog - " + dog + ", Detected Lion - " + lion + ", Detected Cat - " + cat;
        }
        else if(sound == "Sheru"){
            animal.src="lion.gif";
            lion = lion+1;
            document.getElementById("hearing").innerHTML="I can hear - Lion";
            document.getElementById("detector").innerHTML="Detected Dog - " + dog + ", Detected Lion - " + lion + ", Detected Cat - " + cat;
        }
        else if(sound == "Tom"){
            animal.src="meow.gif";
            cat = cat+1;
            document.getElementById("hearing").innerHTML="I can hear - Cat";
            document.getElementById("detector").innerHTML="Detected Dog - " + dog + ", Detected Lion - " + lion + ", Detected Cat - " + cat;
        }
    }
}