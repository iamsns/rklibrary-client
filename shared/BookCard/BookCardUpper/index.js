import styled from "styled-components"

const BookCardUpper = (props) => {
    const {title, author, imageGallery, pages, language, rating} = props.data
    return (
        <Wrapper>
            <img className="card-image" src={imageGallery?.length > 0 && imageGallery[0]} alt="image" loading="lazy"/> 
        </Wrapper>
    )
}

const Wrapper = styled.div`

.card-image {
    min-height: 200px;
    max-height: 200px;
    width: 192px;
    border-radius: 10px 10px 0 0;
    display: block;
    margin: auto;
}
@media screen and (min-width:767px) {
 
}

@media screen and (max-width:767px) {

}
`

export default BookCardUpper