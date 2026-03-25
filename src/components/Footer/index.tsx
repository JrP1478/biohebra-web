import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { FooterSection, CopyrightText } from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  return (
    <FooterSection>
      <Container>
        <CopyrightText>
          © {new Date().getFullYear()} <span>Biohebra</span>. Todos los derechos reservados.
        </CopyrightText>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);