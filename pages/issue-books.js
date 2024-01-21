import dynamic from "next/dynamic";
import React from "react";
const Mybooks = dynamic(() => import("../components/IssueBooks"), { ssr: false });

const Index = () => {
  return <Mybooks />
}

export default Index