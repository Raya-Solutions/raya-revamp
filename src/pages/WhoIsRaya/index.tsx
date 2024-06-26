import "./styles.css"
import React from "react";
import WhoIsRayaContent from "../../content/WhoIsRayaPage/WhoIsRayaContent.json"
import {MinSubtitle} from "../TailoredSolutions/styles";
import {Card, Col, Flex, Popover} from "antd";
import {LeftCircleFilled, RightCircleFilled} from "@ant-design/icons";
import {MinTitle,MinPara, PopoverContainer} from "../../components/ContentBlock/styles";
import {QualitySlide, StyledCarousel, StyledFlex} from "./styles";
import {SvgIcon} from "../../common/SvgIcon";
import {SubHeading} from "../../components/TabContent/styles";
import {Title} from "../TailoredSolutions/styles";

interface QualitiesPopoverProps  {
    items: {
        title: string
        description: string
    }[] | undefined
}
export const QualitiesPopover = ({items} : QualitiesPopoverProps) => {
    return (
        <>
            {items?.map((item: {title: string, description: string}) => {
                const popOverContent = <PopoverContainer>{item.description}</PopoverContainer>
                return (
                    <Col xl={12} lg={12} xs={18}>
                        <Popover placement="bottom" content={popOverContent}>
                            <Card bordered hoverable style={{
                                margin: "1em",
                                borderColor: "#349ade",
                                textAlign: "center"}}
                                  size="small">
                                <SubHeading> {item.description}</SubHeading>
                            </Card>
                        </Popover>
                    </Col>
            )
            })
            }
        </>
    )
}

const WhoIsRaya = () => {
    return (

        <>

<div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
  <Title>{WhoIsRayaContent.title}</Title>
  <p>{WhoIsRayaContent.description}</p>
</div>


 <StyledFlex justify="center">
            <StyledCarousel
                arrows
                prevArrow={<LeftCircleFilled/>}
                nextArrow={<RightCircleFilled/>}
            >
                {
                    WhoIsRayaContent.qualities.map((
                        quality: {
                            title: string,
                            description: string,
                            qualityIntro: string,
                            icon: string,
                            cardSection : {title: string,  description: string}[]
                        }
                    ) => {
                        return (
                            <QualitySlide>
                                <Flex vertical justify="center" align="center">
                                    <SvgIcon src={quality.icon} width="100px" height="100px"/>
                                        <MinSubtitle>{quality.title}</MinSubtitle>
                                        <MinPara>{quality.description}</MinPara>
                                        <MinSubtitle>{quality.qualityIntro}</MinSubtitle>
                                    <Flex wrap="wrap" justify="center" align="center">
                                        <QualitiesPopover items={quality.cardSection}/>
                                    </Flex>
                                </Flex>
                            </QualitySlide>
                        )
                    })
                }

            </StyledCarousel>

        </StyledFlex>
        </>
        
    )
}

export default WhoIsRaya;