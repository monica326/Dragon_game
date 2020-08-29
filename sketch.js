var players, player1, player2, player3, player4;
var dragon;
var EnemyDragon, EnemyDragonImage;
var monsters;
var gameState = "play";
var database;
var form, player, game;
var ground;
var playerCount;
var allPlayers;
var distance = 0;
var Edges;

function preload(){
ground = loadImage('sprites/Forest.jpg')
player1_img = loadImage('sprites/player1.png')
dragon_image = loadImage('sprites/dragon.png');
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  player1 = createSprite(300,400);
  player1.addImage(player1_img);

  
  edges = createEdgeSprites();
  //dragon = new Dragon();
  /*
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  */
}

function draw(){
 // if(playerCount === 4){
   // game.update(1);
 // }
 player1.velocityX = 4;
 player1.velocityY = 4;
 background("white");
  if(gameState === "play"){
    if(keyDown(UP_ARROW)){
      player1.y=player1.y-10;
    }
    if(keyDown(DOWN_ARROW)){
      player1.y=player1.y+10;
    }
    if(keyDown(LEFT_ARROW)){
      player1.x=player1.x-10;
    }
    if(keyDown(RIGHT_ARROW)){
      player1.x=player1.x+10;
    }
    if (player1.isTouching(edges[2]) || player1.isTouching(edges[3])) {
      player1.bounceOff(edges[2]);
      player1.bounceOff(edges[3]);
     // wall_hitSound.play();
    }
    spawnDragon();
    drawSprites();
  }
  /*if(gameState === 2){
    game.end();
  }*/
}

function spawnDragon()
{
  if(frameCount % 50 === 0)
  {
    dragon = new Dragon();
    
  }
}
