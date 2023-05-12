import { useDispatch, useSelector } from 'react-redux'
import './SongUpload.css'
import { useState } from 'react'
import { createSongThunk } from '../../store/songs'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SongUpload = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [is_public, setPublic] = useState(false)
    const [description, setDescription] = useState('')
    const [text, setText] = useState('')
    const [mp3_file, setMp3] = useState('')
    const [genre, setGenre] = useState('')
    const [artist_name, setArtist_name] = useState('')
    const [id, setId] = useState('')

    const sessionUser = useSelector((state) => state.session.user);
    const current_user = sessionUser.username;
    console.log(current_user)

    // const fileUploadClickHandler = (e) => {
    //     e.preventDefault()



    // }

    // const csrf = localStorage.getItem("csrf_token")

    // let audio = ''

    let handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('mp3_file', mp3_file)
        formData.append('name', name)
        formData.append('artist_name', current_user)
        formData.append('genre', genre)
        // formData.append('description', description)

        dispatch(createSongThunk(formData))
        history.push('/feed')
    }

    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='upload-song-outer-wrapper'>
                        <div className='upload-song-inner-wrapper'>
                            <form
                                className='upload-song-form'
                                action="/api/songs/new"
                                method="POST"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit}
                            >
                                <div className='upload-song-form-wrapped'>

                                    <div className='upload-song-form-upload'>
                                        <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
                                    </div>
                                    {/* style={{ paddingBottom: '1rem' }} */}
                                    <div className='upload-song-form-info'>

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Title
                                                </label>

                                            </div>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-title'
                                                type='text'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            >

                                            </input>
                                        </div>

                                        {/* <div
                                            style={{ paddingBottom: '1rem' }}
                                        >
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Author
                                                </label>

                                            </div>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-title'
                                                type='text'
                                                value={artist_name}
                                                onChange={(e) => setArtist_name(e.target.value)}
                                                required
                                            >

                                            </input>
                                        </div> */}

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >

                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Genre
                                                </label>

                                            </div>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-genre'
                                                type="text"
                                                value={genre}
                                                onChange={(e) => setGenre(e.target.value)}
                                                required
                                            >
                                            </input>
                                        </div>

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Description
                                                </label>

                                            </div>
                                            <textarea id="story" name="story"
                                                rows="5" cols="40"
                                                type="text"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required
                                            >
                                            </textarea>

                                        </div>
                                        <div>
                                            <label>
                                                <input
                                                    type="file"
                                                    accept="audio/*"
                                                    onChange={(e) => setMp3(e.target.files[0])}
                                                >
                                                </input>
                                            </label>

                                        </div>

                                        {/* <div
                                            style={{ paddingBottom: '4rem' }}
                                        >
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.8rem' }}>
                                                    &nbsp;Privacy:
                                                </label>

                                            </div>
                                            <div style={{ paddingBottom: '1rem' }}>
                                                <input type='radio' id='public' value='public'></input>
                                                <label for='public'>Public</label>

                                            </div>
                                            <div>
                                                <input type='radio' id='private' value='private'></input>
                                                <label for='private'>Private</label>

                                            </div>

                                        </div> */}



                                        {/* <button onClick={(e) => fileUploadClickHandler(e)}>Choose a file to upload</button> */}
                                        <div className='upload-song-form-bottom'>
                                            {/* <div className='upload-song-form-bottom-bar'> */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
                                                <h5>&nbsp;Required fields</h5>
                                            </div>
                                            <div className='upload-song-form-bottom-bar-button-div'>

                                                <button type='submit'>Save</button>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default SongUpload
