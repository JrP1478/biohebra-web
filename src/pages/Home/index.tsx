import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhatsappFloat from "../../components/WhatsappFloat";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProductSection = lazy(() => import("../../components/Product"));

const Home = () => {
  return (
    <>
      <Container>
        <ScrollToTop />
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="logo.jpeg"
          id="intro"
        />
        <ContentBlock
          direction="left"
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          section={MiddleBlockContent.section}
          id="sectores"
        />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          icon="saldos.jpg"
          id="about"
        />
        <ContentBlock
          direction="left"
          title={MissionContent.title}
          content={MissionContent.text}
          section={MissionContent.section}
          id="mission"
        />
        <ProductSection/>
        <Contact
          title={ContactContent.title}
          content={ContactContent}
          id="contact"
        />
      </Container>
      
      <WhatsappFloat />
    </>
  );
};

export default Home;
