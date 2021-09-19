import React from "react";
import icon from '../../Images/loaging_layoutx.svg'




export const InitialLayout = () => {

    const styles = {

        layout: {
            width: '100%',
            height: '100vh',
            backgroundColor: '#fff',
            position: 'fixed',
            zIndex: '1000',
        },
        icon: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }

    return (// @ts-ignore
        <div style={styles.layout}>
            {/*// @ts-ignore*/}
            <img style={styles.icon} src={icon} alt=""/>
        </div>
    )
}