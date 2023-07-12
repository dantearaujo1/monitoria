---
geometry: "left=3cm,right=2cm,top=3cm,bottom=2cm"
header-includes:
    - \usepackage{xcolor}
    - \usepackage{graphicx}
---

\begin{center}
\includegraphics[width=0.50\textwidth]{../ufc-vertical.png}
\end{center}

\fontfamily{phv}\selectfont

# Lista 03 - Programação Orientada a Objetos

1) Com suas palavras, diga qual a diferença entre Programação Estruturada e
Programação Orientada a Objetos (POO)? **(1.0)**

2) Qual a diferença entre Instância e uma Classe em POO e qual a relação entre
métodos e funções e entre variáveis e atributos? **(1.0)**

3) Cite os 4 Pilares da POO e explique cada um deles com suas palavras. **(1.0)
**

4) Crie um objeto pessoa usando a Sintaxe Literal de Objeto com as propriedades
nome, cor dos cabelo, altura e profissão, em seguida, crie uma outra pessoa
usando a função Construtora e utilizando as mesmas propriedades, porém com valores
diferentes. **(1.0)**

5) Crie uma classe chamada "Círculo" que represente um círculo na tela usando a
notação class do javascript. Essa classe deve ter os atributos "cx", "cy"
(coordenadas do centro) e "raio". Crie um método chamado "desenhar" que desenhe
o círculo na tela usando p5.js. **(1.0)**

6) Crie um objeto chamado "meuCirculo" a partir da classe "Círculo" e
posicione-o em algum lugar da tela chamando o método "desenhar". **(1.25)**

7) Adicione um método chamado "mover" à classe "Círculo" que modifique as
coordenadas do centro do círculo de acordo com algum critério (por exemplo,
aumentando o valor de "x" a cada frame). Chame o método "mover" no loop de
animação do p5.js para ver o círculo se movendo. **(1.25)**

8) Modifique a classe "Círculo" adicionando um método chamado "verificarLimites"
que verifica se o círculo saiu dos limites da tela e, caso positivo, altera as
coordenadas para trazê-lo de volta. Por exemplo, se o círculo atingir o limite
direito da tela, ele deve ser reposicionado no limite esquerdo. **(1.25)**

9) Adicione interatividade ao círculo criado anteriormente, permitindo que ele
responda a eventos de teclado e mouse. Modifique a classe "Círculo" adicionando
os seguintes métodos: **(1.25)**

- teclaPressionada(tecla): Recebe como parâmetro a tecla pressionada e realiza
a ação correspondente. Por exemplo, se a tecla "Seta Direita" for pressionada,
o círculo pode se mover para a direita. Considere também a possibilidade de
mover o círculo para cima, para baixo e para a esquerda.

- mouseClicado(): Verifica se o mouse foi clicado dentro do círculo. Se sim,
realize uma ação, como alterar a cor do círculo ou redimensioná-lo.

- mouseArrastado(): Verifica se o mouse está sendo arrastado dentro do círculo.
Se sim, realize uma ação, como mover o círculo de acordo com a posição do mouse.

# Dicas

Tem algumas respostas no slide de POO.

ChatGPT pode responder a maioria das questões, mas é bom vc entender o conteúdo
e exercitar, pois programação é prática, de nada adianta usar o chat pra
responder a lista sendo que na hora da prova não pode utilizar ele.

Se tem dificuldade, pergunte! O monitor existe pra tentar esclarecer as dúvidas.

**Na questão 09:**

Certifique-se de chamar esses métodos nos eventos correspondentes do p5.js,
como o evento de teclado (keyPressed()) e os eventos de mouse (mousePressed()
e mouseDragged()).

Exemplo de uso dos métodos:

```javascript
function keyPressed() {
  meuCirculo.teclaPressionada(key);
}

function mousePressed() {
  meuCirculo.mouseClicado();
}

function mouseDragged() {
  meuCirculo.mouseArrastado();
}
```

# Recomendações


Nesses sites que eu deixei ai também tem vários exemplos, respostas e dicas.

[ \underline{\textcolor{blue}{P5.js Referencia}} ](https://p5js.org/reference/)

[ \underline{\textcolor{blue}{Developer Mozilla - Javascritp Objetos Básico}} ](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Basics)

[ \underline{\textcolor{blue}{OOP em Javascript}} ](https://www.freecodecamp.org/portuguese/news/programacao-orientada-a-objetos-em-javascript-explicada-com-exemplos/)

[ \underline{\textcolor{blue}{Os 4 Pilares da OOP}} ](https://www.freecodecamp.org/portuguese/news/os-quatro-pilares-da-programacao-orientada-a-objetos-com-javascript/)
