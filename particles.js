const r = require('raylib');

function create(particle) {
    return {
        x: particle.x,
        y: particle.y,
        width: particle.width,
        height: particle.height,
    };
}

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
    create,
    draw,
};
