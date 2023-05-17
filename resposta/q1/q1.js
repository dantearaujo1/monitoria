let q = 10;
let help = "Pressione k para passar a questão e j para voltar"
let c1 = {}
let c2 = {}
let pointsX = [];
let pointsY = [];
let sliders = [];

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  c1= createColorPicker("black");
  c2= createColorPicker("green");
  pointsX = [500, 510, 520, 530, 540];
  pointsY = [ 0, 100, 80 , 300, 100]
  for (let i = 0; i < 2 * pointsX.length; i++){
    if ( i  % 2 == 0  ){
      sliders.push(createSlider(0,window.innerHeight,pointsY[i%pointsY.length]));
      sliders[i].position(25, 80 + 10 * i);
    }
    else{
      sliders.push(createSlider(0,window.innerWidth,pointsX[i%pointsX.length]));
      sliders[i].position(200, 80+ 10 * (i-1));
    }
  }
}

function draw(){

  switch(q){
    case 1:
      hideElements();
      q01();
      break;
    case 2:
      hideElements();
      q02();
      break;
    case 3:
      hideElements();
      q03();
      break;
    case 4:
      hideElements();
      q04();
      break;
    case 5:
      hideElements();
      q05();
      break;
    case 6:
      hideElements();
      q06();
      break;
    case 7:
      hideElements();
      q07();
      break;
    case 8:
      hideElements();
      q08();
      break;
    case 9:
      hideElements();
      c1.show()
      c2.show()
      q09();
      break;
    case 10:
      hideElements();
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].show();
      }
      q10();
      break;
    default:
      background(255);
      fill(0);
      textSize(25);
      text(help, window.innerWidth/2 - textWidth(help)/2, window.innerHeight/2);
      hideElements();
  }



}

function hideElements(){
  c1.hide();
  c2.hide();
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].hide();
  }
}

function keyPressed(){
  if (key == 'k'){
    if (q <= 10){
      q++;
    console.log("Pressed");
    }
  }
  if (key == 'j'){
    if (q >= 0){
      q--;
    }
  }
}

  //  ==================================
  //  =             Q01               =
  //  ==================================
function q01(){

}
  //  ==================================
  //  =             Q02               =
  //  ==================================
function q02(){

}
  //  ==================================
  //  =             Q03               =
  //  ==================================
function q03(){

}
  //  ==================================
  //  =             Q04               =
  //  ==================================
function q04(){

}
  //  ==================================
  //  =             Q05               =
  //  ==================================
function q05(){

}

  //  ==================================
  //  =             Q06               =
  //  ==================================
function q06(){

}

  //  ==================================
  //  =             Q07               =
  //  ==================================
function q07(){

}

  //  ==================================
  //  =             Q08               =
  //  ==================================
function q08(){

}

  //  ==================================
  //  =             Q09               =
  //  ==================================
function q09(){
  background(255);
  fill(0);
  textSize(25);
  text("Q09", 0, 25);
  text("Cor 1", 12, 100);
  c1.position(25,50);

  text("Cor 2", 88, 100);
  c2.position(100,50);


  for (let i = 0; i < 300; i++){
      let a = lerpColor(c1.color(),c2.color(), i*1/(300));
      fill(a)
      noStroke();
      rect(window.innerWidth/2+i*2,window.innerHeight/2,2,100);
  }

}




  //  ==================================
  //  =             Q10               =
  //  ==================================
function q10(){
  background(255);
  fill(0);
  textSize(25);
  text("Q10", 0, 25);
  for (let i = 0; i < sliders.length; i++) {
    if ( i  % 2 == 0  ){
      text(sliders[i].value(), 25 + 125, 90 + 10 * (i));
    }
    else{
      text(sliders[i].value(), 200 + 125, 90 + 10 * (i-1));
    }
  }


  for (let i = 0; i < sliders.length; i++) {
    if ( i  % 2 == 0  ){
      text(sliders[i].value(), 25 + 125, 90 + 10 * (i));
    }
    else{
      text(sliders[i].value(), 200 + 125, 90 + 10 * (i-1));
    }
  }
  fill(0);
  beginShape();
  for (let i = 0; i < sliders.length; i = i + 2) {
    vertex(sliders[i].value(), sliders[i+1].value());
  }
  endShape(CLOSE);



}
