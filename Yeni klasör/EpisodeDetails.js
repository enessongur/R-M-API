import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';

const EpisodeDetails = ({ episode }) => {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterSelect = (id) => {
        setSelectedCharacterId(id);
    }; 

    return (
        <div>
            <h2>{episode.name}</h2>
            <div>
                {episode.characters.map(characterUrl => {
                    const characterId = characterUrl.split("/").pop();
                    return (
                        <div key={characterId} onClick={() => handleCharacterSelect(characterId)}>
                            <CharacterCard characterId={characterId} />
                        </div>
                    );
                })}
            </div>
            {selectedCharacterId && <CharacterDetails characterId={selectedCharacterId} />}
        </div>
    );
};

export default EpisodeDetails;