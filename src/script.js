let classifier;
let video;
let label = '';

function setup() {
  createCanvas(640, 580)
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);  
}

function modelReady() {
  console.log('Model is ready')

  classifier.predict(gotResult);
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.predict(gotResult);
}

// When we get a result
function gotResult(err, results) {
  if (err) console.error(error)
  else {
    console.log(results)
    label = results[0].className; 
    classifier.predict(gotResult)
  }
}

function draw() {
  image(video, 0, 0);
  fill(255)
  textSize(28);
  text(label, 10, height -140)
}
