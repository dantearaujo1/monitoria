let q = 0;
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
  background(255);
  fill(0);
  let t1 = `Basta escrever no seu código`
  let cod = `{\n\tlet v = 10;\n}`
  let t2 = `Assim v só será acessível dentro dos {}, pois
ele foi definido dentro do bloco que vc digitou!
Tentar acessar v fora dos {} vai retornar um erro
de referência "ReferenceError" v não está definido!`
  escreverTexto(200,170,t1,cod,t2);
}
  //  ==================================
  //  =             Q02               =
  //  ==================================
function q02(){
  background(255);
  let t1 = `Assim:`
  let cod = `var glob = 10; // Declarando e atribuindo globalmente
funtion setup(){
  console.log(glob); // Aqui vai mostrar 10
  glob = 5; // Acessei a variável global "glob" modificando ela p 5
  console.log(glob); // Aqui vai mostrar 5
  //Acessado dentro da função setup(),
  //mas podia ser em qlqr outra!
  // Vejam que eu declarei ela fora dos escopos de função
} `
  let t2 = `Quando eu falei que declarei e atribui globalmente
quer dizer que eu criei glob fora de qlqr função ou bloco`
  escreverTexto(200,170,t1,cod,t2);

}
  //  ==================================
  //  =             Q03               =
  //  ==================================
function q03(){
  background(255);
  let t1 = `Declarar uma variável com var dentro de {}
sem que esse {} venha de uma função, irá fazer
com que essa variável seja acessada fora do {},
Ja usando o let, essa variável só vai existir
dentro do {} independente se ele vier de uma
função ou não
`
  let cod = `function teste(){
   // esse {} está indicando o escopo de função pq vem
   //precedido por uma função, se n viesse, era escopo
   //de bloco
  }`
  let t2 = `Quando eu falei que declarei e atribui globalmente
quer dizer que eu criei glob fora de qlqr função ou bloco`
  escreverTexto(200,170,t1,cod,t2);
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

function escreverTexto(inix,iniy,texto,cod,texto2){
  let linhas1 = texto.split("\n");
  let linhas2 = texto2.split("\n");
  let cod1 = cod.split("\n");
  let padding = 5;
  let borderRadius = 10;

  let codeblockH = cod1.length*30 + padding;
  let codeblockW = 800 + padding;
  let end1 = iniy + (linhas1.length - 1) * 30 + padding;
  let end2 = end1 + codeblockH + padding;

  fill(0);
  for (let i = 0; i < linhas1.length; i++){
    text(linhas1[i],inix,iniy+i*30);
  }

  if(cod1.length > 1){

    fill(80,80,80);
    rect(200,end1,codeblockW,codeblockH, borderRadius)
  }
  fill(255);
  for (let i = 0; i < cod1.length; i++){
    text(cod1[i],200+padding,end1+i*30+textSize());
  }
  fill(0);
  for (let i = 0; i < linhas2.length; i++){
    text(linhas2[i],inix,end2+i*30+textSize());
  }
}
