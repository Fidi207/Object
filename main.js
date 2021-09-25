img = "";
status = "";

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    coco = ml5.objectDetector("cocossd", AAAAA);
    document.getElementById("status").innerHTML= "Status: Detecting....";
}

function AAAAA(){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    status = true;
    coco.detect(img, bruhbruh);
}

function draw(){
    image(img, 0, 0, 640, 420);
    textSize(20);
    fill("#FF0000");
    text("Doggo", 171, 69);
    stroke("#FF0000");
    noFill();
    rect(161, 52, 200, 300);

    fill(0, 0, 255);
    text("Kit", 321, 102);
    stroke(0, 0, 255);
    noFill();
    rect(311, 80, 290, 300);
}

function bruhbruh(error, arry){
    if (error){
        console.error(error);
    }
    else{
        console.log(arry);
    }
}