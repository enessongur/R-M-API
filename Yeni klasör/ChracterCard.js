import React, { useState, useEffect } from 'react';

const CharacterDetails = ({ characterId }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then(data => setCharacter(data))
            .catch(error => console.error('Error:', error));
    }, [characterId]);

    if (!character) return <p>Loading character...</p>;

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            {/* Daha fazla karakter bilgisi eklenebilir */}
        </div>
    );
};

export default CharacterDetails;
