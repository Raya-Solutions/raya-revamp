import { Row, Col, CollapseProps } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { MinPara, MinTitle, ServiceContainer, ServiceContentContainer, Title } from "../ContentBlock/styles";
import { SvgIcon } from "../../common/SvgIcon";
import { Link } from "react-router-dom";
import { PngIcon } from "../../common/PngIcon";

interface MiddleBlockProps {
  title?: string;
  content: string;
  button?: string;
  border?: string;
  destination?: string;
  destinationType?: string;
  collapseItems?: CollapseProps['items'];
  section?: {
    title: string;
    content: string;
    icon?: string;
  }[];
  imageSrc?: string;
  t: TFunction;
  callToAction?: string;
  ctaDirection?: string;
}

const middleBlockContentStyles = (border: string | undefined) => {
  return {
    borderColor: border ?? "#FFFFFF",
    borderStyle: "solid",
    width: "100%",
    padding: typeof border === "string" ? "3em" : "",
    borderRadius: "20px",
  };
};

const MiddleBlock = ({
  title,
  content,
  button,
  destination,
  destinationType,
  section,
  imageSrc,
  t,
  border,
  callToAction,
  ctaDirection
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            {title && <Title>{title}</Title>}
            <Col
              lg={24}
              md={24}
              sm={24}
              xs={24}
              style={middleBlockContentStyles(border)}
            >
              {content && <Content>{t(content)}</Content>}
              {typeof button === "string" && destinationType === "section" && (
                <Button
                  name="submit"
                  onClick={() => scrollTo(destination ?? "")}
                >
                  {t(button)}
                </Button>
              )}
              {typeof button === "string" && destinationType === "page" && (
                <Link to={destination ?? "/"}>
                  <Button>{t(button)}</Button>
                </Link>
              )}
              {callToAction && ctaDirection === "top" && (
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <Button>{t(callToAction)}</Button>
                </div>
              )}
            </Col>
            {imageSrc && (
              <Col lg={24} md={12} sm={12} xs={12} style={{ textAlign: "center", marginTop: "1rem" }}>
                <PngIcon
                  src={imageSrc}
                  width={"100%"} 
                  height={"auto"}
                />
              </Col>
            )}
          </ContentWrapper>
          <Row justify="space-between">
            {section?.map((item, id) => (
              <Col key={id} xs={24} lg={12} xl={12}>
                <ServiceContainer>
                  {item.icon && <SvgIcon src={item.icon} width="75px" height="75px" /> }
                  <ServiceContentContainer
                    style={{ maxWidth: "400px", textAlign: "justify" }}
                  >
                    <MinTitle>{t(item.title)}</MinTitle>
                    <MinPara>{t(item.content)}</MinPara>
                  </ServiceContentContainer>
                </ServiceContainer>
              </Col>
            ))}
          </Row>
          {callToAction && ctaDirection === "bottom" && (
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <Button>{t(callToAction)}</Button>
            </div>
          )}
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
