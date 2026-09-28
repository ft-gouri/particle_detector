const r = require('raylib');
const pv = require('./particle_fields');
const sv = require('./scanners');

function setup() {
    r.InitWindow(sv.width, sv.height, 'Particle Scanner');
    r.SetTargetFPS(60);
}
//overlaps
function chooseColor(x, field, fSize) {
    let colour = r.WHITE;
    return x + sv.size >= field && x <= field + fSize
        ? (colour = r.RED)
        : colour;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(pv.field1X, pv.field1Y, pv.field1Size, sv.height, r.BLUE);
    r.DrawRectangle(pv.field2X, pv.field2Y, pv.field2Size, sv.height, r.BLUE);
    r.DrawRectangle(pv.field3X, pv.field3Y, sv.width, pv.field3Size, r.BLUE);

    r.DrawRectangle(
        sv.startScannerV1,
        0,
        sv.size,
        sv.height,
        chooseColor(sv.startScannerV1, pv.field1X, pv.field1Size),
    );
    r.DrawRectangle(
        sv.startScannerV2,
        0,
        sv.size,
        sv.height,
        chooseColor(sv.startScannerV2, pv.field2X, pv.field2Size),
    );
    r.DrawRectangle(
        0,
        sv.startScannerH3,
        sv.width,
        sv.size,
        chooseColor(sv.startScannerH3, pv.field3Y, pv.field3Size),
    );

    r.EndDrawing();
}
function move(x, speed) {
    return x + speed;
}
function direction() {
    // return x + size >= upper || x < lower ? -speed : speed;
    sv.startScannerV1 + sv.size >= sv.width / 2 || sv.startScannerV1 < 0
        ? (sv.speed1 = -sv.speed1)
        : sv.speed1;
    sv.startScannerV2 + sv.size > sv.width || sv.startScannerV2 < sv.width / 2
        ? (sv.speed2 = -sv.speed2)
        : sv.speed2;
    sv.startScannerH3 + sv.size >= sv.height || sv.startScannerH3 < 0
        ? (sv.speed3 = -sv.speed3)
        : sv.speed3;
}
function update() {
    direction();

    sv.startScannerV1 = move(sv.startScannerV1, sv.speed1);
    sv.startScannerV2 = move(sv.startScannerV2, sv.speed2);
    sv.startScannerH3 = move(sv.startScannerH3, sv.speed3);
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
