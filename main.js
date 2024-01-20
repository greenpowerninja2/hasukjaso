function preload() {
}

function setup() {
canvas = createCanvas(301, 301);
canvas.center();
video = createCapture(VIDEO);
video.size(301, 301);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    console.log("statche x = " + results[0].pose.mustache.x);
    console.log("statche y = " + results[0].pose.mustache.y);
}
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}
function draw() {
    image(video, 0, 0, 301, 301);
}

function take_snapshot(){
    save('mustacheepicpic.png')
}