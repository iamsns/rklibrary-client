import Wrapper from "./styled"
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faAmbulance,
    faAnchor,
} from "@fortawesome/free-solid-svg-icons";
const Button = (props) => {
    return (
        <Wrapper {...props} >
            {props.icon &&
                <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: 13, color: "white", marginRight: "5px" }}
                />
            }
            {props.title}
        </Wrapper>)
}

export default Button