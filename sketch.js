const r = require('raylib');
const w = require('./window');
const particle = require('./particles');
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

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(
        particle.f1.x,
        particle.f1.y,
        particle.f1.width,
        w.HEIGHT,
        particle.f1.color,
    );
    r.DrawRectangle(
        particle.f2.x,
        particle.f2.y,
        particle.f2.width,
        w.HEIGHT,
        particle.f2.color,
    );
    r.DrawRectangle(
        particle.f3.x,
        particle.f3.y,
        w.WIDTH,
        particle.f3.width,
        particle.f3.color,
    );
    r.DrawRectangle(
        scanners.s1.start,
        0,
        scanners.s1.width,
        w.HEIGHT,
        lib.chooseColor(
            scanners.s1.start,
            scanners.s1.width,
            particle.f1.x,
            particle.f1.width,
        ),
    );
    r.DrawRectangle(
        scanners.s2.start,
        0,
        scanners.s2.width,
        w.HEIGHT,
        lib.chooseColor(
            scanners.s2.start,
            scanners.s2.width,
            particle.f2.x,
            particle.f2.width,
        ),
    );
    r.DrawRectangle(
        0,
        scanners.s3.start,
        w.WIDTH,
        scanners.s3.width,
        lib.chooseColor(
            scanners.s3.start,
            scanners.s3.width,
            particle.f3.y,
            particle.f3.width,
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
