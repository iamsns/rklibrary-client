import dynamic from "next/dynamic"

const Users = dynamic(() => import('../components/Users/components'), { ssr: false })

const Index = () => {
    return <Users />
}

export default Index