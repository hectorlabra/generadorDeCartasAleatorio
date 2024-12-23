import "../style/index.css";

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

  cardElement.className = "card bg-white";
  topSuit.className = `position-absolute top-0 start-0 m-2 fs-4 ${color}`;
  number.className = `position-absolute top-50 start-50 translate-middle display-4 fw-bold ${color}`;
  bottomSuit.className = `position-absolute bottom-0 end-0 m-2 fs-4 ${color} rotate-180`;

  topSuit.innerHTML = suitSymbols[card.suit];
  number.innerHTML = card.value;
  bottomSuit.innerHTML = suitSymbols[card.suit];
};

window.onload = () => {
  renderCard(generateRandomCard());

  document.getElementById("generate").addEventListener("click", () => {
    renderCard(generateRandomCard());
  });

  setInterval(() => {
    renderCard(generateRandomCard());
  }, 10000);

  const updateDimensions = () => {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const card = document.getElementById("card");

    if (width) card.style.width = `${width}px`;
    if (height) card.style.height = `${height}px`;
  };

  document.getElementById("width").addEventListener("change", updateDimensions);
  document
    .getElementById("height")
    .addEventListener("change", updateDimensions);
};
