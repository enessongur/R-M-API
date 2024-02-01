import React, { useState, useEffect } from 'react';
import EpisodeDetails from './EpisodeDetails';
// src/index.js veya src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

const useRickAndMortyAPI = (page) => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEpisodes = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
                const data = await response.json();
                setEpisodes(data.results);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [page]);

    return { episodes, loading };
};

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { episodes, loading } = useRickAndMortyAPI(currentPage);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEpisodeId, setSelectedEpisodeId] = useState(null);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredEpisodes = searchTerm
        ? episodes.filter(episode => 
            episode.name.toLowerCase().includes(searchTerm)
          )
        : episodes;

    const handleEpisodeSelect = (episodeId) => {
        setSelectedEpisodeId(episodeId);
    };

    return (
        <div>
            <h1>Rick and Morty Episodes</h1>
            <input 
                type="text" 
                placeholder="Search episodes..." 
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {loading ? <p>Loading...</p> : filteredEpisodes.map(episode => (
                <div key={episode.id} onClick={() => handleEpisodeSelect(episode.id)}>
                    <h2>{episode.name}</h2>
                </div>
            ))}
            {selectedEpisodeId && <EpisodeDetails episodeId={selectedEpisodeId} />}
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
    );
};

export default App;