import React from 'react'
import classes from './Profile.module.css'
import profile_pic from '../../assets/images/md_profile.jpg';

const Profile = () => {
    return (
                <div className={classes.Profile_container} id="profile">
                   
                    <div className={classes.Profile_description}>
                        <p>Amdy’s remarkable story of escaping a Civil War in Burundi as a little boy, surviving the dangerous forest where only he and 1 boy survived from a group of over 20 boys, fleeing to South Africa with the help of Doctors Without Borders, beyond the trauma and tragedy, building his new life in South Africa with the help of an adopting mother, successfully matriculating within 1 year with no formal education.
                            
                            <br/><br/>Due to Amdy’s background, he desires to one day fund and establish an orphanage for children who survived severe trauma.  He therefore started his formal education at UNISA in Psychology. He simultaneously also completed his qualification in plumbing at Cape College in 2006.
                            
                            <br/><br/>Since then, Amdy has started his own company named MD Home Repairs.  In the field, he also attained experience in the area of electrical work.  He is very hands-on and loves taking on responsibility.  Amdy is now in the process of setting up the company to be able to take on larger projects in the industry.

                            <br/><br/>He is dedicated to his dream of making a difference in the world and reaching out and empowering those most overlooked in society.  Amdy envisions growing the company to be able to empower more people in the construction industry and become a solution to the unemployment reigning in our societies.

                            <br/><br/>For an in depth story into Amdy’s life, you may visit</p>
                    </div>
                    <div className={classes.Image_container}>
                        <img src={profile_pic} alt="profile_pic" />
                    </div>
                </div>
    )
}

export default Profile