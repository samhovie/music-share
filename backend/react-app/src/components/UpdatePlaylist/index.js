
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlaylistThunk } from '../../store/playlists';
// import { getPlaylistThunk } from '../../store/playlists';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';
// import Upload from '../UploadImg';
import './UpdatePlaylist.css'

const UpdatePlaylistForm = ({ playlistId }) => {
    const singlePlaylist = useSelector((state) => state.playlists.allPlaylists[playlistId]);
    // console.log('single playlist', singlePlaylist)
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    const playlist = useSelector(state => state.playlists.singlePlaylist)


    // useEffect(() => {
    //     const fetchPlaylistDetails = async () => {
    //         const singlePlaylist = dispatch(getPlaylistThunk(playlistId));
    //         if (singlePlaylist) {
    //             setName(singlePlaylist.name)
    //             setPublic(singlePlaylist.is_public)
    //             setDescription(singlePlaylist.description)
    //             setPreviewImg(playlist.preview_img || '')
    //         }
    //     }
    //     fetchPlaylistDetails();
    // }, [dispatch, playlistId]);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [is_public, setPublic] = useState(false)
    const [preview_img, setPreviewImg] = useState('')
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (playlist) {
            setName(singlePlaylist.name)
            setDescription(singlePlaylist.description)
            setPublic(singlePlaylist.is_public)
            setPreviewImg(singlePlaylist.preview_imag)
        }
    },[playlist, singlePlaylist.name, singlePlaylist.description, singlePlaylist.is_public, singlePlaylist.preview_imag ])


    console.log('playlist id', playlistId)

    useEffect(() => {
        const errors = {}
        // console.log("TYPEOFFFFF", typeof(mp3_file))
        // console.log("RIGHT UNDER", console.log(mp3_file))

        if (!name) errors.name = "Name is required"
        if (!is_public) errors.is_public = "Check is required"
        if (!description) errors.description = "Description is required"
        if (!preview_img) errors.preview_img = "Preview image is required"
        // if (!img.endsWith('.png') && !img.endsWith('.jpg') && !img.endsWith('.jpeg')) errors.img = "Image URL needs to end in jpg or png"
        setErrors(errors)
    }, [name, is_public, description, preview_img])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedFormData = new FormData();
        updatedFormData.append('name', name)
        updatedFormData.append('is_public', is_public)
        updatedFormData.append('description', description)
        updatedFormData.append('preview_img', preview_img)
        await dispatch(updatePlaylistThunk(playlistId, updatedFormData));
        closeModal();
        history.push(`/playlists/${playlistId}`);
    }

    return (
        <>

            <form
                className='create-playlist-form'
                // action={`/ api / playlists / ${playlistId}`}
                // method="PUT"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
            >
                <div className='upload-song-form-wrapped'>
                    <div className='upload-song-form-info'>
                        <div style={{ paddingBottom: '1rem' }}>
                            <div>
                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                <label style={{ paddingBottom: '.5rem' }}>&nbsp;Title</label>
                            </div>
                            <input
                                className='upload-song-form-all-input upload-song-form-title'
                                type='text'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>
                        <div>
                                {/* <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5> */}
                                <label style={{ paddingBottom: '.5rem' }}>&nbsp;Is Public</label>
                            </div>
                        <input
                            type="checkbox"
                            name='is_public'
                            checked={is_public}
                            onChange={(e) => setPublic(e.target.value)}
                        />
                        <div style={{ paddingBottom: '1rem' }}>
                            <div>
                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                <label style={{ paddingBottom: '.5rem' }}>&nbsp;Description</label>
                            </div>
                            <textarea
                                id="story"
                                name="description"
                                rows="5"
                                cols="40"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}

                            />
                            {errors.description && <p>{errors.description}</p>}
                            {/* <label>
                                Preview Image:
                                <Upload onChange={(e) => setPreviewImg(e.target.files[0])} />
                            </label> */}
                        </div>
                        {/* <div
                                            style={{ paddingBottom: '1rem' }}
                                        > */}
                        {/* <div>
                                            <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                            <label style={{ paddingBottom: '.5rem' }}>
                                                &nbsp;Preview Image
                                            </label>

                                        </div>
                                        <input
                                            className='upload_playlist_img'
                                            type='text'
                                            name='preview_img'
                                            value={formData.preview_img}
                                            onChange={handleChange}
                                            required
                                        >

                                        </input> */}
                        {/* <label>
                                            Preview Image:
                                            <Upload onChange={(e) => handleChange({ target: { name: 'preview_img', value: e.target.files[0] } })} />

                                            {/* <Upload onChange={(e) => setPreviewImg(e.target.files[0])} /> */}
                        {/* </label> */}

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
            </form>
        </>
    )
}
export default UpdatePlaylistForm


// // import './UpdateSongForm.css'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { updatePlaylistThunk } from '../../store/playlists'
// import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { useModal } from '../../context/Modal'



// const UpdatePlaylistForm = ({ playlistId }) => {
//     const singlePlaylist = useSelector((state) => state.playlists.singlePlaylist);
//     const dispatch = useDispatch()
//     const history = useHistory()
//     const { closeModal } = useModal()
//     // const [name, setName] = useState('')
//     // const [description, setDescription] = useState('')
//     // const [public, setPublic] = useState(fa)
//     // const [text, setText] = useState('')
//     // const [mp3_file, setMp3] = useState('')
//     // const [genre, setGenre] = useState('')
//     // const [artist_name, setArtist_name] = useState('')
//     // const [id, setId] = useState('')

//     // const { playlistId } = useParams();

//     const [formData, setFormData] = useState({
//         name: `${singlePlaylist.name}`,
//         public: `${singlePlaylist.public}`,
//         user_id: `${singlePlaylist.user_id}`,
//         description: `${singlePlaylist.description}`,
//         // type: `${singlePlaylist.type}`,
//         // private: `${singlePlaylist.private}`,
//         // previewImage: `${singlePlaylist.previewImage}`,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     let handleSubmit = async (e) => {
//         // ("--------------------TEST 1----------------------")
//         e.preventDefault();
//         const updatedPlaylist = await dispatch(updatePlaylistThunk(playlistId, formData));
//         // const formData = new FormData()
//         // formData.append('mp3_file', mp3_file)
//         // formData.append('name', name)
//         // formData.append('artist_name', artist_name)
//         // formData.append('genre', genre)
//         // // formData.append('description', description)
//         // dispatch(updatePlaylistThunk(formData, songId))
//         closeModal()
//         if (updatedPlaylist) {
//             history.push(`/playlists/${playlistId}`);
//         }
//     }

//     return (
//         <>
//             <div className='global-outerwrapper-outer'>
//                 <div className='global-outerwrapper-wrapper'>
//                     <div className='upload-song-outer-wrapper'>
//                         <div className='upload-song-inner-wrapper'>
//                             <form
//                                 className='upload-song-form'
//                                 action={`/ api / playlists / ${playlistId}`}
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
//                                                 placeholder={`${singlePlaylist.state}`}
//                                                 value={formData.state}
//                                                 // value={name}
//                                                 onChange={handleChange}
//                                                 // onChange={(e) => setName(e.target.value)}
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

// export default UpdatePlaylistForm
