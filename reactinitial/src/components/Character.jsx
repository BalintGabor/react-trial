import React from 'react'

function Character ({characters}) {
    return characters.map((character, index) => (
        <>
            <h2 key={index}>{character.name}</h2>
            <p>{character.details}</p>
            <button>Show more</button>
        </>
    ));
}

export default Character