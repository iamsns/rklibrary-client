import Link from "next/link"
import Wrapper from "./styled"

const SiteLogo = () => {
    return (
        <Wrapper>
            <Link href='/'>
                <img className="logo-image" src="/images/rk-library-logo.png" />
            </Link>
        </Wrapper>
    )
}

export default SiteLogo