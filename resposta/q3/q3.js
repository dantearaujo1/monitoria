// Sintaxe Literal
const pessoa1 = {
  nome:"Dante",
  cor_dos_cabelos:"pretos",
  altura: 1.71,
  profissão:"Engenheiro Civil"
}

// Sintaxe Funcional
function Pessoa(){
  this.nome = "Henrique";
  this.cor_dos_cabelos = "Pretos";
  this.altura = 1.80
  this.profissão = "Professor"
}

class Circulo{
  constructor(){
    this.cx = 100;
    this.cy = 100;
    this.r = 100;
    this.color = "Green";
  }

  desenhar(){
    fill(this.color);
    ellipse(this.cx,this.cy,this.r);
  }

  mover(x,y){
    this.cx += x;
    this.cy += y;
  }

  verificarLimites(){
    if (this.cx - this.r/2 > width ) return 1;
    if (this.cx + this.r/2 < 0 ) return 2;
    if (this.cy + this.r/2 < 0 ) return 3;
    if (this.cy - this.r/2 > height ) return 4;
    return 0;
  }

  resetaPos(){
    if(this.verificarLimites() === 1){
      this.cx = 0;
    }
    if(this.verificarLimites() === 2){
      this.cx = width + c.r/2;
    }
    if(this.verificarLimites() === 3){
      this.cy = height + c.r/2;
    }
    if(this.verificarLimites() === 4){
      this.cy = 0;
    }

  }

  teclaPressionada(tecla){
    if (tecla == 'd'){
      this.mover(10,0);
    }
    else if ( tecla == 'a' ){
      this.mover(-10,0);
    }
    else if ( tecla == 's' ){
      this.mover(0,10);
    }
    else if ( tecla == 'w' ){
      this.mover(0,-10);
    }
  }

  mouseClicado(){
    if(this.mouseEstaDentro()){
      this.color = color(random(255),random(255),random(255));
    }
  }

  // Criei uma função utilitária pra reusar em outros códigos
  mouseEstaDentro(){
    if (mouseX < this.cx - this.r/2 || mouseX > this.cx + this.r/2)return false;
    if (mouseY < this.cy - this.r/2 || mouseY > this.cy + this.r/2)return false;
    return true;
  }

  mouseArrastado(){
    if(this.mouseEstaDentro()){
      this.cx = mouseX;
      this.cy = mouseY;
    }
  }
}

const pessoa2 = new Pessoa()
let c = new Circulo();
function setup(){
  createCanvas(800,800);
  console.log(pessoa1);
  console.log(pessoa2);
}

function draw(){
  background(0);
  // Retirei a chamada de mover aqui para chamar no keyPressed
  // c.mover(10,0);
  c.teclaPressionada(key);
  c.desenhar();
  c.resetaPos();

  // Ao invés de criar a função resetaPos eu podia ter feito assim
  // para cada objeto
  // if(c.verificarLimites() === 1){
  //   c.cx = 0;
  // }
  // if(c.verificarLimites() === 2){
  //   c.cx = width + c.r/2;
  // }
  // if(c.verificarLimites() === 3){
  //   c.cy = height + c.r/2;
  // }
  // if(c.verificarLimites() === 4){
  //   c.cy = 0;
  // }
}

function keyPressed(){
}

function mousePressed(){
  if(mouseButton === LEFT){
    c.mouseClicado();
  }
}
function mouseDragged(){
  c.mouseArrastado();
}

