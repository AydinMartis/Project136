Status="";
object=[];
video="";



function setup ()
{
    canvas=createCanvas(480,380);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}


function draw ()
{
    image(video,0,0,480,380);
}

function start ()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("Status").innerHTML="Status: Detecting objects";
}

function modelLoaded ()
{
    console.log("Initialised model loaded!");
    Status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
