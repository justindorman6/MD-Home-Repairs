import React from 'react'
import classes from './Profile.module.css'
import profile_pic from '../../assets/images/md_profile.jpg';

const Profile = (props) => {
    return (
            <div className = {classes.Container} id="profile">
                {props.mobile?<h1>About Me</h1>:null}
            
                <div className={classes.Profile_container} >

                    <div className={classes.Image_container}>
                        <div className={classes.SubImage}>
                            <img src={profile_pic} alt="profile_pic" />
                        </div>
                        <div>
                            {!props.mobile? <h1>About Me </h1> :null}
                            <p>Mdalaga Mrisho</p>
                        </div>
                    </div>
                   
                    <div className={classes.Profile_description}>
                        
                        {!props.mobile? 

                            <React.Fragment>
                        
                            <p>This is my story of escaping a Civil War in Burundi as a little boy, surviving the dangerous forest where only me and one boy survived from a group of over twenty boys, fleeing to South Africa with the help of Doctors Without Borders, beyond the trauma and tragedy, building a new life in South Africa with the help of an adopting mother, successfully matriculating within one year with no formal education.
                            
                            <br/><br/>Due to my background, I dream to one day fund and establish an orphanage for children who survived severe trauma.  I therefore started my formal education at UNISA in Psychology. I simultaneously completed my qualification in plumbing at Cape College in 2006.
                            
                            <br/><br/>Since then, I have started my own company named MD Home Repairs.  In the field, I also attained experience in the area of electrical work. I am very hands-on and love taking on responsibility.  I am now in the process of setting up the company to be able to take on larger projects in the industry.

                            <br/><br/>I am dedicated to my dream of making a difference in the world and reaching out and empowering those most overlooked in society.  I also envision growing the company to be able to empower more people in the construction industry and become a solution to the unemployment reigning in our societies.

                            <br/><br/>For an in depth story into my life, you may visit:</p> 

                            <a href="https://www.dailymaverick.co.za/article/2016-12-30-podcast-the-boy-who-didnt-die/">Story of my life</a>
                            </React.Fragment>
                             :
                            
                            <p>I started my own company named MD Home Repairs.  In the field, I also attained experience in the area of electrical work.  I am very hands-on and love taking on responsibility.  I am now in the process of setting up the company to be able to take on larger projects in the industry.</p>}


                    </div>
                    
                </div>
            </div>
    )
}

export default Profile