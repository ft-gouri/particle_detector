function create(particle) {
    return {
        x: particle.x,
        y: particle.y,
        width: particle.width,
        height: particle.height,
    };
}

function isOutOfBounds(detector, range) {
    if (detector.direction === 'x') {
        return (
            detector.x + detector.width >= range.x &&
            detector.x <= range.x + range.width
        );
    }

    return (
        detector.y + detector.height >= range.y &&
        detector.y <= range.y + range.height
    );
}

function overlap(detector, ranges) {
    return ranges.some((range) => isOutOfBounds(detector, range));
}

module.exports = {
    create,
    isOutOfBounds,
    overlap,
};
