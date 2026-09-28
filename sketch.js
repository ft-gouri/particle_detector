const r = require("raylib");

const width = 400;
const height = 300;

const blue1X = 100;
const blue1Y = 0;
const blue1Size = 50;

const blue2X = 200;
const blue2Y = 0;
const blue2Size = 5;

const blue3X = 0;
const blue3Y = 50;
const blue3Size = 20;

let x1 = 0;
let x2 = width / 2;
let y3 = 0;

let size = 20;

let speed1 = 3;
let speed2 = 5;
let speed3 = 3;

function setup() {
  r.InitWindow(width, height, "Particle Scanner");
  r.SetTargetFPS(60);
}

function colorX(x) {
  if (
    x + size >= blue1X && x <= blue1X + blue1Size ||
    x + size >= blue2X && x <= blue2X + blue2Size
  ) {
    return r.Fade(r.RED, 0.7);
  }

  return r.WHITE;
}

function colorY(y) {
  if (y + size >= blue3Y && y <= blue3Y + blue3Size) {
    return r.Fade(r.RED, 0.7);
  }

  return r.WHITE;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(blue1X, blue1Y, blue1Size, height, r.BLUE);
  r.DrawRectangle(blue2X, blue2Y, blue2Size, height, r.BLUE);
  r.DrawRectangle(blue3X, blue3Y, width, blue3Size, r.BLUE);

  r.DrawRectangle(x1, 0, size, height, colorX(x1));
  r.DrawRectangle(x2, 0, size, height, colorX(x2));
  r.DrawRectangle(0, y3, width, size, colorY(y3));

  r.EndDrawing();
}

function update() {

  if (x1 + size >= width / 2 || x1 < 0) {
    speed1 = -speed1;
  }

  if (x2 + size > width || x2 < width / 2) {
    speed2 = -speed2;
  }

  if (y3 + size >= height || y3 < 0) {
    speed3 = -speed3;
  }

  x1 = x1 + speed1;
  x2 = x2 + speed2;
  y3 = y3 + speed3;
}

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  running,
  draw,
  update,
  teardown
};