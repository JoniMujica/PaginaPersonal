import React from 'react'
import './styles.css'


function GalleryImage(props){

    const handleClick = () => {
        props.onClick(props.title);
    }
    return(
        <div>
            <p>{props.title}</p>
            <img className="gallery-img" src={props.src} alt="" onClick={handleClick} />
        </div>
    )
}
export default GalleryImage;