Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality: 90 


});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function takepic(){
    Webcam.snap(function(data_stuff){
        document.getElementById("picture").innerHTML="<img id='snapped' src='"+data_stuff+"' >";
    });
}

console.log("ml5 version : ",  ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FD-XU982-/model.json", imageLoader);

function imageLoader(){
    console.log("Model Loaded!");
}

function identify(){
    image=document.getElementById("snapped");
    classifier.classify(image, getResult);

}

function getResult(error, result){
    if(error){
        console.error(error);
    }

    if(result){
        console.log(result);
    document.getElementById("result_member").innerHTML=result[0].label;
    document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }

}