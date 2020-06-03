import React from 'react'
import classes from './SideNav.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Logo from '../../assets/images/mdLogo.png'
import Socials from '../Socials/Socials'
const SideNav = (props) => {

    window.smoothScroll = (target) => {
        props.closeNav()
        let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop === 0);

        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target === scrollContainer) break;
            targetY += target.offsetTop;
        } while (target === target.offsetParent)
        targetY-=70
        const scroll = (c, a, b, i) => {
            i++; if (i > 20) return;
            c.scrollTop = a + (b - a) / 20 * i;
            setTimeout(() => { scroll(c, a, b, i) }, 20)
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }

    let navclasses = [classes.SideNav, classes.close]
    if (props.visible) {
        navclasses = [classes.SideNav, classes.open]
    }
    return (
        <>
            <Backdrop show={props.visible} clicked={props.closeNav} />

            <div className={navclasses.join(' ')}>
                <img src={Logo} alt="logo" className={classes.Logo} />
                <nav className={classes.NavButtons}>
                    <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('services'))}>Services offered</button>
                    <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('ourwork'))}>Our Work</button>
                    <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('profile'))}>Profile</button>
                    <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('contactus'))}>Contact Us</button>
                </nav>
                <Socials mobile={true}/>
            </div>
        </>
    )
}

export default SideNav