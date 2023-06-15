import './UpdateSongForm.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateSongThunk } from '../../store/songs'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useModal } from '../../context/Modal'

const UpdateSongForm = ({ song }) => {
    // const songId = song.id



    const dispatch = useDispatch()
    // const history = useHistory()
    const { closeModal } = useModal()

    // const song = useSelector(state => state.songs.singleSong)

    const [err, setErr] = useState({})
    const [name, setName] = useState(song.name);
    const [artist_name, setArtist_name] = useState(song.artist_name);
    const [genre, setGenre] = useState(song.genre );
    // const [mp3_file, setMp3] = useState(song.mp3_file);
    // const [mp3_file_name, setMp3FileName] = useState(song.mp3_file || '');







    useEffect(() => {
        const errors = {}
        if (!name) errors.name = "Name is required"
        if (!artist_name) errors.artist_name = "Artist name is required"
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
        // formData.append('artist_id', artist_id);
        // formData.append('preview_img', preview_img);
        // formData.append('mp3_file', mp3_file);

        // console.log(formData)
        await dispatch(updateSongThunk(formData));

        closeModal();
        // if (updatedSong) {
        // history.push(`/songs/${songId}`);
        // }
    }


    if (!song) return null

    return (
        <>

            <div className='update-profile-outer-wrapper'>
                <div className='update-profile-inner-wrapper'>
                    <form
                        // className='update-profile-form'
                        // action={`/api/songs/${songId}`}
                        // method="PUT"
                        // encType="multipart/form-data"
                        // onSubmit={handleSubmit}
                        className='update-profile-form'
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                    >


                        <div className='upload-song-form-wrapped'>
                            <ul>
                                {err.name && <li>{err.name}</li>}
                                {err.artist_name && <li>{err.artist_name}</li>}
                                {err.genre && <li>{err.genre}</li>}
                                {/* {err.preview_img && <li>{err.preview_img}</li>} */}
                            </ul>

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
                                        // required
                                        placeholder='Enter a name here'
                                    >
                                    </input>
                                </div>

                                <div
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
                                        placeholder='Enter an artist name here'
                                    // required
                                    >

                                    </input>
                                </div>

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
                                        placeholder='Enter a genre here'
                                    // required
                                    >
                                    </input>
                                </div>
                                <div
                                    style={{ paddingBottom: '1rem' }}
                                >

                                    {/* <input
                                        type="file"
                                        accept="audio/*"
                                        onChange={(e) => setMp3(e.target.files[0])}
                                    /> */}


                                    <div className='upload-song-form-bottom'>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
                                            <h5>&nbsp;Required fields</h5>
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

// import './UpdateSongForm.css'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateSongThunk, getSongThunk } from '../../store/songs'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { useModal } from '../../context/Modal'

// const UpdateSongForm = ({ songId }) => {
//     const dispatch = useDispatch()
//     const history = useHistory()
//     const { closeModal } = useModal()

//     const song = useSelector(state => state.songs.singleSong)

//     const [name, setName] = useState('')
//     const [is_public, setPublic] = useState(false)
//     // const [description, setDescription] = useState('')
//     const [text, setText] = useState('')
//     const [mp3_file, setMp3] = useState(null)
//     const [mp3_file_name, setMp3FileName] = useState('')
//     const [genre, setGenre] = useState('')
//     const [artist_name, setArtist_name] = useState('')
//     const [id, setId] = useState('')
//     const [preview_img, setPreviewImg] = useState('')

//     // useEffect(() => {
//     //     const fetchSongDetails = async () => {
//     //         const songData = await dispatch(getSongThunk(songId));

//     //         setName(songData.name)
//     //         setPublic(songData.is_public)
//     //         // setDescription(songData.description)
//     //         setText(songData.text)
//     //         setMp3FileName(songData.mp3_file_name)
//     //         setGenre(songData.genre)
//     //         setArtist_name(songData.artist_name)
//     //         setId(songData.id)
//     //         setPreviewImg(song.preview_img || '')
//     //     }

//     //     fetchSongDetails();
//     // }, [dispatch, songId]);
//     const [formData, setFormData] = useState({
//         name: '',
//         artist_name: '',
//         artist_id: '',
//         description: '',
//         // preview_img: ''
//     });

//     const handleFileChange = (e) => {
//         setMp3(e.target.files[0])
//         setMp3FileName(e.target.files[0].name)
//     }
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const updatedSong = await dispatch(updateSongThunk(songId, formData));
//          (updatedSong);
//         closeModal();
//         if (updatedSong) {
//             history.push(`/songs/${songId}`);
//         }
//     }

//     // let handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const formData = new FormData()
//     //     formData.append('mp3_file', mp3_file)
//     //     formData.append('name', name)
//     //     formData.append('artist_name', artist_name)
//     //     formData.append('genre', genre)
//     //     formData.append('preview_img', preview_img)
//     //     // formData.append('description', description)
//     //     dispatch(updateSongThunk(formData, songId))
//     //     closeModal()
//     //     history.push('/profile')
//     // }

//     return (
//         <>
//             <div className='global-outerwrapper-outer'>
//                 <div className='global-outerwrapper-wrapper'>
//                     <div className='upload-song-outer-wrapper'>
//                         <div className='upload-song-inner-wrapper'>
//                             <form
//                                 className='upload-song-form'
//                                 action={`/api/songs/${songId}`}
//                                 method="PUT"
//                                 encType="multipart/form-data"
//                                 onSubmit={handleSubmit}
//                             >
//                                 <div className='upload-song-form-wrapped'>

//                                     <div className='upload-song-form-upload'>
//                                         <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
//                                     </div>
//                                     <div className='upload-song-form-info'>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Title
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-title'
//                                                 type='text'
//                                                 value={formData.name}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                             </input>
//                                         </div>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Author
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-title'
//                                                 type='text'
//                                                 value={formData.artist_name}
//                                                 onChange={handleChange}
//                                                 required
//                                             >

//                                             </input>
//                                         </div>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >

//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Genre
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-genre'
//                                                 type="text"
//                                                 value={formData.genre}
//                                                 onChange={handleChange}
//                                                 required
//                                             >
//                                             </input>
//                                         </div>
//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Preview Image URL
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-img-url'
//                                                 type='text'
//                                                 value={formData.preview_img}
//                                                 onChange={handleChange}
//                                                 required
//                                             >

//                                             </input>
//                                         </div>

//                                         {/* <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Description
//                                                 </label>

//                                             </div>
//                                             <textarea id="story" name="story"
//                                                 rows="5" cols="40"
//                                                 type="text"
//                                                 value={description}
//                                                 onChange={(e) => setDescription(e.target.value)}
//                                                 required
//                                             >
//                                             </textarea>

//                                         </div> */}
//                                         <div>
//                                             <label>
//                                                 {mp3_file_name || "No file chosen"}
//                                                 <input
//                                                     type="file"
//                                                     accept="audio/*"
//                                                     onChange={handleFileChange}
//                                                 >
//                                                 </input>
//                                             </label>

//                                         </div>

//                                         <div className='upload-song-form-bottom'>
//                                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                                 <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <h5>&nbsp;Required fields</h5>
//                                             </div>
//                                             <div className='upload-song-form-bottom-bar-button-div'>

//                                                 <button type='submit'>Save</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default UpdateSongForm






// import './UpdateSongForm.css'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { updateSongThunk } from '../../store/songs'
// import { getSongThunk } from '../../store/songs'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { useModal } from '../../context/Modal'


// const UpdateSongForm = ({ songId }) => {
//     const dispatch = useDispatch()
//     const history = useHistory()
//     const { closeModal } = useModal()
//     const [name, setName] = useState('')
//     const [is_public, setPublic] = useState(false)
//     const [description, setDescription] = useState('')
//     const [text, setText] = useState('')
//     const [mp3_file, setMp3] = useState('')
//     const [genre, setGenre] = useState('')
//     const [artist_name, setArtist_name] = useState('')
//     const [id, setId] = useState('')

//     let handleSubmit = async (e) => {
//         //  ("--------------------TEST 1----------------------")
//         e.preventDefault();
//         const formData = new FormData()
//         formData.append('mp3_file', mp3_file)
//         formData.append('name', name)
//         formData.append('artist_name', artist_name)
//         formData.append('genre', genre)
//         // formData.append('description', description)
//         dispatch(updateSongThunk(formData, songId))
//         closeModal()
//         history.push('/profile')
//     }

//     return (
//         <>
//             <div className='global-outerwrapper-outer'>
//                 <div className='global-outerwrapper-wrapper'>
//                     <div className='upload-song-outer-wrapper'>
//                         <div className='upload-song-inner-wrapper'>
//                             <form
//                                 className='upload-song-form'
//                                 action={`/api/songs/${songId}`}
//                                 method="PUT"
//                                 encType="multipart/form-data"
//                                 onSubmit={handleSubmit}
//                             >
//                                 <div className='upload-song-form-wrapped'>

//                                     <div className='upload-song-form-upload'>
//                                         <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
//                                     </div>
//                                     {/* style={{ paddingBottom: '1rem' }} */}
//                                     <div className='upload-song-form-info'>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Title
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-title'
//                                                 type='text'
//                                                 value={name}
//                                                 onChange={(e) => setName(e.target.value)}
//                                                 // placeholder={name}
//                                                 required
//                                             >

//                                             </input>
//                                         </div>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Author
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-title'
//                                                 type='text'
//                                                 value={artist_name}
//                                                 onChange={(e) => setArtist_name(e.target.value)}
//                                                 // placeholder={name}
//                                                 required
//                                             >

//                                             </input>
//                                         </div>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >

//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Genre
//                                                 </label>

//                                             </div>
//                                             <input
//                                                 className='upload-song-form-all-input upload-song-form-genre'
//                                                 type="text"
//                                                 value={genre}
//                                                 onChange={(e) => setGenre(e.target.value)}
//                                                 // placeholder={genre}
//                                                 required
//                                             >
//                                             </input>
//                                         </div>

//                                         <div
//                                             style={{ paddingBottom: '1rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.5rem' }}>
//                                                     &nbsp;Description
//                                                 </label>

//                                             </div>
//                                             <textarea id="story" name="story"
//                                                 rows="5" cols="40"
//                                                 type="text"
//                                                 value={description}
//                                                 onChange={(e) => setDescription(e.target.value)}
//                                                 // placeholder={description}
//                                                 required
//                                             >
//                                             </textarea>

//                                         </div>
//                                         <div>
//                                             <label>
//                                                 <input
//                                                     type="file"
//                                                     accept="audio/*"
//                                                     onChange={(e) => setMp3(e.target.files[0])}
//                                                 >
//                                                 </input>
//                                             </label>

//                                         </div>

//                                         {/* <div
//                                             style={{ paddingBottom: '4rem' }}
//                                         >
//                                             <div>
//                                                 <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <label style={{ paddingBottom: '.8rem' }}>
//                                                     &nbsp;Privacy:
//                                                 </label>

//                                             </div>
//                                             <div style={{ paddingBottom: '1rem' }}>
//                                                 <input type='radio' id='public' value='public'></input>
//                                                 <label for='public'>Public</label>

//                                             </div>
//                                             <div>
//                                                 <input type='radio' id='private' value='private'></input>
//                                                 <label for='private'>Private</label>

//                                             </div>

//                                         </div> */}



//                                         {/* <button onClick={(e) => fileUploadClickHandler(e)}>Choose a file to upload</button> */}
//                                         <div className='upload-song-form-bottom'>
//                                             {/* <div className='upload-song-form-bottom-bar'> */}
//                                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                                 <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
//                                                 <h5>&nbsp;Required fields</h5>
//                                             </div>
//                                             <div className='upload-song-form-bottom-bar-button-div'>

//                                                 <button type='submit'>Save</button>
//                                             </div>
//                                             {/* </div> */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default UpdateSongForm
