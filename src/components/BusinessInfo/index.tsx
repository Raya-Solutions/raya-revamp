import { withTranslation, TFunction } from "react-i18next";
import { TextWrapper, Content } from "../Block/styles";
import { Col, Row, Space } from "antd";
import { lazy } from "react";
import ImageCardLink from "../../components/ImageCardLink";
import Container from "../../common/Container";

import {
  ContentSection,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "../../components/ContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

interface Props {
  fb: string;
  x: string;
  email: string;
  phone: string;
  line1: string;
  line2: string;
  line3: string;
}

const BusinessInfo = ({ fb, x, email, phone, line1, line2, line3 }: Props) => {
  return (
    <Container>
        <Space direction="vertical">
        <Row>
            <Space>
            <Col sm={24}>
                <ImageCardLink
                    image="svgrepo_fb.svg"
                    link="https://www.facebook.com/RayaSolutionsPH"
                    title="Facebook"
                    subtitle="/RayaSolutionsPH"
                />
            </Col>
            <Col sm={24} >
                <ImageCardLink
                    image="svgrepo_instagram.svg"
                    link="https://www.instagram.com/solutionsraya/"
                    title="Instagram"
                    subtitle="/solutionsraya"
                />
            </Col>
            <Col sm={24} >
                <ImageCardLink
                    image="svgrepo_youtube.svg"
                    link="https://youtube.com/@RayaSolutionsPh"
                    title="Youtube"
                    subtitle="/@RayaSolutionsPh"
                />
            </Col>
            </Space>
        </Row>
        <Row>
            <Space>
            <Col>
                <ImageCardLink
                    image="svgrepo_phone.svg"
                    link="tel:09088180855"
                    title="Phone number"
                    subtitle="(+63)908-818-0855"
                />
            </Col>
            <Col>
                <ImageCardLink
                    image="svgrepo_email.svg"
                    link="mailto:developer@rayasolutionsph.com"
                    title="Email"
                    subtitle="developer@rayasolutionsph.com"
                />
            </Col>
            </Space>
        </Row>
        </Space>
        <Row align="middle" justify="space-between">
    <Col lg={11} md={11} sm={11} xs={24}>
        <Space direction="vertical" >
        <p>{line1}<br/>{line2}<br/>{line3}</p>
        <p>Weekdays @ 9:00AM – 6:00PM PhST</p>
        </Space>
    </Col>
    <Col lg={11} md={11} sm={24} xs={24}>
        {/* Content for the second column containing the iframe */}
        <ContentWrapper>
            <Content>
                <iframe width="100%" height={350}
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.06013327836992%2C14.588865828256386%2C121.0610988736153%2C14.589634162876383&amp;layer=mapnik"
                />
            </Content>
        </ContentWrapper>
    </Col>
</Row>
        <Contact
            title="Got any questions?"
            content="We're here to help."
            id="contact"
        />
        {/** Placeholder for feedback form **/}
        <Contact
            title="Give us some feedback"
            content="It'll help improve our services."
            id="feedback"
        />
    </Container>
  );
};

export default BusinessInfo;