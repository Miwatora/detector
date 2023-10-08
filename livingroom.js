img = "";
Status = "";

function preload(){
img = loadImage('living room.jpeg')
}

function setup() {
    canvas = createCanvas(680, 560);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 620);
    fill("#FF0000");
    text("Couch", 270, 290);
    noFill();
    stroke("#FF0000");
    rect(250, 270, 380, 280 );

}

function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}