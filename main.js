objetos=[];
status = "";
video = "";

function preload(){
  video = createVideo('video.mp4');
  video.hide();
}


function setup() {
  canvas = createCanvas(480, 380);
  canvas.center();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estado: Detectando objetos";
}

function modelLoaded() {
  console.log("¡Modelo cargado!");
  status = true;
  video.loop();
  video.speed(1);
  video.volume(40);
}
function gotResult(error,results){
  if(error){
    console.log(error);
  }
  console.log(results);
  objetos=results;
}
function draw() {
  image(video, 0, 0, 480, 380);
  if(status !=""){
    
  }
}
