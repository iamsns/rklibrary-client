import dynamic from "next/dynamic";
import React from "react";
const Mybooks = dynamic(() => import("../components/IssueBooks"), { ssr: false });

export default function Index() {

  return <Mybooks />
}
