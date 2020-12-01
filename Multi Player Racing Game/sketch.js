var gameState = 0;
var gameState_obj;
var Player_Count;
var DB = firebase.database();
var all_players;
var player;
var form_obj;
var car_1, car_2, car_3, car_4;
var car_1_img, car_2_img, car_3_img, car_4_img, track_img;
var cars=[];
var index = 0;
var x = 0;
var y;

function setup(){
var canvas = createCanvas(windowWidth-20, windowHeight-30)
DB.ref('Player_Count').on('value', (val)=>{
  Player_Count = val.val();
})
DB.ref('Game_State').on('value', (val)=>{
  gameState = val.val();
})
gameState_obj = new Game();
gameState_obj.Game_State_Listener();
gameState_obj.Start()
}

function draw(){
  if (Player_Count==4 && gameState == 1){
    gameState_obj.Play();
  }
}