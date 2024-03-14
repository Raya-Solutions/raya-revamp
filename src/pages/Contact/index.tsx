import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));

const ContactUs = () => {
    return (
        <Container>
        <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
        />
        <!-- TODO: Component for business info, social links -->
        <!-- TODO: Location map, business hours component, -->
        <!-- TODO: Feedback form, faqs here -->
        </Container>
        )
}

export default ContactUs;