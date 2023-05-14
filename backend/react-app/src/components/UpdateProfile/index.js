import { useSelector, useDispatch } from 'react-redux'
import './UpdateProfile.css'
import { useState, useEffect } from 'react'
import { updateUserThunk } from '../../store/users'
import { useModal } from '../../context/Modal'
import { useHistory } from 'react-router-dom'

const UpdateProfile = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal
    const user = useSelector(state => state.session.user)
    // const [displayName, setDisplayName] = useState(user.displayName)
    // const [firstName, setFirstName] = useState(user.firstName)
    // const [lastName, setLastName] = useState(user.lastName)
    // const [city, setCity] = useState(user.city)
    // const [country, setCountry] = useState(user.coutnry)
    // const [bio, setBio] = useState(user.bio)
    // const [err, setErr] = useState({})
    // const [displayErr, setDisplayErr] = useState(false)
    // const [changed, setChanged] = useState(false)
    const [formData, setFormData] = useState({
        displayName: '',
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        bio: '',
        // profile_pic: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                displayName: user.displayName || '',
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                city: user.city || '',
                country: user.country || '',
                bio: user.bio || '',
                // profile_pic: user.profile_pic || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        setFormData({ ...formData, [name]: value });
        console.log("FORM DATA ", formData)
    };

    const cancelHandler = async () => {
        //     closeModal()
    }

    const submitHandler = async (e) => {
        console.log('HEY')
        e.preventDefault();
        // if (Object.keys(err).length > 0) {
        // 	setDisplayErr(true)
        // 	console.log(displayErr)
        // 	console.log('handlesubmit', err)
        // 	return
        // }
        // else {
        let newForm = new FormData()
        newForm = {...formData}
        console.log("THIS IS NEW FORM", newForm)
        const updatedUser = await dispatch(updateUserThunk(newForm, user.id))
        // setUrl(`/groups/${newGroup.id}`)
        history.push(`/profile`)
        // closeModal()
        // }
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
                                    value={formData.displayName}
                                    onChange={handleChange}
                                >{user.display_name}</input>
                            </label>
                            <div className='update-profile-form-double-div update-profile-form-names-div' >
                                <label
                                    className='update-profile-form-label'
                                >
                                    First Name
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className='update-profile-form-first-name update-profile-form-names-input'
                                    >{user.display_name}</input>

                                </label>
                                <label
                                    className='update-profile-form-label'
                                >
                                    Last Name
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className='update-profile-form-first-name update-profile-form-names-input'
                                    >{user.display_name}</input>

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
                                        value={formData.city}
                                        onChange={handleChange}
                                        className='update-profile-form-city update-profile-form-location-input'
                                    >{user.display_name}</input>

                                </label>
                                <label
                                    className='update-profile-form-label'
                                >
                                    Country
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className='update-profile-form-country update-profile-form-location-input'
                                    >{user.display_name}</input>

                                </label>
                            </div>
                            <label
                                className='update-profile-form-label'>
                                Bio
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
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
