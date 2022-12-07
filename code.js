var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//jugador-sofia
var Sofia = createSprite(20,25, 18, 18);
Sofia.shapeColor="white";

//Paredes del laberinto (wall)
  //paredes de arriba
  var wall1 = createSprite(10,70, 100, 20);
  wall1.shapeColor = "#4D4D58";
  var wall2 = createSprite(100,50,20,100);
  wall2.shapeColor = "#4D4D58";
  var wall3 = createSprite(90,150,100,18);
  wall3.shapeColor = "#4D4D58";
  var wall4 = createSprite(140,30,100,18);
  wall4.shapeColor = "#4D4D58";
  var wall5 = createSprite(180,150,20,100);
  wall5.shapeColor = "#4D4D58";
  var wall6 = createSprite(250,100,20,100);
  wall6.shapeColor = "#4D4D58";
  var wall7 = createSprite(290,180,100,20);
  wall7.shapeColor = "#4D4D58";
  var wall8 = createSprite(330,60,100,20);
  wall8.shapeColor = "#4D4D58";
  var wall13 = createSprite(342,110,20,80);
  wall13.shapeColor = "#4D4D58";
  //paredes de abajo
  var wall9 = createSprite(70,270,20,100);
  wall9.shapeColor = "#4D4D58";
  var wall10 = createSprite(114,260,100,20);
  wall10.shapeColor = "#4D4D58";
  var wall11 = createSprite(24,270,100,20);
  wall11.shapeColor = "#4D4D58";
  var wall12 = createSprite(38,349,20,90);
  wall12.shapeColor = "#4D4D58";
  var wall14 = createSprite(216,281,20,90);
  wall14.shapeColor = "#4D4D58";
  var wall15 = createSprite(350,246,150,20);
  wall15.shapeColor = "#4D4D58";
  var wall16 = createSprite(336,350,20,100);
  wall16.shapeColor = "#4D4D58";
  var wall17 = createSprite(124,330.150,20);
  wall17.shapeColor = "#4D4D58";
  var wall18 = createSprite(183,318,50,15);
  wall18.shapeColor= "#4D4D58";
  var wall19 = createSprite(213,430,100.0);
  wall19.shapeColor = "#4D4D58";
  

//Crear la copa.
var cup = createSprite(395,370,20,100);
cup.shapeColor = "white";
  
function draw() {
  background("black");
  createEdgeSprites();
  
  //Controles de sofia
  if (keyDown("UP_ARROW")){
    Sofia.y=Sofia.y-10;
  }
  if (keyDown("DOWN_ARROW")){
    Sofia.y=Sofia.y+10;
  }
  if (keyDown("LEFT_ARROW")){
    Sofia.x=Sofia.x-10;
  }
  if (keyDown(RIGHT_ARROW)){
    Sofia.x=Sofia.x+10;
  }
  Sofia.bounceOff(edges);
  Sofia.bounceOff(wall1);
    Sofia.bounceOff(wall2);
      Sofia.bounceOff(wall3);
        Sofia.bounceOff(wall4);
          Sofia.bounceOff(wall5);
            Sofia.bounceOff(wall6);
              Sofia.bounceOff(wall7);
                Sofia.bounceOff(wall8);
                  Sofia.bounceOff(wall9);
                    Sofia.bounceOff(wall10);
                      Sofia.bounceOff(wall11);
                        Sofia.bounceOff(wall12);
                          Sofia.bounceOff(wall13);
                            Sofia.bounceOff(wall14);
                              Sofia.bounceOff(wall15);
                                Sofia.bounceOff(wall16);
                                  Sofia.bounceOff(wall17);
                                    Sofia.bounceOff(wall18);
                                      Sofia.bounceOff(wall19);
      
    
    if ( Sofia.collide(cup)){
      background ("white");
      text("Ganaste", 270, 217);
      textSize(30);
      
    }                                  


drawSprites();

}






































function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
