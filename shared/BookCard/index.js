import { defaultConfig } from "next/dist/server/config-shared"
import Wrapper from "./styled"
const BookCard = (props) => {
    const {title, author, imageGallery, pages, language, rating} = props.data
    return (<Wrapper>
        <img className="card-image" src={imageGallery?.length > 0 && imageGallery[0]} alt="image" loading="lazy"/>
        <h4>{title}</h4>
        <p>By {author}</p>
        <span>{rating}***</span><span>{"50"} Reviews</span>
    </Wrapper>)
}

export default BookCard