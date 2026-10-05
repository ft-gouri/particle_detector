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

function overlap(detector, range1, range2) {
    const overlap1 = isOutOfBounds(detector, range1);
    if (!range2) {
        return overlap1;
    }
    const overlap2 = isOutOfBounds(detector, range2);
    return overlap1 || overlap2;
}

module.exports = {
    create,
    isOutOfBounds,
    overlap,
};
