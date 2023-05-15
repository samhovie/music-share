import { useSelector, useDispatch } from 'react-redux'
import './UpdateProfile.css'
import { useState, useEffect } from 'react'
import { updateUserThunk } from '../../store/users'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'

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
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        const errors = {}
        if (!displayName) errors.displayName = "Display name is required"
        if (!firstName) errors.firstName = "First name is required"
        if (!lastName) errors.lastName = "Last name is required"
        if (!city) errors.city = "City is required"
        if (!country) errors.country = "Country is required"
        if (!bio) errors.bio = "bio is required"
        if (bio && bio.length > 200) errors.bio = "Bio is too long!"
        // if (!img.endsWith('.png') && !img.endsWith('.jpg') && !img.endsWith('.jpeg')) errors.img = "Image URL needs to end in jpg or png"
        setErr(errors)
    }, [displayName, firstName, lastName, city, country, bio])

    const cancelHandler = () => {
        closeModal()

    }

    const submitHandler = (e) => {
        // console.log('HEY')
        e.preventDefault();

        if (Object.keys(err).length > 0) {
            setDisplayErr(true)
            // console.log(displayErr)
            // console.log('handlesubmit', err)
            return
        }
        else {
            const newUser = { display_name: displayName, first_name: firstName, last_name: lastName, city: city, country: country, bio: bio }
            // console.log(newUser)
            dispatch(updateUserThunk(newUser, user.id))
            // setUrl(`/groups/${newGroup.id}`)
            history.push(`/profile`)
        }
        closeModal()
        window.location.reload();
    }


    return (
        <>
            <div className='update-profile-outer-wrapper'>
                <div className='update-profile-inner-wrapper'>
                    <div className='update-profile-title' >Edit your Profile</div>
                    <div className='update-profile-image-form'>
                        <div className='update-profile-image'>
                            <img src={`${user.profile_pic}`}></img>
                        </div>

                        <form
                            className='update-profile-form'
                            action={`/ api / users / ${user.id}`}
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
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                />
                            </label>
                            <div className='update-profile-form-double-div update-profile-form-names-div' >
                                <label
                                    className='update-profile-form-label'
                                >
                                    First Name
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className='update-profile-form-first-name update-profile-form-names-input'
                                    />

                                </label>
                                <label
                                    className='update-profile-form-label'
                                >
                                    Last Name
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className='update-profile-form-first-name update-profile-form-names-input'
                                    />

                                </label>
                            </div>
                            <div className='update-profile-form-double-div update-profile-form-location-div'>
                                <label
                                    className='update-profile-form-label'
                                >
                                    City
                                    <input
                                        type="text"
                                        name="city"
                                        value={city}
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
                                    onChange={(e) => setBio(e.target.value)}
                                    className='update-profile-form-bio'
                                    rows='8'
                                >

                                </textarea>
                            </label>


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
                                onClick={cancelHandler}>
                                Cancel
                            </button>
                            <button
                                className='update-profile-bottom-bar-save'
                                onClick={submitHandler}
                                type='submit'>
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
