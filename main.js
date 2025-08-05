console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Estilo inicial do body
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.background = "#000";
document.body.style.position = "relative";
document.body.style.height = "100vh";

// Lista de emojis aleatórios
const emojis = ["⚖️", "🔥", "💀", "👾", "⭐", "⚡", "🌈", "🌀", "🧠", "🍄"];

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-40px";
  emoji.style.fontSize = Math.random() * 40 + 20 + "px";
  emoji.style.transition = "transform 1s";
  emoji.style.opacity = 0.9;
  emoji.style.filter = "drop-shadow(0 0 5px white)";
  document.body.appendChild(emoji);

  let pos = 0;
  const speed = Math.random() * 2 + 1;

  // Queda
  const fall = setInterval(() => {
    pos += speed;
    emoji.style.top = pos + "px";

    if (pos > window.innerHeight + 50) {
      emoji.remove();
      clearInterval(fall);
    }
  }, 16); // ~60 FPS
}

// Gera um novo emoji a cada instante
setInterval(criarEmoji, 100);
