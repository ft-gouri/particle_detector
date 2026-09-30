const r = require('raylib');
const scLib = require('./scannerLib');

const WIDTH = 300;
const HEIGHT = 200;
const MID = WIDTH / 2;

const particle1 = { x: 100, y: 0, width: 50 };
const particle2 = { x: 200, y: 0, width: 5 };
const particle3 = { x: 0, y: 80, width: 20 };

const s1 = { start: 0, end: MID, speed: 0.5, width: 20, y: 0 };
const s2 = { start: MID, end: WIDTH, speed: 2, width: 20, y: MID };
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
    s.speed = scLib.determineDirection(s.start, s.width, s.end, s.y, s.speed);
    s.start = scLib.move(s.start, s.speed);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1.x, particle1.y, particle1.width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle2.x, particle2.y, particle2.width, HEIGHT, r.BLUE);
    r.DrawRectangle(particle3.x, particle3.y, WIDTH, particle3.width, r.BLUE);

    const color1 = scLib.determineColor(
        s1.start,
        s1.width,
        particle1.x,
        particle1.width,
        particle2.x,
        particle2.width,
    );
    r.DrawRectangle(s1.start, 0, s1.width, HEIGHT, color1);

    const color2 = scLib.determineColor(
        s2.start,
        s2.width,
        particle2.x,
        particle2.width,
        particle1.x,
        particle1.width,
    );
    r.DrawRectangle(s2.start, 0, s2.width, HEIGHT, color2);

    const color3 = scLib.determineColor(
        s3.start,
        s3.width,
        particle3.y,
        particle3.width,
    );
    r.DrawRectangle(0, s3.start, WIDTH, s3.width, color3);

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
