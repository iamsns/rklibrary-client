import dynamic from "next/dynamic"

const BookCategories = dynamic(() => import("../components/BookCategories"), {ssr:false} )

export default function Index() {
    return <BookCategories />
}