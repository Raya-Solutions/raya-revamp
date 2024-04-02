import { lazy } from "react";
import SupportContent from "../../content/CustomerSupportPage/SupportContent.json";
import Overview from "../../content/CustomerSupportPage/OverviewContent.json";
import {Title} from "../TailoredSolutions/styles";
const SupportForm = lazy(() => import("../../components/SupportForm"));
const Container = lazy(() => import("../../common/Container"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Support = () => {
    return (
        <Container>
        <Title>{Overview.title}</Title>
        <SupportForm
            title={SupportContent.title}
            content={SupportContent.text}
            id="support"
        />
        </Container>
        )
};

export default Support;