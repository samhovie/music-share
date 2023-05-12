import './UpdateProfile.css'

const UpdateProfile = () => {

    return (
        <>
            <div className='update-profile-outer-wrapper'>
                <div className='update-profile-inner-wrapper'>
                    <div className='update-profile-title' >Edit your Profile</div>
                    <div className='update-profile-image-form'>
                        <div className='update-profile-image'>
                            <img src='https://media.glamour.com/photos/5f980f5cc0115735c138a7a9/16:9/w_2560%2Cc_limit/drake.jpg'></img>
                        </div>

                        <div className='update-profile-form'>
                            <div>Displayname</div>
                        </div>
                    </div>


                    <div className='update-profile-bottom'>
                        {/* <div className='upload-song-form-bottom-bar'> */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5>
                            <h5>&nbsp;Required fields</h5>
                        </div>
                        <div className='update-profile-bottom-bar-button-div'>

                            <button>Save</button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>

    )
}

export default UpdateProfile
