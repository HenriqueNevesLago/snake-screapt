import { snakeBody } from "./snake.js";
import { SNAKE_SPEED } from "./game.js";
export function scorboard() {
  let point = document.getElementById("point");
  point.innerHTML = snakeBody.length;
  let speed = document.getElementById("speed");
  speed.innerHTML = SNAKE_SPEED;
}
