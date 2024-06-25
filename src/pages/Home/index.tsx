import {lazy, useEffect} from "react";
import IntroContent from "../../content/HomePage/IntroContent.json";
import About from "../../content/HomePage/AboutContent.json";
import ServicesProducts from "../../content/HomePage/ServicesProductsContent.json";
import TailoredSolutions from "../../content/HomePage/TailoredSolutionsContent.json";
import SuccessStories from "../../content/HomePage/SuccessStories.json";
import {scrollUp} from "../../common/ScrollToTop";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

// TODO:
//  follow raya color scheme from their logo
//  features:
//   Tailored Solutions:
//      collapse component : https://ant.design/components/collapse
//          nested collapse (accordion mode)
//              title
//              content
const TailorSolutionButtonContent = [
    {
        title: "Retail",
        key: "1"
    },
    {
        title: "Manufacturing",
        key: "2"
    },
    {
        title: "Construction",
        key: "3"
    },
    {
        title: "Services",
        key: "4"
    },
    {
        title: "Hospitality",
        key: "5"
    },
]

const Home = () => {
    useEffect(() => {
        scrollUp()
    }, []);
  return (
      <>
            <Container>
                  <ScrollToTop />
                  <ContentBlock
                    direction="right"
                    title={IntroContent.title}
                    content={IntroContent.text}
                    // will redirect to contact us page
                    callToAction={IntroContent.callToAction}
                    icon="asset1.png"
                    id="intro"
                  />
                  <MiddleBlock
                    title=""
                    border="#37e7e1"
                    // will redirect to about us page
                    content={About.description}
                    callToAction={About.callToAction}
                    ctaDirection="top"
                  />
                <MiddleBlock
                    title={ServicesProducts.title}
                    content=""
                    callToAction={ServicesProducts.callToAction}
                    ctaDirection="bottom"
                    section={ServicesProducts.section}/>
                <MiddleBlock
                    title={SuccessStories.title}
                    content={SuccessStories.description}
                    section={SuccessStories.examples}
                    imageSrc="technologies.png"
                    callToAction={SuccessStories.callToAction}
                    ctaDirection="bottom"/>
            </Container>
      </>
  );
};

export default Home;
