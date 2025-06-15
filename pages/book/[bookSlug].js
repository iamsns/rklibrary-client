import { useRouter } from "next/router";
import React from "react";
import Book from "../../components/Book";


export default function Index() {
    const router = useRouter()
  return <Book />
}
