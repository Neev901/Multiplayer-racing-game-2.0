class Form {
  constructor() {
    this.input = createInput("Enter Name")
    this.button = createButton("Play")
    this.greeting = createElement("h1")
    this.title = createElement("h1")

  }

  display() {
    this.title.html("MultiPLayer Car Racing Game")
    this.title.position(displayWidth / 2 - 170, 10)
    this.input.position(displayWidth / 2 - 50, displayHeight / 2 - 80)
    this.button.position(displayWidth / 2 + 10, displayHeight / 2)
    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()
      player.name = this.input.value();
      if (Player_Count < 4) {
        Player_Count = Player_Count + 1;
        player.index = Player_Count;
        player.Player_Writer();
        player.Count_Writer(Player_Count);
        this.greeting.html("Welcome " + player.name + " !")
        this.greeting.position(displayWidth / 2 - 120, displayHeight / 4)
        if(Player_Count==4){
        gameState += 1;
        }
        gameState_obj.Game_State_Writer(gameState);
      }
      else{
        this.greeting.html("Game is full!")
        this.greeting.position(displayWidth / 2 - 50, displayHeight / 4)
      }
    })
  }

  hide(){
    this.title.hide()
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
  }
}