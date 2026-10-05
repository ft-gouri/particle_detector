const r = require('raylib');

function draw(particle) {
    r.DrawRectangle(
        particle.x,
        particle.y,
        particle.width,
        particle.height,
        r.BLUE,
    );
}

module.exports = {
    draw,
};
