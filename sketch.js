var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var man1_running, man2_running, man3_running, man4_running, man5_running ;
var mans, man1, man2, man3, man4;
var track, man1_img, man2_img, man3_img, man4_img, groundImage;
var traping1, traping2, traping3, traping4, traping5, traping6;

function preload(){
  track = loadImage("track1.png");
  man1_running = loadAnimation("man1.png","man2.png");
  man2_running = loadAnimation("man3.png","man4.png");
  man3_running = loadAnimation("man5.png","man6.png");
  man4_running = loadAnimation("man7.png","man8.png");
  trapper1 = loadImage("trapper2.png");
  trapper2 = loadImage("trapper2.png");
  trapper3 = loadImage("trapper2.png");
  trapper4 = loadImage("trapper2.png");
  trapper5 = loadImage("trapper2.png");
  trapper6 = loadImage("trapper2.png");
  
  traping1 = loadImage("traping2.png");
  traping2 = loadImage("traping2.png");
  traping3 = loadImage("traping2.png");
  traping4 = loadImage("traping2.png");
  traping5 = loadImage("traping2.png");
  traping6 = loadImage("traping2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight -30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  trappersGroup = new Group();
  trapingsGroup = new Group();
 // trappersGroup2 = new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   
  }
  if(gameState === 2){
    game.end();
    
  }
  
}


