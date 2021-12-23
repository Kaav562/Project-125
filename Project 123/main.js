function setup()
{
    video = createCapture(VIDEO);
    video.size(650, 350);
    video.position(30, 200);

    canvas =  createCanvas(550, 400);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('poseNet is intiated!');
}
function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = rightWrist - leftWrist;
        result = floor(difference);
    }
}
rightWrist = 0;
leftWrist = 0;
difference = 0;
result = 0;

function draw()
{
    background('#00aaff');
    textSize(result);
    fill('red');
    text('KAAVYA', 50, 200);
}
