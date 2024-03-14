import { lazy } from "react";
import SupportContent from "../../content/SupportContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));

const Support = () => {
    return (
        <Container>
        <Contact
            title={SupportContent.title}
            content={SupportContent.text}
            id="support"
        />
        </Container>
        )
};

export default Support;