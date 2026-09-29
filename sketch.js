const r = require('raylib');
const lib = require('./scannerLib');

const WIDTH = 300;
const HEIGHT = 200;

const f1 = { x: 100, y: 0, width: 50 };
const f2 = { x: 200, y: 0, width: 5 };
const f3 = { x: 0, y: 80, width: 20 };

const s1 = { start: 0, end: WIDTH / 2, speed: 0.5, width: 20, y: 0 };
const s2 = {
    start: WIDTH / 2,
    end: WIDTH,
    speed: 2,
    width: 20,
    y: WIDTH / 2,
};
const s3 = { start: 0, end: HEIGHT, speed: 3, width: 20, y: 0 };

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function update() {
    updateScanner(s1);
    updateScanner(s2);
    updateScanner(s3);
}

function updateScanner(s) {
    s.speed = lib.direction(s.start, s.width, s.end, s.y, s.speed);
    s.start = lib.move(s.start, s.speed);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(f1.x, f1.y, f1.width, HEIGHT, r.BLUE);
    r.DrawRectangle(f2.x, f2.y, f2.width, HEIGHT, r.BLUE);
    r.DrawRectangle(f3.x, f3.y, WIDTH, f3.width, r.BLUE);
    r.DrawRectangle(
        s1.start,
        0,
        s1.width,
        HEIGHT,
        lib.chooseColor(s1.start, s1.width, f1.x, f1.width, f2.x, f2.width),
    );
    r.DrawRectangle(
        s2.start,
        0,
        s2.width,
        HEIGHT,
        lib.chooseColor(s2.start, s2.width, f2.x, f2.width, f1.x, f1.width),
    );
    r.DrawRectangle(
        0,
        s3.start,
        WIDTH,
        s3.width,
        lib.chooseColor(s3.start, s3.width, f3.y, f3.width),
    );

    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    WIDTH,
    HEIGHT,
    setup,
    running,
    draw,
    update,
    teardown,
};
