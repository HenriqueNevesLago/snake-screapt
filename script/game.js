import { update as updateSnake, draw, snakeBody } from "./snake.js";
import { updateFood, drawFood } from "./food.js";
import { scorboard } from "./scorboard.js";

const gameBoard = document.getElementById("game-zone");

let lastRenderTime = 0;
export let SNAKE_SPEED = 3;

requestAnimationFrame(main);

function main(currentTime) {
  requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  updateSnake();
  drawSnake();
  updateFood();
  drawFood(gameBoard);
  scorboard();
  switch (snakeBody.length) {
    case 5:
      SNAKE_SPEED = 4;
      break;
    case 7:
      SNAKE_SPEED = 5;
      break;
    case 10:
      SNAKE_SPEED = 6;
      break;
    case 15:
      SNAKE_SPEED = 8;
      break;
  }
}

function drawSnake() {
  gameBoard.innerHTML = "";
  draw(gameBoard);
}
