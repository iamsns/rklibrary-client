import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import AddToCard from "../../AddToCardElement"

const BookCardLower = (props) => {
    const {title, author, imageGallery, pages, language, rating} = props.data
    return (
        <Wrapper>
        <h4 className="title">{title}</h4>
        <p className="author">By <span className="author-name">{author}</span></p>
        <span className="rating">
            <FontAwesomeIcon 
                icon={faStar}
                style={{ fontSize: 13, color: "#f08804", }} 
            /> 
            &nbsp;4.2 {"("+325+")"}
        </span>
        {/* <span className="reviews">{"50"} Reviews</span> */}
        <AddToCard {...props.data} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
color:gray;
padding: 4px 10px 5px;
.title {
    margin:0;
    word-break: break-word;
    min-height:44px;
}
.author {
    margin:4px 0;
}
.author-name {
    font-weight:500;
}
@media screen and (min-width:767px) {
 
}

@media screen and (max-width:767px) {

}
`

export default BookCardLower