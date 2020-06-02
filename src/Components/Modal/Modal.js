import React from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                    <div className={classes.Header}>
                    <img onClick = {props.modalClosed} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABmklEQVRoge2aTU7DMBCFP7gDUVuOlB6BC8C6lAPAtcoFYEUX3IOwgFVYZCIguJFn/BML+UlWKnWcvq9J7RdNoaqqyqotcADegX7h0YmXVgvxUID5U+PeF2IrEz6AHbDWfgsJtAZuGTz1eF6ZRynepfNl1p7B28GnuJPiVUpHRq0YvL35FI/3Yqly+jtfwEgSVZDSVEFKUwyQa6AJmN/IOaJLs/zeSO0RG0wjc3s5l4+8/WlALoAXqX9FF2emc3034CQgLkM+MFYIlT/Lzq6BCYFQ+bNGFB+YUAiVv5CsNQcTA0LlLzQ0umBiQaj8xUi/P5fV4+R1yJ4DmUHg91WIcSVGFRHjz3J+WL21RK4fdkgCMPuLufyuZt6zwmTfEF0/7BgwWSPK3OoUCpMtNPossSEwWWK8Zp+wwiQB+TcPVpD/UTd7REmlIiJKMlWQ0lRBSpMLpJNjCS23qS7l+KfR4wJ5kuNVMjt2jZ6efYpbvpuhe2CTyJRGG+AO+ETRDIWhBXyqPbz08G5Pj2oZuqdjc3TJYf7DQFVV1aAvuftbeCQwpVAAAAAASUVORK5CYII=" alt="close"/>
                    </div>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default modal;