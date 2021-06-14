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

// TODO: Review and Redo again (not quite understandable)
/*
movies.reverse();
document.write(`<ul>`);
for (let i = 0; i < movies.length; i++) {
    document.write(`<li>${movies[i]}</li>`);
}
document.write(`</ul>`);
*/

/*
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const moviesReverse = movies.reverse();

const lowerCaseMovies = movies.map(movies => movies.toLowerCase());

lowerCaseMovies.forEach(moviesReverse => document.write(wrapWithTag(moviesReverse)));
*/
const wrapWithTag = (content, tagname) => {
    return `<${tagname}>${content}</${tagname}>`;
};
const parseTitle = title => {
    const lowerTitle = title.toLowerCase();
    const wrapped = wrapWithTag(lowerTitle, `li`);
    return wrapped;
};

document.write(`<ol>`);
for (let i = movies.length-1; i>=0; i--) {
    document.write(parseTitle(movies[i]));
}
document.write(`</ol>`);