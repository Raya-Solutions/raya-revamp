import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  Para,
  Large,
  Empty,
  Language,
} from "./styles";


const Footer = ({ t }: { t: TFunction }) => {
  return (
      <>
<FooterSection>
  <Container>
    {/* Footer Content with Quick Links and Contact Information in the Same Row */}
    <Row justify="space-between">
      <Col lg={12} md={12} sm={24} xs={24}>
        <Language>{t("Quick Links")}</Language>
        <Large to="/">{t("Home")}</Large>
        <Large to="/who-is-raya">{t("About Us")}</Large>
        <Large to="/services-products">{t("Services")}</Large>
        <Large to="/results">{t("Success Stories")}</Large>
        <Large to="/contact">{t("Contact Us")}</Large>
        <Large to="/privacy-policy">{t("Privacy Policy")}</Large>
        <Large to="/terms">{t("Terms & Conditions")}</Large>
      </Col>
      <Col lg={12} md={12} sm={24} xs={24}>
        <Language>{t("Contact")}</Language>
        <Large to="/support">{t("Submit a Ticket")}</Large>
        <Para>{`Do you have any question? Feel free to reach out.`}</Para>
        <Language>{"Phone"}</Language>
        <Para>+63 917-175-8812</Para>
        <Language>{"Email"}</Language>
        <Para>ranz@rayasolutionsph.com</Para>
      </Col>
    </Row>
    <Row justify="center">
      <Col lg={24} md={24} sm={24} xs={24}>
        <Language>{t("Address")}</Language>
        <Para>Cityland Mega Plaza</Para>
        <Para>ADB Avenue, Topaz Rd</Para>
        <Para>San Antonio, Pasig City</Para>
        <Para>Metro Manila</Para>
      </Col>
    </Row>
  </Container>
</FooterSection>


      </>
  );
};

export default withTranslation()(Footer);
