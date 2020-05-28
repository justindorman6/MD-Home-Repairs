import React, { useState } from 'react'
import classes from './ContactUs.module.css'
import emailjs from 'emailjs-com';
import Socials from '../Socials/Socials'
import Spinner from '../../Components/Spinner/Spinner';
import Recaptcha from 'react-google-invisible-recaptcha'


const ContactUs = (props) => {
    const recaptchaRef = React.createRef();
    const [response, setResponse] = useState("")

    const [info, setInfo] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phoneNumber: "",
        typeOfJob: "",
        message: ""
    })

    const [isLoading, toggleLoading] = useState(false);

    const onChangeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.id]: e.target.value
        })
    }

    const send = (e) => {
        toggleLoading(true);
        e.preventDefault()
        const params = {
            "from_email": info.email,
            "reply_to": info.email,
            "from_name": info.firstname + " " + info.lastname,
            "message_html": info.message,
            "number": info.phoneNumber.length > 0 ? info.phoneNumber : "No number provided",
            "job_type": info.typeOfJob
        }
        // recaptchaRef.current.execute()

        emailjs.send('gmail', 'template_a23K7w3c', params, 'user_4IOyMIUtvLImbAjtsbKqc')
            .then((result) => {
                setResponse("Successfully sent!");
                toggleLoading(false);
            }, (error) => {
                setResponse("Something went wrong.");
                toggleLoading(false);
            });
    }

    let contact = null;

    if (isLoading) {
        contact = <Spinner />;
    }
    else {
        contact =
            <div className={classes.Form}>

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
                    <p>{response}</p>
                    <button onClick={send}>Send</button>
                    {/* <Recaptcha
                ref={recaptchaRef}
                sitekey={"6LcnUv0UAAAAAMEDrNY4qJk2K4T0QsRAk28KPDtp"}
                onResolved={onResolved}
                onError={onError} /> */}
                </div>

            </div>

    }

    return (
        <div className={classes.ContactUs}>

            {contact}

            <div className={classes.Copy}>
                <h1>ContactUs</h1>
                <p>We are expecting your email so please do not hesitate to contact us through this channel or you may call on the number,
                or if that does it do it for you please go look at our social media. You can contact us there as well.</p>
            </div>
            <Socials />
        </div>
    )
}

export default ContactUs

