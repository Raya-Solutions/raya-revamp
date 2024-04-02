import React, {useEffect} from "react";
import {Col, ConfigProvider, Row, Tabs} from "antd";
import {tailoredSolutionsContent} from "./TailoredSolutionsContent";
import {scrollUp} from "../../common/ScrollToTop";
import {FlexWithBackgroundImage, Title} from "./styles";


const TailoredSolutions = () => {
    useEffect(() => {
        scrollUp();
    }, []);

    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);
    // const activeKey = searchParams.get('key');
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemSelectedColor: "#349ade",
                        inkBarColor: "#349ade",
                        cardBg: "#349ade",
                        itemColor: "#FFFFFF",
                        itemHoverColor: "#FFFFFF",
                    }
                },
                token: {
                }
            }}
        >
            <FlexWithBackgroundImage vertical justify="center" align="center">

                {/*<MiddleBlock title="Tailored Solutions" content=""/>*/}
                <Title >Tailored Solutions</Title>
                <Row justify="center" style={{
                    marginBottom: "10em",
                }}>
                    <Col span={12} >
                    <Tabs
                        type="card"
                        size="large"
                        tabPosition={window.innerWidth <= 684 ? "top" : "left"}
                        items={tailoredSolutionsContent}
                    />
                    </Col>
                </Row>
            </FlexWithBackgroundImage>
        </ConfigProvider>
    )
}


export default TailoredSolutions;
