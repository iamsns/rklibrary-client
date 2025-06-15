import Link from "next/link";
import { useRouter } from "next/router";

const LoginTrigger = (props) => {
    const router = useRouter();
    // console.log("propsLoginTrigger", props)
    const handleLogout = async (e) => {
        // console.log("logout clicked")
        await props.logoutRequest({ email: props.userEmail })
        router.push('/login')
    };
    return (
        <>
            {props.isLoggedIn ?
                <span className="nav-items" onClick={handleLogout} >
                    Logout
                </span>
                :
                <>
                    <span className={props.currentRoute == "/signup" ? "active nav-items" : "nav-items"} >
                        <Link href="/signup">
                            Signup
                        </Link>
                    </span>
                    <span
                        className={
                            props.currentRoute == "/login" ? "active nav-items" : "nav-items"
                        }
                    >
                        <Link href="/login">
                            Login
                        </Link>
                    </span>
                </>
            }


        </>
    )
}

export default LoginTrigger