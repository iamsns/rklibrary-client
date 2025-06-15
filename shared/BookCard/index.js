import BookCardLower from "./BookCardLower"
import BookCardUpper from "./BookCardUpper"
import Wrapper from "./styled"
import { useRouter } from "next/router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getBookDetailsRequest } from "../../components/Book/redux/actions"
import { createStructuredSelector } from "reselect"
const BookCard = (props) => {

    // console.log("props book card", props);
    const router = useRouter()
    const handleBookClicked = async () => {
        await props.getBookDetailsRequest(props.data?.slug)
        router.push(`/book/${props.data?.slug}`)
    }
    return (
    <Wrapper onClick={handleBookClicked}>
        <BookCardUpper {...props} />
        <BookCardLower {...props} />
    </Wrapper>)
}
const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = dispatch => ({
    getBookDetailsRequest: bindActionCreators(getBookDetailsRequest, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(BookCard)