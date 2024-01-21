import Wrapper from "./styled"

const ImageGallery = ({images}) => {
    return <Wrapper>
        <img className="book-image" src={images} alt="book-image"/>
    </Wrapper>
}

export default ImageGallery