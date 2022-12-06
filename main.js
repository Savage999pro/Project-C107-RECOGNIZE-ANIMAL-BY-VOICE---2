
//https://teachablemachine.withgoogle.com/models/N7bZ64Hjp/
function startClassification()
{  navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E0695caiF/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
    console.log("Model is Ready")
}
function gotResults(error, results) {
console.log("got results")

}