import React, { useState } from "react";

export default function CreateSongForm() {
  const [name, setName] = useState('')
  const [is_public, setPublic] = useState(false)
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  // const [mp3_file, setMp3] = useState('')
  // const [genre, setGenre] = useState('')
  const [id, setId] = useState('')



  const csrf = localStorage.getItem("csrf_token")
  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      text

    }
    // console.log(data)

    const response = await fetch(`/api/songs/2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf
      },
      body: JSON.stringify(data)
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
      <form method='POST' onSubmit={handleSubmit}>
        {/* <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul> */}
        {/* <label>
          id
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label> */}
        {/* <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          public
          <input
            type="checkbox"
            onChange={(e) => setPublic(!is_public)}
            checked={is_public}
            // required
          />
        </label>
        <label>
          File
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label> */}
        {/* <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </label> */}
        <label>
          <input
          type='text'
          // value={text}
          onChange={(e) => setText(e.target.value)}
          >
          </input>
        </label>
        <button type="submit">Create</button>
      </form>
    </>
  );
}
