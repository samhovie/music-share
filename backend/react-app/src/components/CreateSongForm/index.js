import React, { useState } from "react";

export default function CreateSongForm() {
  const [name, setName] = useState('')
  // const [is_public, setPublic] = useState(false)
  // const [description, setDescription] = useState('')
  // const [text, setText] = useState('')
  const [mp3_file, setMp3] = useState('')
  const [genre, setGenre] = useState('')
  const [artist_name, setArtist_name] = useState('')
  const [preview_img, setPreviewImg] = useState('')
  // const [id, setId] = useState('')


  const csrf = localStorage.getItem("csrf_token")

  let audio = ''

  let handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('mp3_file', mp3_file)
    formData.append('name', name)
    formData.append('artist_name', artist_name)
    formData.append('genre', genre)
    formData.append('preview_img', preview_img)


    const response = await fetch(`/api/songs/new`, {
      method: 'DELETE',
      headers: {
        'X-CSRFToken': csrf
      },
      body: formData
    });

    if (response.ok) {
      const item = await response.json();
      audio = new Audio(item['mp3_file'])
      return item;
    }


  }



  const start = () => {
    audio.play()
  }


  return (
    <>
      < div >
        <button onClick={start}>Play</button>
      </div >

      <form
        action="/api/songs/new"
        method="POST"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >


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

        <label>
          <input
            type="file"
            accept="audio/*"
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
        <label>
          Preview Image
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPreviewImg(e.target.files[0])}
          >
          </input>
        </label>

        <button type="submit">Create</button>
      </form>
    </>
  );
}
