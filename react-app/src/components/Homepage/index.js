import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getAllSongs = async () => {
            const res = await fetch('/api/songs');
            const data = await res.json();
            console.log(data)
            setSongs(data.songs);
        };

        getAllSongs();
    }, []);
//{artist_id: 2, genre: 'Rock', id: 2, mp3_file: 'song2.mp3', name: 'Karma'}
    return (
        <>
        <h1>This music will blow your mind</h1>
        <div>
            {songs.map(song => (
                <div key={song.id}>
                    <p>{song.artist_id}</p>
                    <h3>{song.name}</h3>
                    <p>{song.genre}</p>
                    <p>{song.mp3_file}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default Homepage
