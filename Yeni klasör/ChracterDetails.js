import React, { useState, useEffect } from 'react';

const CharacterDetails = ({ characterId }) => {
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async() => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character:', error);
                setCharacter(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacter();
    }, [characterId]);

    if (isLoading) return <p> Loading character... </p>;
    if (!character) return <p> Character not found. </p>;

    return ( 
        <div>
        <h2> 
            { character.name } </h2> <
        img src = { character.image }
        alt = { character.name }
        style = {
            { width: '200px', height: '200px' } }
        /> 
        <p> Species: { character.species } </p> 
        <p> Status: { character.status } </p> { /* Burada daha fazla karakter bilgisi eklenebilir */ }
        </div>
);
};

export default CharacterDetails;