var canvas;
var music;
var box ;
var surface1;
var surface2;
var surface3;
var surface4;
var edges ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(600,584,100,30);
    surface1.shapeColor="green";

    surface2=createSprite(470,584,100,30);
    surface2.shapeColor="purple";

    surface3=createSprite(200,584,100,30);
    surface3.shapeColor="red";

    surface4=createSprite(320,584,100,30);
    surface4.shapeColor="pink";
    

    //create box sprite and give velocity
    box=createSprite(random(20,750),545,0,0);
    box.shapeColor="white";
    box.velocityX=-1;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor = green ;
    ball.velocityX=0;
    music.play();
}

if(surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor = purple;
    ball.velocityX=0;
    music.play();
}

if(surface3.isTouching(box)&&box.bounceOff(surface3)){
    box.shapeColor = red;
    ball.velocityX=0;
    music.play();
}

if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor = pink ;
    ball.velocityX=0;
    music.play();
}
drawSprites();
}