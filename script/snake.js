import { getInputDirection } from "./input.js";
export let SNAKE_SPEED = 3;

export let snakeBody = [
  {
    x: 14,
    y: 14,
  },
  {
    x: 13,
    y: 13,
  },
  {
    x: 12,
    y: 12,
  },
];

function restartGame() {
  alert("Fracasso");
  snakeBody = [
    {
      x: 14,
      y: 14,
    },
    {
      x: 13,
      y: 13,
    },
    {
      x: 12,
      y: 12,
    },
  ];
}

export function update() {
  let inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  if (
    snakeBody[0].x === 30 ||
    snakeBody[0].x === 0 ||
    snakeBody[0].y === 30 ||
    snakeBody[0].y === 0
  ) {
    restartGame();
    inputDirection.x = 0;
    inputDirection.y = 0;
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}
