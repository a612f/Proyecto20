var bgImg, bg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    bgImg = loadImage ("Imágenes/garden.png");
    catImg1 = loadImage ("Imágenes/tomOne.png");
    catImg2 = loadAnimation ("Imágenes/tomTwo.png","Imágenes/tomThree.png");
    catImg3 = loadImage ("Imágenes/tomFour.png");
    mouseImg1 = loadImage ("Imágenes/jerryOne.png")
    mouseImg2 = loadAnimation ("Imágenes/jerryTwo.png","Imágenes/jerryThree.png");
    mouseImg3 = loadImage ("Imágenes/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite (870,600,500,500);
    cat.addImage ("gatoSentado",catImg1);
    cat.scale = 0.08

    mouse = createSprite (500,600,500,500);
    mouse.addImage ("gatoSentado",mouseImg1);
    mouse.scale = 0.08

    //bg = createSprite (500,400,1000,800);
   // bg.addImage ("fondo",bgImg);

console.log();
}

function draw() {

    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        
        cat.velocityX = 0;
        cat.addImage ("catLastImg", catImg3);
        cat.changeImage ("catLastImg", catImg3);
        cat.x = 500;
        cat.scale = 0.08

        mouse.velocityX = 0;
        mouse.addImage ("mouseLastImg", mouseImg3);
        mouse.changeImage ("mouseLastImg", mouseImg3);
        mouse.x = 300;
        mouse.scale = 0.08
    }
    
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse.addAnimation ("ratonMolestando", mouseImg2);
        mouse.changeAnimation ("ratonMolestando", mouseImg2);
        mouse.frameDelay = 25;

        cat.velocityX = -5
        cat.addAnimation ("gatoMolesto", catImg2);
        cat.changeAnimation ("gatoMolesto", catImg2);
    }

    
}
