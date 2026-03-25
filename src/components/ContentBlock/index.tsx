import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  MiddleBlockContent,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  Title,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {icon && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
          )}
          <Col lg={icon ? 11 : 24} md={icon ? 11 : 24} sm={24} xs={24}>
            <ContentWrapper>
               {id !== "intro" ? (
                <Title>{t(title)}</Title>
              ) : (
                <h6>{t(title)}</h6>
              )}
              {id !== "intro" ? (
                <MiddleBlockContent>{t(content)}</MiddleBlockContent>
              ) : (
                <Content>{t(content)}</Content>
              )}
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          scroll?: string;
                          href?: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            href={item.href}
                            onClick={item.scroll ? () => scrollTo(item.scroll!) : undefined}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row gutter={[25, 25]} justify="center">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} xs={24} sm={12} md={8} lg={6}>
                              <div className="service-card">
                                <div className="icon-wrapper">
                                  <SvgIcon
                                    src={item.icon}
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <MinTitle>{t(item.title)}</MinTitle>
                                <MinPara>{t(item.content)}</MinPara>
                              </div>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
