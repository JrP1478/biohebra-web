import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const CenterText = styled("div")`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

export const SocialWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 2.5rem;
`;

export const SocialIcon = styled("a")<{ network: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 22px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: white !important;
  transition: transform 0.2s ease;

  background: ${({ network }) =>
    network === "facebook" ? "#1877F2" : "#111111"};

  &:hover {
    color: white !important;
    transform: translateY(-2px);
  }
`;

export const Divider = styled("div")`
  height: 1px;
  background: #d9d9d9;
  margin: 0 0 2rem;
`;

export const InfoGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 2rem;

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled("div")`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  padding: 1.1rem 1.25rem;

  &.full-width {
    grid-column: 1 / -1;
  }
`;

export const InfoLabel = styled("p")`
  font-size: 15px;
  font-weight: 500;
  color: #1e7b4c;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 4px;
`;

export const InfoValue = styled("p")`
  font-size: 19px;
  color: #000000;
  margin: 0;

  a {
    color: #0a5c36;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ScheduleList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 6px;
`;

export const ScheduleItem = styled("div")`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 18px;
  color: #000000;
  line-height: 1.5;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0a5c36;
    margin-top: 5px;
    flex-shrink: 0;
  }
`;

export const MapWrapper = styled("div")`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #d9d9d9;

  iframe {
    width: 100%;
    height: 320px;
    border: none;
    display: block;
  }
`;

export const MapFooter = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  color: #0a5c36;
  padding: 10px 14px;
  background: #f9f9f9;
  border-top: 1px solid #d9d9d9;
`;