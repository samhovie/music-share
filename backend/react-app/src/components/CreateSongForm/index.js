import React, { useState } from "react";

export default function CreateSongForm() {
  const [name, setName] = useState('')
  const [is_public, setPublic] = useState(false)
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [mp3_file, setMp3] = useState('')
  const [genre, setGenre] = useState('')
  const [artist_name, setArtist_name] = useState('')
  const [id, setId] = useState('')

  // console.log('hello')


  const csrf = localStorage.getItem("csrf_token")
  let handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('mp3_file', mp3_file)
    formData.append('name', name)
    formData.append('artist_name', artist_name)
    formData.append('genre', genre)
    // const data = {
    //   name,
    //   artist_name,
    //   genre,
    //   'mp3_file': mp3_file
    // }
    // console.log(data)
    // console.log(formData)

    const response = await fetch(`/api/songs/new`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'X-CSRFToken': csrf
      },
      body: formData
      // body: data
    });

    if (response.ok) {
      const item = await response.json();
      // dispatch(add(item));
      console.log(item)
      return item;
    }

  }

//   const updateImage = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
// }

  return (
    <>
    <form action="/api/songs/new"
          method="POST"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
          >


      {/* <h1>Create a Song</h1>
      <form method='POST' onSubmit={handleSubmit}> */}
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
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Artist Name
          <input
            type="text"
            value={artist_name}
            onChange={(e) => setArtist_name(e.target.value)}
            required
          />
        </label>
        {/* <label>
          public
          <input
            type="checkbox"
            onChange={(e) => setPublic(!is_public)}
            checked={is_public}
            // required
          />
        </label> */}
        {/* <label>
          File
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label> */}
        <label>
          <input
           type="file"
           accept="image/*"
          onChange={(e) => setMp3(e.target.files[0])}
          >
          </input>
        </label>
        <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </label>
        {/* <label>
          <input
          type='text'
          // value={text}
          onChange={(e) => setText(e.target.value)}
          >
          </input>
        </label> */}
        <button type="submit">Create</button>
      </form>
    </>
  );
}
