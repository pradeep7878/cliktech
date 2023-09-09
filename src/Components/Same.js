import React from 'react';
import '../Css/HomeAbout.css';



const Same = (props) => {
    return (
        <>
            <main>
                <div className='main-container'>
                    <div className='content-box'>
                        <h2>{props.title}</h2>
                        <p>&nbsp;&nbsp;{props.text}</p>
                        <button>{props.button}</button>
                    </div>
                    <div className='img-box'>
                        <img src={props.img}  alt='homepage' />
                    </div>
                </div>
            </main>
        </>
    )
}


export default Same;