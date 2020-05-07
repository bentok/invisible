
export const ASTEROID = {
    OFFSET: 5,
    LARGE: {
        IMGSRC: 'LargeAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 2,
            minVelocity: -2
        }
    },
    MEDIUM: {
        IMGSRC: 'MediumAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 3,
            minVelocity: -3
        }
    },
    SMALL: {
        IMGSRC: 'SmallAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 4,
            minVelocity: -4
        }
    }
};
