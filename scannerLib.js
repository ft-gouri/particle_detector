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

function overlap(x, size, field1, f1Size, field2, f2Size) {
    const overlap_f1 = isOutOfBounds(x, size, field1, f1Size);
    const overlap_f2 = isOutOfBounds(x, size, field2, f2Size);
    return overlap_f1 || overlap_f2;
}

function chooseColor(x, size, field, fSize, field2, f2Size) {
    return overlap(x, size, field, fSize, field2, f2Size) ? r.RED : r.WHITE;
}
module.exports = {
    move,
    direction,
    isOutOfBounds,
    overlap,
    chooseColor,
};
