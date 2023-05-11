import './SongUpload.css'

const SongUpload = () => {
    return (
        <>
            <div className='global-outerwrapper-outer'>
                <div className='global-outerwrapper-wrapper'>
                    <div className='upload-song-outer-wrapper'>
                        <div className='upload-song-inner-wrapper'>
                            <form className='upload-song-form'>
                                <div className='upload-song-form-wrapped'>

                                    <div className='upload-song-form-upload'>
                                        <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
                                    </div>
                                    {/* style={{ paddingBottom: '1rem' }} */}
                                    <div className='upload-song-form-info'>

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >

                                            <label style={{ display: 'block', paddingBottom: '.5rem' }}>
                                                Title
                                            </label>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-title'
                                            >

                                            </input>
                                        </div>

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >

                                            <label style={{ display: 'block', paddingBottom: '.8rem' }}>
                                                Genre
                                            </label>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-genre'>

                                            </input>
                                        </div>

                                        <div
                                            style={{ paddingBottom: '1rem' }}
                                        >
                                            <label style={{ display: 'block', paddingBottom: '.8rem' }}>
                                                Description
                                            </label>
                                            <textarea id="story" name="story"
                                                rows="5" cols="40">

                                            </textarea>

                                        </div>

                                        <div
                                            style={{ paddingBottom: '4rem' }}
                                        >
                                            <label style={{ display: 'block', paddingBottom: '.8rem' }}>
                                                Privacy:
                                            </label>
                                            <div style={{ paddingBottom: '1rem' }}>
                                                <input type='radio' id='public' value='public'></input>
                                                <label for='public'>Public</label>

                                            </div>
                                            <div>
                                                <input type='radio' id='private' value='private'></input>
                                                <label for='private'>Private</label>

                                            </div>

                                        </div>



                                        <button>Choose a file to upload</button>
                                        <div className='upload-song-form-save'>
                                            <button>Save</button>
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
