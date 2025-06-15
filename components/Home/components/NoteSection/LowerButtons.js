import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../../../../shared/Button"

const LowerButtons = () => {
    const buttonProps = {
        title: "Search Book", type: "tablet", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", iconPostion:"left", background:"grey"
    }
    return (
        <div className="lower-buttons">
            <Button {...buttonProps} />
            <span className="how-it-works">How it works?
                <FontAwesomeIcon
                    icon={faCirclePlay}
                    style={{ fontSize: 20, color: "red", marginLeft:"5px",borderRadius: "50%",
                    boxShadow: "0px 0px 3px 4px #ffb4b4" }}
                />
            </span>
        </div>
    )
}

export default LowerButtons