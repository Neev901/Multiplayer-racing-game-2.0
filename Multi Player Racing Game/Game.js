class Game {
  constructor() {

  }
  async Game_State_Listener() {
    var refer = DB.ref("Game_State")
    await refer.on('value', (data) => {
      gameState = data.val();
    })
  }
  Game_State_Writer(State) {
    DB.ref().update({
      Game_State: State
    })
  }
  Start() {
    if (gameState === 0) {
      player = new Player();
      var refer = DB.ref('Player_Count')
      refer.once('value').then((snapshot) => {
        var a = snapshot.exists();
        if (a == true) {
          Player_Count = snapshot.val();
          player.Count_Listener();
        }
      })
      form_obj = new Form();
      form_obj.display();
    }
    car_1 = createSprite(200, 100, 100, 100)
    car_2 = createSprite(400, 100, 100, 100)
    car_3 = createSprite(600, 100, 100, 100)
    car_4 = createSprite(800, 100, 100, 100)
    cars = [car_1,car_2,car_3,car_4]
  }

  Play(){
    form_obj.hide();
    
    Player.Players_Listener();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

      var index = 0;

      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    drawSprites();
  }
}