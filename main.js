var noseX=0
var noseY=0
function preload() { 
lipstick=loadImage("l1.png")
}



function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    video.size(300, 300)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",getPoses)
}


function draw() {
    image(video, 0, 0, 300, 300)
    fill(255,0,0)
    stroke(255,0,0)
    //circle(noseX,noseY,20)//
    image(lipstick,noseX,noseY,30,30)
}



function takeSnapshot() {
    save("myFilterImage.png")

}

function modelLoaded(){
console.log("poseNet success")
}


function getPoses(results){
    if(results.length>0){
        //console.log(results)
        /*  console.log("nose x:"+results[0].pose.nose.x)
        console.log("nose Y"+results[0].pose.nose.y) 
        console.log("rightEar X"+results[0].pose.rightEar.x)
        console.log("rightEar Y"+results[0].pose.rightEar.y)
        console.log("leftEar X"+results[0].pose.leftEar.x)
        console.log("leftEar Y"+results[0].pose.leftEar.y) */
        noseX=results[0].pose.nose.x -10
        noseY=results[0].pose.nose.y +10
        console.log(noseX)
        console.log(noseY)
    }
}