import React from 'react'
import './styles.css';
import GalleryImage from './components/GalleryImages'



function Gallery (props) {
    const handleClick = src => {
        console.log(src);
    }
    return(
        <div className="gallery">
            {
                props.image.map((image) =>{
                return <GalleryImage key={image.id} src={image.url} title={image.title} id={image.id} onClick={handleClick}/>
                })
            }
        </div>
    )
}
export default Gallery;