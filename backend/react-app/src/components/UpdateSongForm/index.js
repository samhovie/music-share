import './UpdateSongForm.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateSongThunk } from '../../store/songs'
import { useModal } from '../../context/Modal'

const UpdateSongForm = ({ song }) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal()

    const [err, setErr] = useState({})
    const [name, setName] = useState(song.name);
    const [artist_name, setArtist_name] = useState(song.artist_name);
    const [genre, setGenre] = useState(song.genre );


    useEffect(() => {
        const errors = {}
        if (!name) errors.name = "Name is required"
        if (!artist_name) errors.artist_name = "Artist name is required"
        if (!genre) errors.genre = "Genre is required"
        setErr(errors)

    }, [name, artist_name, genre])

    const handleSubmit = async (e) => {
        e.preventDefault();



        const formData = new FormData();
        formData.append('id', song.id)
        console.log(song.id)
        formData.append('name', name);
        formData.append('artist_name', artist_name);
        formData.append('genre', genre);
        await dispatch(updateSongThunk(formData));

        closeModal();
    }


    if (!song) return null

    return (
        <>

            <div className='update-profile-outer-wrapper'>
                <div className='update-profile-inner-wrapper'>
                    <form
                        className='update-profile-form'
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                    >


                        <div className='upload-song-form-wrapped'>
                            <ul>



                            </ul>

                            <div className='upload-song-form-info'>

                                <div
                                    style={{ paddingBottom: '1rem' }}
                                >
                                    <div>
                                        <label style={{ paddingBottom: '.5rem' }}>
                                            &nbsp;Title
                                        </label>

                                    </div>
                                    <input
                                        className='upload-song-form-all-input upload-song-form-title'
                                        type='text'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        // required
                                        placeholder='Enter a name here'
                                    >
                                    </input>
                                    {err.name && <p className='errors'>{err.name}</p>}
                                </div>

                                <div
                                    style={{ paddingBottom: '1rem' }}
                                >
                                    <div>
                                        <label style={{ paddingBottom: '.5rem' }}>
                                            &nbsp;Author
                                        </label>

                                    </div>
                                    <input
                                        className='upload-song-form-all-input upload-song-form-title'
                                        type='text'
                                        value={artist_name}
                                        onChange={(e) => setArtist_name(e.target.value)}
                                        placeholder='Enter an artist name here'
                                    // required
                                    >

                                    </input>
                                    {err.artist_name && <p className='errors'>{err.artist_name}</p>}
                                </div>

                                <div
                                    style={{ paddingBottom: '1rem' }}
                                >

                                    <div>
                                        <label style={{ paddingBottom: '.5rem' }}>
                                            &nbsp;Genre
                                        </label>

                                    </div>
                                    <input
                                        className='upload-song-form-all-input upload-song-form-genre'
                                        type="text"
                                        value={genre}
                                        onChange={(e) => setGenre(e.target.value)}
                                        placeholder='Enter a genre here'
                                    // required
                                    >
                                    </input>
                                    {err.genre && <p className='errors'>{err.genre}</p>}
                                </div>
                                <div
                                >

                                    {/* <input
                                        type="file"
                                        accept="audio/*"
                                        onChange={(e) => setMp3(e.target.files[0])}
                                    /> */}


                                    <div className='upload-song-form-bottom'>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                        </div>
                                        <div className='upload-song-form-bottom-bar-button-div'>

                                            <button type='submit'>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}

export default UpdateSongForm
