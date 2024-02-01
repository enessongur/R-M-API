import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(20); // Sayfa başına karakter sayısı
    const [totalCharacters, setTotalCharacters] = useState(0);

    useEffect(() => {
        const fetchCharacters = async () => {
            // API'den karakterleri çekme işlemi
            // Örnek: `https://rickandmortyapi.com/api/character?page=${currentPage}`
            // API'den dönen veriyi kullanarak state'i güncelleyin
        };

        fetchCharacters();
    }, [currentPage]);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);

    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Karakterler</h1>
            <div>
                {currentCharacters.map(character => (
                    <div key={character.id}>
                        <h3>{character.name}</h3>
                        {/* Burada karakter detayları ve resmi eklenebilir */}
                    </div>
                ))}
            </div>
            <Pagination 
                itemsPerPage={charactersPerPage} 
                totalItems={totalCharacters} 
                paginate={handlePaginate}
                currentPage={currentPage} 
            />
        </div>
    );
};

export default CharactersPage;
