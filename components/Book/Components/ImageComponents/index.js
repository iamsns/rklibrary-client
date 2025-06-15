import { useEffect, useState } from "react"
import Wrapper from "./styled"

const ImageGallery = ({images}) => {
    // const [images, setImages] = useState([])
    // useEffect(()=> {
    //     // console.log("imagess", props.images);
    //     setImages(props.images)
    // },[props])
    return <Wrapper>
        <img className="book-image" src={images} alt="book-image"/>
    </Wrapper>
}

export default ImageGallery