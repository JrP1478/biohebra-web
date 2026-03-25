import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 8rem 0 6rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0;
  }
`;

export const Title = styled("h6")`
  text-align: center;
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-size: 18px;
  color: #5a5a5a;
  max-width: 600px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const MiddleBlockContent = styled("p")`
  margin: 1.5rem 0 2rem 0 ;
  font-size: 18px;
  color: #5a5a5a;
  text-align: center; 
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 100%;

  @media (max-width: 768px) {
  width: 100% !important;
}
`;

export const ServiceWrapper = styled("div")`
  margin-top: 20px;
  width: 100%;

  .service-card {
    background: white;
    border-radius: 24px;
    padding: 40px 25px 35px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    height: 100%;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(10, 92, 54, 0.08);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #0a5c36, #1e7b4c, #2e9a64);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-12px);
      box-shadow: 0 30px 60px rgba(10, 92, 54, 0.15);
      border-color: rgba(10, 92, 54, 0.15);

      &::before {
        transform: scaleX(1);
      }
    }
  }

  .icon-wrapper {
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #0a5c36 0%, #1e7b4c 60%, #2e9a64 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 15px 25px rgba(10, 92, 54, 0.25);
    transition: all 0.3s ease;
    padding: 18px;

    .service-card:hover & {
      border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
      transform: scale(1.05) rotate(5deg);
    }
    
    img {
      width: 85px;
      height: 85px;
      object-fit: contain;
      display: block;
    }

    img.icon-white {
      filter: brightness(0) invert(1);
    }

    span, i {
      color: white;
      font-size: 52px;
      line-height: 1;
    }
  }

  @media (max-width: 1024px) {
    .service-card {
      padding: 35px 20px 30px;
      min-height: 300px;
    }
    
    .icon-wrapper {
      width: 100px;
      height: 100px;
      padding: 14px;
      
      img {
        width: 60px;
        height: 60px;
      }

      span, i {
        font-size: 45px;
      }
    }
  }

  @media (max-width: 600px) {
    .service-card {
      padding: 30px 15px 25px;
      min-height: 280px;
    }
    
    .icon-wrapper {
      width: 90px;
      height: 90px;
      padding: 12px;
      
      img {
        width: 55px;
        height: 55px;
      }

      span, i {
        font-size: 40px;
      }
    }
  }
`;

export const MinTitle = styled("h6")`
  font-size: 22px; 
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 14px;
  line-height: 1.4;
`;

export const MinPara = styled("p")`
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 0;
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
