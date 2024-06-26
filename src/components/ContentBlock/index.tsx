import {Col, Flex, Row} from "antd";
import {Fade} from "react-awesome-reveal";
import {withTranslation} from "react-i18next";
import {ContentBlockProps} from "./types";
import {Button} from "../../common/Button";
import {SvgIcon} from "../../common/SvgIcon";
import {
  Content,
  ContentSection,
  ContentWrapper,
  MinPara,
  MinTitle,
  ServiceWrapper, StyledFlex,
  StyledRow, Title,
} from "./styles";
import {Link} from "react-router-dom";


interface TailoredSolutionsNavProps {
  buttons: {
    title: string
    key?: string
    color?: string
  }[] | undefined
}

interface SectionItemsBlockProps {
  items: {
    title: string;
    content: string;
    icon: string;
  }[] | undefined
}


const TailoredSolutionsNav = ({buttons} : TailoredSolutionsNavProps) => {
  return (
        <StyledFlex justify="center" wrap="wrap" style={{
          paddingBottom: "5rem"
        }}>
          {
            buttons?.map((item: { color?: string; title: string; key?: string; }) => {
                  return (
                        <Button color={item.color}>
                            {item.title}
                        </Button>
                  )
                })
          }
        </StyledFlex>
  )
}

const SectionItemsBlock = ({items}: SectionItemsBlockProps) => {
  return (
      <>
        {
          items?.map((item: { title: string; content: string; icon: string; }) => {
          return (
                <StyledFlex vertical>
                  {item.icon !== "" && <SvgIcon
                      src={item.icon}
                      width="60px"
                      height="60px"
                  />}
                  <MinTitle>{item.title}</MinTitle>
                  <MinPara>{item.content}</MinPara>
                </StyledFlex>
          );
        })
        }
      </>
  )
}


const ContentBlock = ({
  icon,
  title,
  titleAlignment,
  content,
  section,
  button,
  id,
  direction,
  callToAction
}: ContentBlockProps) => {


  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}>
          {
            icon !== "" &&
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          }
          <Col lg={11} md={11} sm={11} xs={24}>
            <Flex vertical align={window.innerWidth < 684 ? "center" : ""}>
              {titleAlignment !== "right" && <Title>{title}</Title>}
            </Flex>
            <ContentWrapper>
                <Content>{content}</Content>
              {direction === "right" && icon === "" &&
                  <>
                    <Row justify="space-between">
                    </Row>
                  </>
              }
              <ServiceWrapper>
                <Row justify="space-between">
                  <SectionItemsBlock items={section}/>
                </Row>
                <StyledFlex style={{ marginTop: "1rem" }}>
                  <Button>{callToAction}</Button>
                </StyledFlex>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24} >
          {titleAlignment === "right" && <Title>{title}</Title>}
          <Link to="/tailored-solutions">
            <TailoredSolutionsNav buttons={button}/>
          </Link>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
