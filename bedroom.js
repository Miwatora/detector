img = "";
Status = "";

function preload(){
img = loadImage('bedroom.jpeg')
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
    text("Bed", 230, 200);
    noFill();
    stroke("#FF0000");
    rect(190, 180, 450, 350 );

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