import React from "react";
import dynamic from "next/dynamic"

const AddBook = dynamic(() => import("../components/BookUpdation"), {ssr:false} )


export default function Index() {
  return <AddBook />
}
