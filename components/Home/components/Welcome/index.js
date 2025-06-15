import BookSection from "../BookSection"
import NoteSection from "../NoteSection"
import Wrapper from "./styled"

const Welcome = () => {
    return (
        <Wrapper>
            <div className="welcome-line">
                <h1 >Welcome to Rk Library</h1>
            </div>
            {/* <NoteSection /> */}
        </Wrapper>
    )
}
export default Welcome