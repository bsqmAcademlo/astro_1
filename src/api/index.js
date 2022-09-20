async function getCharacters() {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await data.json();

    return results;
}

async function getCharacter(id) {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const response = await data.json();

    return response;
}

export { getCharacters, getCharacter };
