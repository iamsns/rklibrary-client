import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "./styled"

const Navbar = (props) => {
    const router = useRouter();
    const currentRoute = router.pathname;
    // console.log("navbarProps", props);
    const Modules = props.userDetails?.role == 'READER' ? [
        {
            title: "Books",
            url: "/books",
            isNav: true,
            childrenData : [
                {
                    title: "Geography",
                    url: "/book-category/geography",
                    isNav: true,
                },
            ]
        },
        {
            title: "My Books",
            url: "/issue-books",
            isNav: props.userDetails?.role == 'READER',
        },
        {
            title: "About Us",
            url: "/about-us",
            isNav: true,
        },
        {
            title: "Contact Us",
            url: "/contact-us",
            isNav: true,
        },
    ] : [
        {
            title: "Books",
            url: "/books",
            isNav: true,
            childrenData : [
                {
                    title: "Geography",
                    url: "/book-category/geography",
                    isNav: true,
                },
            ]
        },
        {
            title: "Add Book",
            url: "/add-book",
            isNav: props.userDetails?.role == 'ADMIN'|| props.userDetails?.role == 'LIBRARIAN',
        },
        {
            title: "Issue Requests",
            url: "/issue-books",
            isNav: props.userDetails?.role == 'ADMIN'|| props.userDetails?.role == 'LIBRARIAN',
        },
        {
            title: "About Us",
            url: "/about-us",
            isNav: true,
        },
        {
            title: "Contact Us",
            url: "/contact-us",
            isNav: true,
        },
    ]
    return (
        <Wrapper>
            {Modules?.map((nav, index) => {
                if (nav.isNav) {
                    return (
                        <span key={index} className={currentRoute === nav.url ? "active nav-items" : "nav-items"}>
                        <Link
                            href={nav.url}
                        >
                            {nav.title}
                        </Link>
                    </span>
                    )
                }
                return null
            })}
        </Wrapper>
    )
}

export default Navbar