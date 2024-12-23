// Estructuras de datos
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["hearts", "diamonds", "spades", "clubs"];
const suitSymbols = {
  hearts: "♥",
  diamonds: "♦",
  spades: "♠",
  clubs: "♣"
};

// Funciones core
const generateRandomCard = () => {
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  return { value: randomValue, suit: randomSuit };
};

const renderCard = card => {
  const cardElement = document.getElementById("card");
  const topSuit = document.getElementById("top-suit");
  const number = document.getElementById("number");
  const bottomSuit = document.getElementById("bottom-suit");

  const isRed = card.suit === "hearts" || card.suit === "diamonds";
  const color = isRed ? "text-danger" : "text-dark";

  [topSuit, number, bottomSuit].forEach(el => {
    el.className = `position-absolute ${color}`;
  });

  topSuit.innerHTML = suitSymbols[card.suit];
  number.innerHTML = card.value;
  bottomSuit.innerHTML = suitSymbols[card.suit];
};

// Event Listeners y inicialización
window.onload = () => {
  // Generar carta inicial
  renderCard(generateRandomCard());

  // Botón de generación
  document.getElementById("generate")?.addEventListener("click", () => {
    renderCard(generateRandomCard());
  });

  // Temporizador (cada 10 segundos)
  setInterval(() => {
    renderCard(generateRandomCard());
  }, 10000);

  // Manejo de dimensiones
  const updateDimensions = () => {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const card = document.getElementById("card");

    if (width) card.style.width = `${width}px`;
    if (height) card.style.height = `${height}px`;
  };

  document
    .getElementById("width")
    ?.addEventListener("change", updateDimensions);
  document
    .getElementById("height")
    ?.addEventListener("change", updateDimensions);
};
