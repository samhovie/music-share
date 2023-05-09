import React, { useState } from "react";

export default function CreateSongForm() {
  const [name, setName] = useState('')
  const [artist_name, setArtist] = useState('')
  const [mp3_file, setMp3] = useState('')
  const [genre, setGenre] = useState('')
  const [id, setId] = useState(1)


  const csrf = localStorage.getItem("csrf_token")
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      artist_name,
      mp3_file,
      genre
    }

    const response = await fetch(`/api/songs/${id}`, {
      method: 'DELETE',
      headers: {
        'X-CSRFToken': csrf,
      }
    });

    if (response.ok) {
      const item = await response.json();
      // dispatch(add(item));
      console.log(item)
      return item;
    }

  }
  return (
    <>
      <h1>Create a Song</h1>
      <form method='DELETE' onSubmit={handleSubmit}>
        {/* <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul> */}
        <label>
          id
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        {/* <label>
          Artist
          <input
            type="text"
            value={artist_name}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </label>
        <label>
          File
          <input
            type="text"
            value={mp3_file}
            onChange={(e) => setMp3(e.target.value)}
            required
          />
        </label>
        <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </label> */}
        <button type="submit">Delete</button>
      </form>
    </>
  );
}
