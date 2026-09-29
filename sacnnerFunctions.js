const r = require('raylib');

function move(x, speed) {
    return x + speed;
}

function direction(x, size, upper, lower, speed) {
    return x + size >= upper || x < lower ? -speed : speed;
}
function isOutOfBounds(x, size, field, fSize) {
    return x + size >= field && x <= field + fSize;
}

function overlap(x, size, field, fSize) {
    return isOutOfBounds(x, size, field, fSize);
}

function chooseColor(x, size, field, fSize) {
    return overlap(x, size, field, fSize) ? r.RED : r.WHITE;
}
module.exports = {
    move,
    direction,
    isOutOfBounds,
    overlap,
    chooseColor,
};
