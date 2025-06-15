import dynamic from "next/dynamic";

const ContactUs = dynamic(() => import("../components/ContactUs"), { ssr: false });
const Index = () => {
  return <ContactUs />
};

export default Index;
