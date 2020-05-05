function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeCodename() {
    const [codenameParts1, codenameParts2] = require('./codename-parts');
    const codenamePart1 = codenameParts1[getRandomInt(0, codenameParts1.length + 1)];
    const codenamePart2 = codenameParts2[getRandomInt(0, codenameParts2.length + 1)];

    return `${codenamePart1}-${codenamePart2}`;
}

module.exports = { makeCodename }
