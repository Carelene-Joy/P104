//https://teachablemachine.withgoogle.com/models/LokGlnguD/
function setup () {
    var canvas = createCanvas(300,300)
    canvas.position(540,280)
  video = createCapture(VIDEO)
    video.hide()
    
}

function draw () {
    image(video,0,0,300,300)  
}

function takesnapshot () {
    save ("facerecognised.png")
}

link = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LokGlnguD/model.json", modelloaded)

function modelloaded () {
  console.log ("Model Loaded")
}