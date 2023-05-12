
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlaylistThunk } from '../../store/playlists';
import { getPlaylistThunk } from '../../store/playlists';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../context/Modal';

const UpdatePlaylistForm = ({ playlistId }) => {
    const singlePlaylist = useSelector((state) => state.playlists.singlePlaylist);
    console.log('single playlist', singlePlaylist)
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();

    const [formData, setFormData] = useState({
        name: '',
        public: '',
        user_id: '',
        description: '',
    });

    useEffect(() => {
        dispatch(getPlaylistThunk(playlistId)); // assuming getPlaylistThunk is your thunk to load a specific playlist
    }, [dispatch, playlistId]);

    useEffect(() => {
        if (singlePlaylist) {
            setFormData({
                name: singlePlaylist.name || '',
                public: singlePlaylist.public || '',
                user_id: singlePlaylist.user_id || '',
                description: singlePlaylist.description || '',
            });
        }
    }, [singlePlaylist]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPlaylist = await dispatch(updatePlaylistThunk(playlistId, formData));
        closeModal();
        if (updatedPlaylist) {
            history.push(`/playlists/${playlistId}`);
        }
    }

    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='upload-song-outer-wrapper'>
                        <div className='upload-song-inner-wrapper'>
                            <form
                                className='upload-song-form'
                                action={`/ api / playlists / ${playlistId}`}
                                method="PUT"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit}
                            >
                                <div className='upload-song-form-wrapped'>
                                    <div className='upload-song-form-upload'>
                                        <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
                                    </div>
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
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
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
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
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
                        </div>
                    </div>
                </div>
            </div>
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
//         // console.log("--------------------TEST 1----------------------")
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
