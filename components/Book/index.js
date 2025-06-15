import { useEffect } from "react"
import ImageGallery from "./Components/ImageComponents"
import Wrapper from "./styled"
import { createStructuredSelector } from "reselect"
import { useState } from "react"
import { selectBookDetails } from "./redux/selectors"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const Book = (props) => {
    const [bookDetails, setBookDetails] = useState({})
    useEffect(() => {
        // console.log("propsss", props);
        setBookDetails(props.bookDetails)
    },[props])
    return <Wrapper>
        <div>
            {bookDetails.title}
            <ImageGallery images={bookDetails.imageGallery} />
        </div>
    </Wrapper>
}


const mapStateToProps = createStructuredSelector({
    bookDetails: selectBookDetails()
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Book)