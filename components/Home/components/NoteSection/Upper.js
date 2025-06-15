import Gap from "../../../../shared/Gap"


const Upper = () => {
    return (
        <div className="upper-part">
            <div className="first-row">
                <span className="upper-main-text">Get Your</span>
                <img className="get-your-image" src="https://backoffice.vo-group.be/media/vo-citizen-staging/210/agence.png" />
            </div>
            <div className="second-row" >
                <div className="vertical-text">
                <Gap  />
                    Trending book collection release
                </div>
                <div> <span className="upper-main-text">New Book</span>
                <div >
                <img className="collection-side-image" src="https://s3.amazonaws.com/easel.ly/assets/website/infographicbusiness/v2/ic-why-rely-4.svg" />
                <span className="upper-main-text">Collection</span>
                <div className="description">Get your favorite book at just &#8377;10 in your city <Gap  /></div></div>
               
            </div>
            </div>
        </div>
    )
}

export default Upper