import './SongUpload.css'

const SongUpload = () => {


    const fileUploadClickHandler = (e) => {
        e.preventDefault()

    }

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
                                            <div>
                                                <h5 style={{ display: 'inline-block', fontSize: '12px', color: 'red' }} >*</h5>
                                                <label style={{ paddingBottom: '.5rem' }}>
                                                    &nbsp;Title
                                                </label>

                                            </div>
                                            <input
                                                className='upload-song-form-all-input upload-song-form-title'
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
                                                className='upload-song-form-all-input upload-song-form-genre'>

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
                                                rows="5" cols="40">

                                            </textarea>

                                        </div>

                                        <div
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

                                        </div>



                                        <button onClick={(e) => fileUploadClickHandler(e)}>Choose a file to upload</button>
                                        <div className='upload-song-form-bottom'>
                                            {/* <div className='upload-song-form-bottom-bar'> */}
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
                                                <h5>&nbsp;Required fields</h5>
                                            </div>
                                            <div className='upload-song-form-bottom-bar-button-div'>

                                                <button>Save</button>
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
