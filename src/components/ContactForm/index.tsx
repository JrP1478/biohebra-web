import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

import {
  ContactContainer,
  CenterText,
  SocialWrapper,
  SocialIcon,
  Divider,
  InfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  ScheduleList,
  ScheduleItem,
  MapWrapper,
  MapFooter,
} from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="center">
        <Col lg={16} md={20} sm={24} xs={24}>

          <Slide direction="up" triggerOnce>
            <CenterText>
              <Block title={title} content={content.text} />
            </CenterText>
          </Slide>

          <SocialWrapper>
            <SocialIcon
              network="facebook"
              href={content.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FaFacebookF({ size: 30 })}
              Facebook
            </SocialIcon>

            <SocialIcon
              network="tiktok"
              href={content.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FaTiktok({ size: 30 })}
              TikTok
            </SocialIcon>
          </SocialWrapper>

          <Divider />

          <InfoGrid>
            <InfoCard>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>
                <a href={`mailto:${content.email.trim()}`}>
                  {content.email.trim()}
                </a>
              </InfoValue>
            </InfoCard>

            <InfoCard>
              <InfoLabel>RUC</InfoLabel>
              <InfoValue>{content.ruc.trim()}</InfoValue>
            </InfoCard>

            <InfoCard className="full-width">
              <InfoLabel>Horario de atención</InfoLabel>
              <ScheduleList>
                <ScheduleItem>{content.schedule_week}</ScheduleItem>
                <ScheduleItem>{content.schedule_sat}</ScheduleItem>
              </ScheduleList>
            </InfoCard>
          </InfoGrid>

          <MapWrapper>
            <iframe
              src={content.maps}
              loading="lazy"
              title="Ubicación"
            />
            <MapFooter>
              {MdLocationOn({ size: 16, color: "#1a3d2e" })}
              Lurigancho-Chosica, Lima, Perú
            </MapFooter>
          </MapWrapper>

        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;