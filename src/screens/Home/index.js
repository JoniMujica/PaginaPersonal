import React from 'react';
import Gallery from '../../components/Gallery';
import image from '../../constants/images';


function Home(){
    return(
        <div>
            <Gallery image={image}/>
        </div>
    )

}
export default Home;