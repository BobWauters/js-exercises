const movies = [
    `The Conjuring 3`,
    `Tom & Jerry`,
    `Cruella`,
    `K3: Dans van de farao`,
    `Freaky`,
    `A quiet place 2`,
    `Voyages`,
    `Demon Slayer: Mugan Train`,
    `Sons of Philadelphia`,
    `Drunk`,
];

document.write(`<ul>`);
for (let i = 0; i < movies.length; i++) {
    document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ul>`);
