import React, { useState } from 'react'
import classes from './ContactUs.module.css'
import emailjs from 'emailjs-com';
import Socials from '../Socials/Socials'
const ContactUs = () => {

    const [info, setInfo] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
        typeOfJob: "",
        message: "",
        feedback: ""
    })

    const onChangeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
    }

    function sendEmail(e) {
        e.preventDefault();
        const template_params = {
            "from_email": info.email,
            "reply_to": info.email,
            "from_name": info.firstname + " " + info.lastname,
            "message_html": info.message,
            "number": info.phoneNumber.length > 0 ? info.phoneNumber : "No number provided",
            "job_type": info.typeOfJob
        }
        emailjs.send('gmail', 'template_a23K7w3c', template_params, 'user_4IOyMIUtvLImbAjtsbKqc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className={classes.ContactUs}>
            <form className={classes.Form} onSubmit={sendEmail}>

                <div className={classes.Name}>
                    <div>
                        <label>First Name</label>
                        <input type="text" id="firstname" required onChange={onChangeHandler} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" id="lastname" required onChange={onChangeHandler} />
                    </div>
                </div>

                <label>Email</label>
                <input type="email" id="email" required onChange={onChangeHandler} />
                <label>Contact number</label>
                <input type="text" id="phoneNumber" onChange={onChangeHandler} />

                <label>Type of job</label>
                <input type="text" id="typeOfJob" required onChange={onChangeHandler} />

                <label>Message</label>
                <textarea id="message" required onChange={onChangeHandler} />
                <div className={classes.ButtonContainer}>
                    <button type="submit">Send</button>
                </div>
            </form>

            <div className={classes.Copy}>
                <h1>ContactUs</h1>
                <p>We are expecting your email so please do not hesitate to contact us through this channel or you may call on the number,
                or if that does it do it for you please go look at our social media. You can contact us there as well.</p>
            </div>
            <Socials/>
        </div>
    )
}

export default ContactUs

