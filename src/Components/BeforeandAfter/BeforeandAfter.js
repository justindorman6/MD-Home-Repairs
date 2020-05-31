import React, { useState } from 'react'
import classes from './BeforeandAfter.module.css'
import Before1 from '../../assets/images/before1.jpg'
import After1 from '../../assets/images/after1.jpg'

import Before2 from '../../assets/images/before2.jpg'
import After2 from '../../assets/images/after2.jpg'

import Before3 from '../../assets/images/before3.png'
import After3 from '../../assets/images/after3.png'
const BeforeandAfter = () => {

    const [state, setState] = useState({
        one: false,
        two: false,
        three: false
    })

    const toggle = (pic, value) => {
        setState({ ...state, [pic]: value })
    }
    //false = before and true = after
    return (
        <div className={classes.BeforeandAfter} id="ourwork">
            <div className={classes.Container}>

                <div className={classes.ImageContainer}>
                    <div className={classes.SubImage}>
                        {!state.one ? <img src={Before1} alt="before 1" /> : <img src={After1} alt="after 1" />}
                    </div>

                    <div className={classes.Buttons}>
                        <button className={!state.one ? classes.BeforeButton_select : classes.BeforeButton} onClick={() => toggle("one", false)}>Before</button>
                        <button className={state.one ? classes.AfterButton_select : classes.AfterButton} onClick={() => toggle("one", true)}>After</button>
                    </div>
                </div>

                <div className={classes.ImageContainer}>
                    <div className={classes.SubImage}>
                        {!state.two ? <img src={Before2} alt="before 2" /> : <img src={After2} alt="after 2" />}
                    </div>
                    <div className={classes.Buttons}>
                        <button className={!state.two ? classes.BeforeButton_select : classes.BeforeButton} onClick={() => toggle("two", false)}>Before</button>
                        <button className={state.two ? classes.AfterButton_select : classes.AfterButton} onClick={() => toggle("two", true)}>After</button>
                    </div>
                </div>

                <div className={classes.ImageContainer}>
                    <div className={classes.SubImage}>
                        {!state.three ? <img className={classes.BeforeIMagethree} src={Before3} alt="before 3" /> : <img className={classes.BeforeIMagethree} src={After3} alt="after 3" />}
                    </div>

                    <div className={classes.Buttons}>
                        <button className={!state.three ? classes.BeforeButton_select : classes.BeforeButton} onClick={() => toggle("three", false)}>Before</button>
                        <button className={state.three ? classes.AfterButton_select : classes.AfterButton} onClick={() => toggle("three", true)}>After</button>
                    </div>
                </div>
                <div>
                    <h1>Our Work</h1>
                    <p>These are some examples of our exemplary work. You can just sit back and relax while we do all the hard work.</p>
                </div>

            </div>
        </div>
    )
}
export default BeforeandAfter