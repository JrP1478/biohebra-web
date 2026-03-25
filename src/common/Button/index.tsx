import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, href, name }: ButtonProps) => {

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <StyledButton color={color} name={name}>
          {children}
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton color={color} onClick={onClick} name={name}>
      {children}
    </StyledButton>
  );
};