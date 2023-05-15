import { useDispatch, useSelector } from 'react-redux'
import './SongUpload.css'
import { useState, useEffect } from 'react'
import { createSongThunk } from '../../store/songs'
import { useHistory } from 'react-router-dom'
import Upload from '../UploadImg';

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
    const [preview_img, setPreviewImg] = useState('')
    const [id, setId] = useState('')
    const [err, setErr] = useState({})
    const [displayErr, setDisplayErr] = useState(false)
    const [isFetching, setIsFetching] = useState(false)

    const sessionUser = useSelector((state) => state.session.user);
    const current_user = sessionUser.display_name;

    useEffect(() => {
        const errors = {}
        // console.log("TYPEOFFFFF", typeof(mp3_file))
        // console.log("RIGHT UNDER", console.log(mp3_file))

        if (!name) errors.name = "Name is required"
        if (!description) errors.description = "Description is required"
        if (!genre) errors.genre = "Genre is required"
        if (!artist_name) errors.artist_name = "Artist is required"
        if (!mp3_file) errors.mp3_file = "Song should be uploaded"
        if (mp3_file && !mp3_file.name.endsWith('.wav') && !mp3_file.name.endsWith('.mp3') && !mp3_file.name.endsWith('.acc') && !mp3_file.name.endsWith('.aiff')) errors.mp3_file = "Unsupported file. Upload a '.wav', '.mp3', '.acc', or '.aiff' file"
        // if (!img.endsWith('.png') && !img.endsWith('.jpg') && !img.endsWith('.jpeg')) errors.img = "Image URL needs to end in jpg or png"
        setErr(errors)
    }, [name, description, genre, artist_name, mp3_file])

    const alertClick = () => {
        alert('Feature coming soon!')
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.keys(err).length > 0) {
            setDisplayErr(true)
        }
        else {
            const formData = new FormData()
            formData.append('mp3_file', mp3_file)
            formData.append('name', name)
            formData.append('artist_name', current_user)
            formData.append('genre', genre)
            formData.append('preview_img', preview_img)
            formData.append('description', description)

            setIsFetching(true);
           await dispatch(createSongThunk(formData))

            setTimeout(function () {
                console.log("Delayed for 5 second.");
                setIsFetching(false);
            }, 5000);
            history.push('/songs/current')
        }
    }

    return (
        <> {
            isFetching ?
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='upload-song-outer-wrapper'>
                        <div className='upload-song-inner-wrapper'>
                            <h1>
                            LOADING. . .
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            :
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
                                        {/* <img src='https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img> */}
                                        {/* <ul>
                                        {displayErr === true && err.name && (<li className="errors">· {err.name}</li>)}
                                        {displayErr === true && err.artist_name && (<li className="errors">· {err.artist_name}</li>)}
                                        {displayErr === true && err.genre && (<li className="errors">· {err.genre}</li>)}
                                        {displayErr === true && err.description && (<li className="errors">· {err.description}</li>)}
                                        {displayErr === true && err.mp3_file && (<li className="errors">· {err.mp3_file}</li>)}
                                        </ul> */}
                                        <input
                                            type='image'
                                            src='https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                            onClick={alertClick}
                                        >

                                        </input>
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
                                                placeholder='Enter a title'
                                                onChange={(e) => setName(e.target.value)}
                                                // required
                                            >

                                            </input>
                                        </div>
                                        {displayErr === true && err.name && (<div className="errors">· {err.name}</div>)}

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Artist Name
                                                </label>

                                            </div>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-title'
                                                type='text'
                                                value={artist_name}
                                                onChange={(e) => setArtist_name(e.target.value)}
                                                placeholder='Enter artist name here'
                                                // required
                                            >

                                            </input>
                                        </div>
                                        {displayErr === true && err.artist_name && (<div className="errors">· {err.artist_name}</div>)}

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
                                                placeholder='Enter genre here'
                                                // required
                                            >
                                            </input>
                                        </div>
                                        {displayErr === true && err.genre && (<div className="errors">· {err.genre}</div>)}

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
                                                placeholder='Enter a description here'
                                                onChange={(e) => setDescription(e.target.value)}
                                                // required
                                            >
                                            </textarea>
                                            {displayErr === true && err.description && (<div className="errors">· {err.description}</div>)}

                                        </div>
                                        <label>
                                            {/* Preview Image */}
                                            {/* <input
                                                type="file"
                                                accept=".jpg, .jpeg, .png, .gif"
                                                onChange={(e) => setPreviewImg(e.target.files[0])}
                                            >
                                            </input> */}
                                            {/* <label>
                                                Preview Image:
                                                <Upload onChange={(e) => setPreviewImg(e.target.files[0])} />
                                            </label> */}
                                        </label>
                                        <div>
                                            <label style={{ display: 'flex', flexDirection: 'column' }}>
                                                Audio File:
                                                <input
                                                    type="file"
                                                    accept="audio/*"
                                                    onChange={(e) => setMp3(e.target.files[0])}
                                                >
                                                </input>
                                            </label>

                                        </div>
                                        {displayErr === true && err.mp3_file && (<div className="errors">· {err.mp3_file}</div>)}

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
        }
        </>

    )
}


export default SongUpload
