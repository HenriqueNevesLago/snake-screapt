import { snakeBody } from "./snake.js";

const foodBody = {
  x: 2,
  y: 2,
};

function randomizedPosition() {
  return Math.floor(Math.random() * (0 - 31) + 31);
}
export function updateFood() {
  snakeBody.forEach((element) => {
    if (element.x === foodBody.x && element.y === foodBody.y) {
      console.log(randomizedPosition());
      foodBody.x = randomizedPosition();
      foodBody.y = randomizedPosition();
      snakeBody.push({
        x: foodBody.x,
        y: foodBody.y,
      });
    }
  });
}

export function drawFood(foodBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridColumnStart = foodBody.x;
  foodElement.style.gridRowStart = foodBody.y;
  foodElement.classList.add("food");
  foodBoard.appendChild(foodElement);
}
