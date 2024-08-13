function setup() {
    createCanvas(300, 300);
    background("red")
  
    textFont("New Times Roman");
    textSize(15)
    textAlign(CENTER,CENTER);
    fill ('white')
  
  }
  
  function draw(){
    text("p5.js Web Editor",200,200)
  }
  function modoNoturno(horario) {
    if (horario > 18) {
      console.log("Você precisa ligar o modo noturno!");
    } else {
      console.log("Modo noturno não é necessário neste momento.");
    }
  }
  
  modoNoturno(15);
  modoNoturno(20);
  
  