let q1_arr;
let q2_arr;
let q2_bigger;
let q3_x;
let q3_y;
let q3_largura;
let q3_altura;
let q4_arr;
let q5_arr;
let q5_media;
let q6_arr1_x;
let q6_arr2_y;
let q7_soma;
let q10_r;
let q10_theta;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  // q1_setup();
  // ===============
  // q2_setup();
  // ===============
  // q3_setup();
  // q3_draw();
  // q3_alterar();
  // q3_draw();
  // ===============
  // ===============
  // q4_setup();
  // ===============
  // q5_setup();
  // ===============
  // q6_setup();
  // ===============
  // q7_setup();
  // ===============
  q8_setup();
  // ===============
  // q9_setup();
  // ===============
  // q10_setup();
}

function draw(){
  // q1_draw();
  // q2_draw();
  // q3_draw(); // Vou chamar draw em SETUP
  // q4_draw();
  // q5_draw();
  // q6_draw();
  // q7_draw();
  q8_draw();
  // q9_draw();
  // q10_draw();
}

  //  ==================================
  //  =             Q01               =
  //  ==================================
function q1_setup(){
  q1_arr = q1_coresRandom(5);
}
function q1_draw(){
  for (let i = 0; i < q1_arr.length; i++){
    fill(q1_arr[i]);
    circle(innerWidth/2 + i*60,innerHeight/2 + i*60,60);
  }
}
function q1_coresRandom(num){
  let arr = []
  for (let i = 0; i < num; i++){
    arr[i] = color(random(256),random(256),random(256));
  }
  return arr
}
  //  ==================================
  //  =             Q02               =
  //  ==================================
function q2_setup(){
  q2_arr = [10,30,45,69,380,55,39];
  q2_bigger = q2_maior(q2_arr);
}
function q2_draw(){
  fill(255,0,0);
  rect(innerWidth/2, innerHeight/2, 80, q2_bigger)
}
function q2_maior(arr){
  let bigger = 0;
  for (let i = 0; i < arr.length; i++) {
    const valor = arr[i];
    if (bigger < valor){
      bigger = valor;
    }
  }
  return bigger
}
  //  ==================================
  //  =             Q03               =
  //  ==================================
function q3_setup(){
  q3_x = 200;
  q3_y = 200;
  q3_largura = 100;
  q3_altura = 125;
}
function q3_draw(){
  rect(q3_x,q3_y,q3_largura,q3_altura);
}
function q3_alterar(){
  q3_x += 50;
  q3_y += 50;
  q3_largura = q3_largura * 1.25;
  q3_altura = q3_altura * 1.25;
}
  //  ==================================
  //  =             Q04               =
  //  ==================================
function q4_setup(){
  q4_arr = [[0,1,2,3],[4,5,6,7],[8,1,3,5],[9,4,7,3],[1,4,3,2]];
}
function q4_draw(){
  for (let indiceDoArrayInterno = 0; indiceDoArrayInterno < q4_arr.length; indiceDoArrayInterno++) {
    const arrayInterno = q4_arr[indiceDoArrayInterno];
    for (let indiceDoNumero = 0; indiceDoNumero < arrayInterno.length; indiceDoNumero++) {
      const valor = q4_arr[indiceDoArrayInterno][indiceDoNumero];
      if (valor === 0) fill(231,50,80);
      if (valor === 1) fill(80,50,80);
      if (valor === 2) fill(158,130,80);
      if (valor === 3) fill(0,50,80);
      if (valor === 4) fill(40,50,0);
      if (valor === 5) fill(24,25,180);
      if (valor === 6) fill(10,80,170);
      if (valor === 7) fill(100,70,255);
      if (valor === 8) fill(8,8,120);
      if (valor === 9) fill(231,0,80);
      rect(indiceDoNumero*20,indiceDoArrayInterno*20, 20, 20);

    }
  }

}
  //  ==================================
  //  =             Q05               =
  //  ==================================
function q5_setup(){
  q5_arr = [ 6, 7.2, 8.5, 9, 10, 2, 5.6, 9.9, 10, 10];
  q5_media = q5_calcularMedia();
}
function q5_draw(){
  fill(0,140,0);
  rect(0,0,200,50);
  fill(255,0,0);
  rect(0,100,q5_media*20,50);
}

function q5_calcularMedia(){
  let somatorio = 0;
  for (let i = 0; i < q5_arr.length; i++) {
    const nota = q5_arr[i];
    somatorio += nota;
  }
  return somatorio/q5_arr.length
}

  //  ==================================
  //  =             Q06               =
  //  ==================================
function q6_draw(){
  strokeWeight(10);
  for (let i = 0; i < 9; i++) {
    line(q6_arr1_x[i],q6_arr2_y[i],q6_arr1_x[i+1],q6_arr2_y[i+1])
  }
}
function q6_setup(){
  q6_arr1_x = [];
  q6_arr2_y = [];
  for (let i = 0; i < 10; i++) {
    q6_arr1_x[i] = random(300,500);
    q6_arr2_y[i] = random(300,500);
  }
}
  //  ==================================
  //  =             Q07               =
  //  ==================================
function q7_draw(){
  fill(0,130,0);
  rect(100,100,q7_soma*10,50);
}
function q7_setup(){
  q7_soma = q7_somaDeTodos(10);
}
function q7_somaDeTodos(num){
  let resultado = 0;
  for (let i = 0; i < num; i++) {
    resultado += 1;
  }
  return resultado
}

  //  ==================================
  //  =             Q08               =
  //  ==================================
function q8_draw(){
  q8_desenharCeu();
  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 3; j++){
      q8_desenharEstrela(200+i*10+(i+1)*100,50+(j)*100+80*j,50);
    }
  }
  q8_desenharLua();
}
function q8_setup(){

}
function q8_desenharCeu(){
  fill(0,0,144);
  rect(0,0,innerWidth,innerHeight);
}
function q8_desenharEstrela(x,y,tam){
  fill(255,255,255);
  beginShape();
  vertex(x+tam/2, y);
  vertex(x+tam*0.572, y+tam*0.425);
  vertex(x+tam, y+tam/2);
  vertex(x+tam*0.575, y+tam*0.575);
  vertex(x+tam/2, y+tam);
  vertex(x+tam*0.425, y+tam*0.575);
  vertex(x+0, y+tam/2);
  vertex(x+tam*0.425, y+tam*0.425);
  endShape();
}
function q8_desenharLua(){
  fill(122);
  circle(innerWidth-200,200,200);
}
  //  ==================================
  //  =             Q09               =
  //  ==================================
function q9_draw(){

}
function q9_setup(){
  let r1 = {
    x: 10,
    y: 20,
    width: 30,
    height: 30,
  }
  let r2 = {
    x: 100,
    y: 100,
    width: 30,
    height: 30,
  }
  console.log(q9_testaRetangulo(r1,r2));
}
function q9_testaRetangulo(r1,r2){
  if (r1.x + r1.width < r2.x || r1.x > r2.x + r2.width) return false;
  if (r1.y + r1.height < r2.y || r1.y > r2.y + r2.height) return false;
  return true;
}
  //  ==================================
  //  =             Q10               =
  //  ==================================
function q10_draw(){
  // x = r * cos(theta);
  // y = r * sin(theta);
  strokeWeight(1);
  for (let i = 0; i < 100000; i++) {
    let x = q10_r * 16 * pow(sin(i),3);
    let y = -q10_r * (13 * cos(i) - 5 * cos(2*i) - 2 * cos(3*i) - cos(4*i));
    stroke(255,0,0);
    point(innerWidth/2 + x, innerHeight/2+ y)
  }
}
function q10_setup(){
  q10_r = 25;
}
