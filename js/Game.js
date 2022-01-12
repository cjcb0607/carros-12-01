class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
 // funcion play, esconder los botones desde form, text, sacar la informacion del jugador 
  play(){
    form.hide();
    text("listos?" , 120,100)
    player.information()
    if (allplayers != undefined){
      var disPos =130
      for(var p in allplayers){
        disPos= disPos+20 
          if(p==="player"+player.index){
            fill("red");
          }
        text(allplayers[p].name+": "+allplayers[p].distance, 120, disPos)
      }
    }
    
    if(keyIsDown(UP_ARROW)&& player.index != null){
      player.distance += 50;
      player.update();
    }

  }
}















