class Player{
  constructor(){
    this.index = 0;
    this.name = null;
    this.distance = 0;
  }
  Count_Listener(){
    var refer = DB.ref('Player_Count');
    refer.on('value', (data)=>{
      Player_Count = data.val();
    })
  }
  Count_Writer(data){
    DB.ref().update({
      Player_Count : data
    })
  }
  Player_Writer(){
    var refer = DB.ref('Players');
    refer.child('player_' + this.index).set({
      name: this.name,
      distance : this.distance
    })
  }
  static Players_Listener(){
    var refer = DB.ref('Players/')
    refer.on('value', (data)=>{
      all_players = data.val()
    })
  }
}