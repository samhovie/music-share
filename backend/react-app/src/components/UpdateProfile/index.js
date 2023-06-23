import { useSelector, useDispatch } from 'react-redux'
import './UpdateProfile.css'
import { useState, useEffect } from 'react'
import { getAllUsersThunk, getUserThunk, updateUserThunk } from '../../store/users'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'
import { authenticate } from '../../store/session'
import Upload from '../UploadImg'

const UpdateProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    const user = useSelector(state => state.session.user)
    const [displayName, setDisplayName] = useState(user.display_name)
    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [city, setCity] = useState(user.city)
    const [country, setCountry] = useState(user.country)
    const [bio, setBio] = useState(user.bio)
    const [err, setErr] = useState({})
    const [displayErr, setDisplayErr] = useState(false)
    const [newProfile, setNewProfile] = useState({
        displayName: user.display_name,
        firstName: user.first_name,
        lastName: user.last_name,
        profile_pic: ''
    })

    useEffect(() => {
        console.log('NEEEWW', newProfile)
    },[newProfile])


    useEffect(() => {
        const errors = {}
        if (!newProfile.displayName) errors.displayName = "Display name is required"
        if (!newProfile.firstName) errors.firstName = "First name is required"
        if (!newProfile.lastName) errors.lastName = "Last name is required"
        if (!newProfile.profile_pic) errors.profile_pic = "Pic is required"
        // if (!city) errors.city = "City is required"
        // if (!country) errors.country = "Country is required"
        // if (!bio) errors.bio = "Bio is required"
        // if (bio && bio.length > 200) errors.bio = "Bio is too long!"
        // if (!img.endsWith('.png') && !img.endsWith('.jpg') && !img.endsWith('.jpeg')) errors.img = "Image URL needs to end in jpg or png"
        setErr(errors)
    }, [newProfile])

    const cancelHandler = () => {
        closeModal()

    }

    const submitHandler = async (e) => {
        //  ('HEY')
        e.preventDefault();

        if (Object.keys(err).length > 0) {
            setDisplayErr(true)
            //  (displayErr)
            //  ('handlesubmit', err)
            return
        }
        else {
            // const newUser = { display_name: displayName, first_name: firstName, last_name: lastName, city: city, country: country, bio: bio,  }
            const formData = new FormData()
            formData.append('display_name', newProfile.displayName)
            formData.append('first_name', newProfile.firstName)
            formData.append('last_name', newProfile.lastName)
            formData.append('profile_pic', newProfile.profile_pic)
            // console.log('FOOOOORMDATA', formData)
            // for (let [key, value] of formData.entries()) {
            //     console.log('KKKKVVVV',key, value);
            // }
            await dispatch(updateUserThunk(formData, user.id))

            await dispatch(authenticate())
            history.push(`/profile`)
        }

        closeModal()
    }


    return (
        <>

            <div className='update-profile-outer-wrapper'>
                <div className='update-profile-inner-wrapper'>
                    <div className='update-profile-title' >Edit your Profile</div>
                    <div className='update-profile-image-form'>
                        <div className='update-profile-image' >
                            <img alt='' src={`${user.profile_pic || 'https://meshgradient.com/gallery/5.png'}`}></img>







                        </div>

                        <form
                            className='update-profile-form'
                            // action={`/ api / users / ${user.id}`}
                            method="PUT"
                            encType="multipart/form-data"
                            onSubmit={submitHandler}
                        >
                            <label
                                className='update-profile-form-label'
                            >
                                Display Name
                                <input
                                    type="text"
                                    name="displayName"
                                    value={newProfile.displayName}
                                    placeholder="Enter a display name here"
                                    onChange={(e) => setNewProfile({...newProfile, displayName: e.target.value})}
                                />
                            </label>
                            {displayErr && err.displayName && <p style={{ color: 'red' }}>{err.displayName} </p>}
                            <div className='update-profile-form-double-div update-profile-form-names-div' >
                                <div>

                                    <label
                                        className='update-profile-form-label'

                                    >
                                        First Name
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={newProfile.firstName}
                                            placeholder="Enter your first name here"
                                            onChange={(e) => setNewProfile({...newProfile, firstName: e.target.value})}
                                            className='update-profile-form-first-name update-profile-form-names-input'
                                        />

                                    </label>
                                    {displayErr && err.firstName && <p style={{ color: 'red' }}>{err.firstName}</p>}
                                </div>
                                <div>
                                    <label
                                        className='update-profile-form-label'
                                    >
                                        Last Name
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={newProfile.lastName}
                                            placeholder="Enter your last name here"
                                            onChange={(e) => setNewProfile({...newProfile, lastName: e.target.value})}
                                            className='update-profile-form-first-name update-profile-form-names-input'
                                        />

                                    </label>

                                    {displayErr && err.lastName && <p style={{ color: 'red' }}>{err.lastName}</p>}
                                </div>
                            </div>
                                <label>
                                    <span>Profile Image:</span>
                                    <Upload onChange={e => setNewProfile({...newProfile, profile_pic: e.target.files[0]})} />
                                </label>
                                {displayErr && err.profile_pic && <p style={{ color: 'red' }}>{err.profile_pic}</p>}
                            {/* <div className='update-profile-form-double-div update-profile-form-location-div'>
                                <label
                                    className='update-profile-form-label'
                                >
                                    City
                                    <input
                                        type="text"
                                        name="city"
                                        value={city}
                                        placeholder='Enter a city here'
                                        onChange={(e) => setCity(e.target.value)}
                                        className='update-profile-form-city update-profile-form-location-input'
                                    />

                                </label>
                                <label
                                    className='update-profile-form-label'
                                >
                                    Country
                                    <input
                                        type="text"
                                        name="country"
                                        value={country}
                                        placeholder="Enter a country here"
                                        onChange={(e) => setCountry(e.target.value)}
                                        className='update-profile-form-country update-profile-form-location-input'
                                    />

                                </label>
                            </div>
                            <label
                                className='update-profile-form-label'>
                                Bio
                                <textarea
                                    name="bio"
                                    value={bio}
                                    placeholder='Bio description required'
                                    onChange={(e) => setBio(e.target.value)}
                                    className='update-profile-form-bio'
                                    rows='8'
                                >

                                </textarea>
                            </label> */}


                        </form>
                    </div>


                    <div className='update-profile-bottom'>
                        {/* <div className='upload-song-form-bottom-bar'> */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* <h5 style={{ fontSize: '12px', color: 'red' }} >*</h5> */}
                            {/* <h5>&nbsp;Required fields&nbsp;&nbsp;&nbsp;</h5> */}
                        </div>
                        <div className='update-profile-bottom-bar-button-div'>
                            <button
                                className='update-profile-bottom-bar-cancel'
                                onClick={cancelHandler}
                                style={{ cursor: 'pointer' }}
                            >
                                Cancel
                            </button>

                            <button
                                className='update-profile-bottom-bar-save'
                                onClick={submitHandler}
                                type='submit'
                                style={{ cursor: 'pointer' }}
                            >
                                Save
                            </button>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>

    )
}

export default UpdateProfile
