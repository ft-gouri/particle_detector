const r = require('raylib');
const w = require('./window');
const p = require('./particles');
const scanners = require('./scanner');
const lib = require('./scannerLib');

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.WIDTH, w.HEIGHT, 'Particle Scanner');
    r.SetTargetFPS(60);
}

function update() {
    updateScanner(scanners.s1);
    updateScanner(scanners.s2);
    updateScanner(scanners.s3);
}

function updateScanner(s) {
    s.speed = lib.direction(s.start, s.width, s.end, s.y, s.speed);
    s.start = lib.move(s.start, s.speed);
}

function drawRange(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawRange(p.field1X, p.field1Y, p.field1Size, w.HEIGHT, r.BLUE);
    drawRange(p.field2X, p.field2Y, p.field2Size, w.HEIGHT, r.BLUE);
    drawRange(p.field3X, p.field3Y, w.WIDTH, p.field3Size, r.BLUE);
    drawRange(
        scanners.s1.start,
        0,
        scanners.s1.width,
        w.HEIGHT,
        lib.chooseColor(
            scanners.s1.start,
            scanners.s1.width,
            p.field1X,
            p.field1Size,
        ),
    );
    drawRange(
        scanners.s2.start,
        0,
        scanners.s2.width,
        w.HEIGHT,
        lib.chooseColor(
            scanners.s2.start,
            scanners.s2.width,
            p.field2X,
            p.field2Size,
        ),
    );
    drawRange(
        0,
        scanners.s3.start,
        w.WIDTH,
        scanners.s3.width,
        lib.chooseColor(
            scanners.s3.start,
            scanners.s3.width,
            p.field3Y,
            p.field3Size,
        ),
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
    setup,
    running,
    draw,
    update,
    teardown,
};
