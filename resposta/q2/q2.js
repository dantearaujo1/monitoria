// Variáveis globais usadas para resolver as questões
// cada uma inicia com a questão na qual ela é utilizada

// Na minha função setup eu to inicializando/definindo/atribuindo
// minhas variáveis que eu vou usar pra resolver as
// questões, percebam que setup só é chamado uma vez pelo p5
// e é chamado logo no começo do meu programa, por isso esse
// é o melhor local para inicializar as variáveis
// PS: O SETUP() É AUTOMATICAMENTE CHAMADO PELO P5
// ASSIM COMO O DRAW() POR ISSO VC N PRECISA SE PREOCUPAR
// MAS AS OUTRAS FUNÇÕES VC PRECISA CHAMAR.
// Dps vá para a função draw
function setup(){
  // Crio o quadro que eu irei desenhar
  createCanvas(800,800);

  // A questão que vc quiser ver é só descomentar
  // aqui e na função draw

  // q1_setup();
  // ===============
  // q2_setup();
  // ===============
  // Esse texto é referente a q3
  // Essa questão como foi pedido para
  // ser realizado tudo no setup, todas as chamadas
  // estão aqui!
  // Fiz isso pq eu queria capturar apenas 2 posições
  // e tamanhos diferentes do meu quadrado e ao invés de
  // usar no draw que iria fazer os calculos infinitamente,
  // eu quis fazer aqui e pintar a tela duas vezes
  // q3_setup(); // Faço a chamada de inicialização
  // q3_draw(); // Pinto a tela
  // q3_alterar(); // Faço a alteração
  // q3_draw(); // Pinto os novos valores da tela
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
  // q8_setup();
  // ===============
  // q9_setup();
  // ===============
  // q10_setup();
}

// Aqui eu simplesmente to chamando cada função que eu
// criei pra resolver toda a lista.
// O p5 chama draw pra mim e dentro de draw eu chamo as Funções
// que eu criei
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
  // Vamos começar indo pra declaração da função
  // q1_coresRandom

let q1_arr;
// Aqui eu estou declarando a função q1_setup(), estou
// definindo q1_setup(), porém eu não to chamando a função
// para ser usada no meu programa. Eu vou chamar explicitamente
// la no draw
function q1_setup(){

  // Estou pegando a variável global q1_arr e estou redefinindo
  // pra ser o valor que vai ser retornado da função q1_coresRandom(5)
  // Sabemos que a função vai retornar um array com cores aleatórias,
  // eu to armazenando esse array de cores aleatórias em uma variável
  // global chamada q1_arr pois eu quero usar ela durante todo meu
  // programa
  q1_arr = q1_coresRandom(5);
}
// Vá para função setup()

// Aqui estou declarando e definindo q1_draw(), mas nunca chamei no meu
// no meu programa ela vai ser responsável por desenhar meus circulos
// de acordo com as cores do meu array global q1_arr
function q1_draw(){
  // Usando for loop pra acessar cada elemento do array
  // meu i vai de 0 ao tamanho do q1_arr para poder fazer
  // isso
  for (let i = 0; i < q1_arr.length; i++){
    // Pintando com a cor aleatória
    fill(q1_arr[i]);
    // Desenhando o círculo
    circle(width/2 + i*60,height/2 + i*60,60);
  }
}
/*
Aqui eu to criando uma função como foi pedido na questão
ela recebe como **parâmetro** a palavra num, essa palavra num
é simplesmente a quantidade que eu quero de cores aleatórias,
eu vou passar esse valor pra ser usado dentro da minha função e
assim a minha função vai me devolver um vetor cheio de cores alea-
tórias.
*/

function q1_coresRandom(num){
  // Declarei e defini uma variavel arr
  // Eu defini ela como um array vazio
  let arr = []

  // Geralmente o for loop serve para
  // eu percorrer todos os elementos
  // de um array.
  // A Estrutura do for loop é:
  // for ( inicialização de uma variavel ; condição; incremento )
  // tudo que tiver escrito dentro dos {} do for loop
  // será executado enquanto a condição for verdadeira
  for (let i = 0; i < num; i++){
    // Aqui eu estou acessando o **INDICE** i (pode ser 0,1,2,3)
    // do meu array (que eu chamei de arr) -> como acessamos?
    // usando a notação array[indice] <-
    // Na maioria das linguagens de programação, o índice 0 é o
    // primeiro elemento do array. Em cada posição do meu array
    // eu to Atribuindo um valor, esse valor é o valor de uma cor
    // eu olhei na DOCUMENTAÇÃO e vi que a função color() fazia isso
    // ela espera 3 parâmetos pra funcionar o red no primeiro parâmetro
    // o green no segundo e o blue no terceiro
    arr[i] = color(random(256),random(256),random(256));
  }

  // Após criar meu array de cores, eu to devolvendo tudo que eu criei
  // para quem chamou essa função, assim eu posso enviar dados que eu
  // criei aqui para fora. Eu faço isso usando return
  return arr
}
// Chegou aqui? Vá para q01_setup()


  //  ==================================
  //  =             Q02               =
  //  ==================================
let q2_arr;
let q2_bigger;
  // Comece pela função q2_maior(arr)

// Declaração e definição da função q2_setup
// vou chamar ela la em setup()
function q2_setup(){
  // Defino a variável global q2_arr como um vetor
  // com esses valores.
  q2_arr = [10,30,45,69,380,55,39];

  // Armazeno o que sair de q2_maior(q2_arr)
  // em uma variável chamada q2_bigger global
  // para eu poder utilizar em outras funções
  q2_bigger = q2_maior(q2_arr);
}


// Simplesmente desenho meu quadrado
// vou chamar essa função em draw()
function q2_draw(){
  fill(255,0,0);
  rect(width/2, height/2, 80, q2_bigger)
}
/*
Aqui eu estou fazendo exatamente o que a questão pede
criei uma função, na estrutura da função eu to passando
uma palavra que vai ser um placeholder (guarda um lugar/ dar um apelido)
para um array que eu vou receber de fora da função e vou realizar algo
com ele dentro da função
*/
function q2_maior(arr){
  // Armazenando um valor que
  // vai servir como minha memória
  // para salvar o maior valor que
  // eu encontrei até agora
  // eu Declarei e defini ela como sendo
  // 0, pois eu acho que o arr vai ter só
  // valores acima de 0, então 0 é o menor
  // valor que pode ter por enquanto
  let bigger = 0;

  // For loop pra eu ir de elemento em elemento
  // do meu loop, vou olhar qual o valor do
  // elemento, se ele for maior que meu bigger
  // eu vou salvar o valor dele na variavel bigger
  // e assim eu vou descobrir o maior valor do array
  for (let i = 0; i < arr.length; i++) {
    const valor = arr[i];
    if (bigger < valor){
      bigger = valor;
    }
  }

  // No fim eu retorno o bigger para quem chamou a função
  // ou seja, quem chamar maior() passando um arr, vai poder
  // armazenar o maior valor do array, como magica, pensem
  // que o lado direito vai magicamente se transformar no
  // valor bigger
  // EX:
  // let variavel_memória = maior([1,2,3,4,9,1,50]) o lado direito
  // dessa equação, vai se transformar no valor que tiver no return
  // pra o caso específico do exemplo, o bigger vai ser 50 no fim
  // é como se a gnt tivesse feito isso let variavel_memória = 50
  return bigger
}
// Vá para função q2_setup()

  //  ==================================
  //  =             Q03               =
  //  ==================================
let q3_x;
let q3_y;
let q3_largura;
let q3_altura;
  // Comece pela função q3_alterar()

// Aqui eu defino minhas variáveis globais
// quando eu começar a fazer essa questão,
// eu quero que meus valores sejam os abaixo
function q3_setup(){
  q3_x = 200;
  q3_y = 200;
  q3_largura = 100;
  q3_altura = 125;
}

// Aqui eu vou desenhar em um quadrado
// usando cada uma dessas variaveis
// eu
// va para setup() e procure por q3_setup() e q3_draw()
function q3_draw(){
  rect(q3_x,q3_y,q3_largura,q3_altura);
}
// Declaração e definição da função
// aqui eu pego as variáveis globais q3_x,q3_y....
// e faço uma simples operação com cada uma
// somo 50 no x e no y e aumento em 25% a altura
// e a largura
function q3_alterar(){
  q3_x += 50;
  q3_y += 50;
  q3_largura = q3_largura * 1.25;
  q3_altura = q3_altura * 1.25;
}
// va para função q3_setup()


  //  ==================================
  //  =             Q04               =
  //  ==================================
let q4_arr;

// Novamente minha declaração e definição do setup
// da 4 questão apenas para fazer o que eu pedi na
// questão
// Criei 5 arrays dentro de um array e cada array desse criado
// tem 4 inteiros aleatórios de 0 a 10
function q4_setup(){
  q4_arr = [[0,1,2,3],[4,5,6,7],[8,1,3,5],[9,4,7,3],[1,4,3,2]];
}


// ARRAYS ===========================================================
// O problema dessa questão é acessar um array com arrays dentro
// o intuito era vcs pensarem em como seria pra acessar um elemento
// de um array que fosse um outro array, será que eu teria que por mais um
// [] se eu quisesse acessar o elemento de dentro do array interno?

// Para acesasr os elementos de um array eu preciso de um for loop
// para acessar os elementos de um array que esta dentro de um array
// eu precisaria de um outro for loop
/*
             0 1 2 3 Colunas
  q4_arr = [
      L 0   [0,1,2,3], linha 0
      i 1   [4,5,6,7], linha 1
      n 2   [8,1,3,5], linha 2
      h 3   [9,4,7,3], linha 3
      a 4   [1,4,3,2]
      s   ];

Basicamente, para trabalhar com arrays, vcs precisam sabem de algumas nomecla-
turas pra facilitar nosso entendimento. Uma delas é o que é o **elemento** e
a outra é o que é o **índice**.

Normalmente o array tem seu PRIMEIRO ELEMEMENTO no INDICE 0, ou seja, o elemento
é o valor em si que o array guarda e o índice é a posição que aquele elemento es
tá dentro do meu array.

Para acessar eu uso a notação nome_do_array[indice_do_elemento]. Assim eu vou
pegar o elemento que esta na posição " indice_do_elemento ". Se eu tenho um
array interno como elemento dentro de um outro array externo, eu posso acessar
o elemento do array interno usando a mesma notação, acrescentando um [] para
cada nível que eu quero adentrar a mais nesses arrays, no nosso caso para pe
garmos o primeiro elemento do primeiro array interno que está dentro do meu
array externo a notação seria:
array_externo[indice_do_array_interno][indice_do_elemento_do_array_interno]

Normalmente para acessar todos os elementos de um array, eu posso utilizar um
loop que começa do indice 0 e vai até uma posição a menos do que o tamanho do
array, ou seja i < array.length.

No caso de arrays dentro de arrays nós podemos usar dois loops, um mais interno
a um loop mais externo.

for (......){
  for (....){

  }
}

Perceba que para melhor organização eu sempre procuro identar o que ta mais in-
tero.


Agora nós temos que escolher como a gnt quer percorrer os arrays, podemos per-
correr cada linha inteira primeiro ou cada coluna primeiro, cabe a vc escolher.

Percorrendo a linhas primeiro:

// Aqui eu vou percorrer cada elemento do array externo, que contém justamente
// vários arrays internos em cada indice. i.e: no indice 0 do array externo temos
// um array interno de 4 números, eu tenho 5 arrays internos dentro do meu array
// externo. Então para percorrer o array externo eu preciso apenas da quantidade
// de elementos que tem no array externo (que são 5 elemento| 5 asrrays internos)
// i < 5 (nome_do_array.length)

for (let i = 0; i < nome_do_array.length;i++){
  // Agora eu vou precisar do tamanho do array interno, preciso percorrer todo
  // o tamanho dele para poder acessar cada elemento. Para pegar meu array inter-
  // no, eu vou acessar ele e pegar seu tamanho. Então, acessando:
  // nome_do_array[0] (peguei o primeiro elemento do meu array externo) e chamei
  // o length desse elemento do meu array externo que é um array interno.
  // Agora eu tenho um i para percorrer os elementos externo

  // q4_arr = [
      L 0   [0,1,2,3], linha 0 i = 0 I percorre os elementos do array externo
      i 1   [4,5,6,7], linha 1 i = 1 os elementos do array externo são array
      n 2   [8,1,3,5], linha 2 i = 2 i.e [0,1,2,3]|[4,5,6,7]......
      h 3   [9,4,7,3], linha 3 i = 3
      a 4   [1,4,3,2]  linha 4 i = 4
      s   ];
             j j j j    J percorre os elementos dos arrays internos
             | | | |
             0 1 2 3

  // Aqui eu to justamente criando um j que irá percorrer todos os elementos
  // do array interno
  for (let j = 0; j < nome_do_array[0].length;j++){
    // Para acessar os elementos internos,
    // eu uso a notação
    // nome_do_array[indice_do_array_interno][indice_do_elemento_interno]
    // e assim eu resolvo a questão
  }
}

*/
function q4_draw(){
  for (let indiceDoArrayInterno = 0; indiceDoArrayInterno < q4_arr.length; indiceDoArrayInterno++) {
    // Aqui eu to salvando logo meu array interno na constante arrayInterno pra
    // eu escrever menos. É isso, somos todos preguiçosos!
    // toda vez que o for loop externo começar, eu crio/declaro e defino
    // essa constante pra armazenar meu arrayinterno para usar no for loop
    // interno
    const arrayInterno = q4_arr[indiceDoArrayInterno];


    for (let indiceDoNumero = 0; indiceDoNumero < arrayInterno.length; indiceDoNumero++) {

      // Mais uma vez, eu armazeno o elemento do array interno que agora é um número
      // em si pra poder escrever menos. Eu acessei esse elemento usando o indice
      // DoNumero

      const valor = arrayInterno[indiceDoNumero];
      // Vejam que eu podia ter feito como abaixo, porem eu iria escrever mais
      // const valor = q4_arr[indiceDoArrayInterno][indiceDoNumero];

      // Mudo a cor de acordo com o valor do elemento do arrayInterno
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

      // Desenhei meu rect como foi pedido na questão
      // n queria usar o elemento pra por as coordenadas,
      // eu queria usar os indices pra fazer essas contas
      rect(indiceDoNumero*20,indiceDoArrayInterno*20, 20, 20);

    }
  }

}
  //  ==================================
  //  =             Q05               =
  //  ==================================
let q5_arr;
let q5_media;

// Começe pela função q5_calcularMedia


// Aqui eu inicializo o array e armazeno o resultado de q5_calcularMedia
// em uma variavel global que eu chamnei de q5_media
// va para o q5_draw
function q5_setup(){
  q5_arr = [ 6, 7.2, 8.5, 9, 10, 2, 5.6, 9.9, 10, 10];
  q5_media = q5_calcularMedia();
}

// Desenhando os retangulos como pedido na questão
// PS chamei q5_setup na função setup() la em cima
// e chamei q5_draw na função draw() la em cima
// viram... eu pude separar cada questão resolvendo
// cada uma em algumas funções e chmando ela no meu
// programa principal. Foi minha opção de fazer isso
// eu podia ter feito de n formas, como tudo na programação
function q5_draw(){
  fill(0,140,0);
  rect(0,0,200,50);
  fill(255,0,0);
  rect(0,100,q5_media*20,50);
}
// FIM[PROXIMA QUESTAO]

// Declarando e definindo minha função, percebam que aqui eu n estou usando
// ela. Essa função vai percorrer os elementos do meu array e somar cada elemen-
// to com a variavel somatório.
function q5_calcularMedia(){
  // Declarando a variável e definindo ela com valor 0
  let somatorio = 0;

  // Loop para percorrer os elementos de q5_array
  for (let i = 0; i < q5_arr.length; i++) {
    // Dou um nome pro meu elemento pra ficar mais facil o entendimento
    const nota = q5_arr[i];

    // Somo esse elmento a minha variável somatório
    somatorio += nota;
  }


  // Depois que eu somei tudo, eu divido pela quantidade de elementos
  // e retorno pra fora da função esse valor, pois eu quero que alguem
  // la fora (quem chamar a função) possa usar/armazenar esse resultado
  return somatorio/q5_arr.length
}

// Va para q5_setup()

  //  ==================================
  //  =             Q06               =
  //  ==================================
let q6_arr1_x;
let q6_arr2_y;
// Comece por q6_setup
// Aqui eu defino meus dois arrays como arrays vazios
// e em seguida eu vou adicionando valores randomicos
// em cada um, ao invés de usar a função push, eu usei
// apenas a notação de acesso e atribui um valor em cada
// local
function q6_setup(){
  q6_arr1_x = [];
  q6_arr2_y = [];
  for (let i = 0; i < 10; i++) {
    q6_arr1_x[i] = random(300,500);
    q6_arr2_y[i] = random(300,500);
  }
}

// Em seguida eu desenhei uma linha usando cada ponto, tanto do arra1_x nas
// coordenadas de x quanto no arr2_y para as coordenadas y
function q6_draw(){
  strokeWeight(10);
  for (let i = 0; i < 9; i++) {
    line(q6_arr1_x[i],q6_arr2_y[i],q6_arr1_x[i+1],q6_arr2_y[i+1])
  }
}
  //  ==================================
  //  =             Q07               =
  //  ==================================
let q7_soma;
// Comece por q7_somaDeTodos

function q7_draw(){
  fill(0,130,0);
  rect(100,100,q7_soma*10,50);
}
function q7_setup(){
  q7_soma = q7_somaDeTodos(10);
}

// Aqui é a declaração e definição da função que eu vou usar
// para somar todos os numeros que vão de 0 a num eu preciso
// de um for loop que va de i = 0 até num, (Quem fez incluso ta correto)
// (Quem n fez incluso tbm ta correto).
// no fim eu retorno resultado para alguem poder armazenar esse valor la fora
// quando eu falo alguem, normalmente é o programador que vai armazenar em
// alguma variavel ou usar em algum calculo específico durante o código.
function q7_somaDeTodos(num){
  let resultado = 0;
  for (let i = 0; i < num; i++) {
    resultado += i;
  }
  return resultado
}

  //  ==================================
  //  =             Q08               =
  //  ==================================
// Começar pela função q8_desenharEstrela

// como eu queria desenhar as estrelas em um grid
// e não aleatoriamente, eu optei por usar dois loops
// assim eu ia poder usar o i e o j para dispor as estrelas
// em um padrão de forma quadrada, parecido com o que a gnt
// viu na questão 4, foi opção minha, é bom prestar atenção
// que como é uma tarefa repetitiva, uma boa solução é usar
// um loop ao invés de chamar q8_desenharEstrela 10* vezes ou
// mais.. É bom saber também que se eu executo um for loop 10 vezes
// e dentro desse for loop eu executo um outro for loop 3 vezes
// a quantidade de vezes que eu vou executar tudo são 30 vezes
// ou seja: 10x3  NxM   sendo N o número de quantidades do for externo
// e M o numero de quantidades do for loop interno

function q8_draw(){
  // Desenho primeiro o céu, como background, a ordem dos desenhos importa
  q8_desenharCeu();

  // Dois for loops para desenhar 30 estrelas em um padrão quadrado
  for (let i = 0; i < 10; i++){
    for (let j = 0; j < 3; j++){
      q8_desenharEstrela(200+i*10+(i+1)*100,50+(j)*100+80*j,50);
    }
  }
  // Desenho a lua
  q8_desenharLua();
}

// FIM[PROXIMA QUESTÃO]

// Podia ter usado o background, era mais simples,
// mas eu desenhei um rect ai da cor que eu queri
// va para q8_draw()
function q8_desenharCeu(){
  fill(0,0,144);
  rect(0,0,width,height);
}

// Usei a função beginShape e endShape
// com ela, cada elemento vertice que eu
// desenhar entre essas chamadas, será contado, no fim
// fechado por uma linha. Isso é a forma padrão que essas
// funções funcionam. É como se vc disesse pro programa:
// Comece a desnhar aqui e marcasse todos os pontos do seu
// desenho e quando chamasse endShape() o programa irá tentar
// ligá-los com linhas e preenche-los
// Eu criei uma função pois eu ia precisar desenahr varias estrelas
// então minha função desenha uma estrela só em um x e y que eu passar
// para dentro da função, por meio de parametros, e um tamanho que eu
// passar também.
// Vá para  q8_desenharLua
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

// Simples, desenhei um circulo pra representar a lua
// vá para q8_desenharCeu
function q8_desenharLua(){
  fill(122);
  circle(width-200,200,200);
}
  //  ==================================
  //  =             Q09               =
  //  ==================================
  // Va para q9_testeRetangulo

  // Aqui eu poderia ter optado por outras formas de criar os retangulos
  // mas eu resolvi criar esses objetos r1 e r2
  // neles eu adicionei as propriedades de um retangulo
  // x,y,width,height... para eu acessar essas propriedades
  // eu uso a notação ponto.. ou seja: r1.x vai me retornar o
  // x do retangulo, etc!
  // no fim eu passei esses retangulos para dentro da função q9_testaRetangulo
  // e como ela retorna um valor verdadeiro ou falso, eu joguei ela dentro
  // de um console.log para saber o resultado... Aquela história... eu to
  // chamando q9_testaRetangulo ali no console.log() naquele local, a função
  // vai magicamente ser substituida pelo valor de retorno dela.
  // Dessa forma, console.log() vai receber ou true ou false para imprimir
  // console.log(true) ou console.log(false) dependendo de como ser o resultado
  // de q9_testeRetangulo(...). Viram? isso: q9_testeRetangulo(..) se transfor-
  // mou nisso true|false no local onde houve a chamada.
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

// FIM[PROXIMA_QUESTÃO]

// Aqui eu to passando dois parâmetros/argumentos para a função
// eu que dou a interpretação que eu quiser pra esses parametros
// r1 e r2 na minha interpretação serão retangulos que eu vou
// passar para serem usados dentro dessa função
function q9_testaRetangulo(r1,r2){

  // Aqui está o teste de colisão no eixo x
  // testo se a ponta direita do meu retangulo1 é menor do que a ponta
  // esquerda do outro retangulo2, ou se minha ponta esquerda do retangulo1
  // é maior do que a ponta direita do retangulo2. Se ocorrer QUALQUER um
  // desses dois casos eu ja sei que n tenho colisão, pois eles nem no eixo
  // x se tocam e ja retorno falso para quem for testar la fora da minha função
  // percebam que o return automaticamente termina a função, ele nem executa o
  // que vem depois
  if (r1.x + r1.width < r2.x || r1.x > r2.x + r2.width) return false;

  // Aqui está o teste de colisão no eixo y
  // testo se a parte de baixo do retangulo1 é menor do que o topo do
  // meu retangulo2, se isso acontecer eles n tão se tocando,
  // também testo se o topo do meu retangulo1 é maior do que a parte
  // inferior do retangulo2, nesse caso, também eles n vão estar se
  // tocando
  if (r1.y + r1.height < r2.y || r1.y > r2.y + r2.height) return false;

  // Caso nenhum desses casos sejam observados, obrigatoriamente meus
  // retangulos tão se encostando, então eu retorno verdadeiro
  return true;
}
// Va para q9_setup

  //  ==================================
  //  =             Q10               =
  //  ==================================
let q10_r;
let q10_theta;

// Comece por q10_setup

// Aqui eu vou desenhar varios pontos de acordo
// com coordenadas polares, vou transformar essas coordenadas
// em um valor x e y para por os pontos na tela
function q10_draw(){
  // essa é uma função que transforma coordenadas polares
  // em x e y, existem outras para formar vários desenhos
  // x = r * cos(theta);
  // y = r * sin(theta);


  strokeWeight(1);
  // Quanto maior o loop, mais definição vc vai ter no
  // seu desenho, pois vamos desenhar |NesteCaso| 100000 pontos
  // De acordo com o site da referência, existia uma função
  // polar que encontrava x e y para formar um coração
  // e foi simplemente substituir x e y pela função dada
  // e desenhado cada ponto

  for (let i = 0; i < 100000; i++) {
    // a equação era
    // x = r * 16 * seno³(theta)
    // y = -r * (13 * cos(theta) - 5 * cos(2*theta) - 2 * cos(3*theta) - cos(4*theta))
    // theta é o nosso angulo quanto maior esse angulo, mais pontos vão ser dese-
    // nhados e mais definido nosso desenho final vai ser.
    // o i representa nosso theta
    let x = q10_r * 16 * pow(sin(i),3);
    let y = -q10_r * (13 * cos(i) - 5 * cos(2*i) - 2 * cos(3*i) - cos(4*i));
    stroke(255,0,0);
    point(width/2 + x, height/2+ y)
  }
}

// Simplesmente defini minha variavel global q10_r que será meu raio
// para 25
function q10_setup(){
  q10_r = 25;
}
