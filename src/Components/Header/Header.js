import React from 'react'
import classes from './Header.module.css'
import Logo from '../../assets/images/mdLogo.png'
import HamburgerMenu from '../../assets/icons/hamburger.svg'
const Header = (props) => {

    window.smoothScroll = (target) => {
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
        } while (target === target.offsetParent);

        const scroll = (c, a, b, i) => {
            i++; if (i > 20) return;
            c.scrollTop = a + (b - a) / 20 * i;
            setTimeout(() => { scroll(c, a, b, i); }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }

    return (
        <header className={props.mobile ? classes.Header_mobile : classes.Header}>
            {props.mobile ? <img src={HamburgerMenu} alt="hamburger" className={classes.HamburgerMenu} onClick={props.showSideNav} /> : null}
            <img src={Logo} alt="logo" />
            <nav className={classes.NavButtons}>
                <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('services'))}>Services offered</button>
                <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('ourwork'))}>Our Work</button>
                <button className={classes.Button} onClick={() => window.smoothScroll(document.getElementById('profile'))}>Profile</button>
                <button className={classes.Contact} onClick={() => window.smoothScroll(document.getElementById('contactus'))}>Contact Us</button>
            </nav>
        </header>
    )
}

export default Header