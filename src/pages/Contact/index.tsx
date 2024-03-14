import { lazy } from "react";
import BusinessInfo  from "../../components/BusinessInfo";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));

const ContactUs = () => {
    return (
        <Container>
        <BusinessInfo
            fb="fb"
            x="x"
            email="email"
            phone="phone"
            address="address"
        />
        <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
        />
        </Container>
        )
}

export default ContactUs;