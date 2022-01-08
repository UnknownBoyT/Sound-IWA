function SC() {
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ebjt2hZHP/model.json', modelReady);
}
function modelReady() {
  classifier.classify(gotResults);
}