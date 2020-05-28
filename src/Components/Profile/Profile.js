import React from 'react'
import classes from './Profile.module.css'
import profile_pic from '../../assets/images/md_profile.jpg';
const Profile = () => {
    return (
        <React.Fragment>
                <div className={classes.Heading}>
                    <h1>Profile </h1>
                </div>
                <div className={classes.Profile_container}>
                    <div className={classes.Image_container}>
                        <img src={profile_pic} alt="profile_pic" />
                    </div>
                    <div className={classes.Profile_description}>
                        <p>This is the profile section about Mdalaga sssssssssssss sssssssssssss sasd sadasd
                    </p>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Profile