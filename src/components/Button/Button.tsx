import { Icon } from "@/components";
import { IconName } from "@/components/Icon/types";
import styled from "styled-components";
import { BaseButton } from "../commonElement";

type ButtonType = "primary" | "secondary" | "danger";
type Alignment = "center" | "left";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  disabled?: boolean;
  label?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  align?: Alignment;
  fillWidth?: boolean;
}

export const Button = ({
  type = "primary",
  iconLeft,
  iconRight,
  label,
  align = "center",
  children,
  fillWidth,
  ...delegated
}: ButtonProps) => (
  <StyledButton
    $styleType={type}
    $align={align}
    $fillWidth={fillWidth}
    {...delegated}
  >
    {iconLeft && (
      <ButtonIcon
        name={iconLeft}
        size="sm"
      />
    )}
    {label ? label : children}
    {iconRight && (
      <ButtonIcon
        name={iconRight}
        size="sm"
      />
    )}
  </StyledButton>
);

const StyledButton = styled(BaseButton)<{
  $styleType: ButtonType;
  $align?: Alignment;
  $fillWidth?: boolean;
}>`
  width: ${({ $fillWidth }) => ($fillWidth ? "100%" : "revert")};
  color: ${({ $styleType = "primary", theme }) =>
    theme.click.button.basic.color[$styleType].text.default};
  background-color: ${({ $styleType = "primary", theme }) =>
    theme.click.button.basic.color[$styleType].background.default};
  border: 1px solid
    ${({ $styleType = "primary", theme }) =>
      theme.click.button.basic.color[$styleType].stroke.default};

  display: flex;
  align-items: center;
  justify-content: ${({ $align }) => ($align === "left" ? "flex-start" : "center")};

  &:hover {
    background-color: ${({ $styleType = "primary", theme }) =>
      theme.click.button.basic.color[$styleType].background.hover};
    border: 1px solid
      ${({ $styleType = "primary", theme }) =>
        theme.click.button.basic.color[$styleType].stroke.hover};
    transition: ${({ theme }) => theme.transition.default};
  }

  &:active,
  &:focus {
    background-color: ${({ $styleType = "primary", theme }) =>
      theme.click.button.basic.color[$styleType].background.active};
    border: 1px solid
      ${({ $styleType = "primary", theme }) =>
        theme.click.button.basic.color[$styleType].stroke.active};
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    background-color: ${({ $styleType = "primary", theme }) =>
      theme.click.button.basic.color[$styleType].background.disabled};
    color: ${({ $styleType = "primary", theme }) =>
      theme.click.button.basic.color[$styleType].text.disabled};
    border: 1px solid
      ${({ $styleType = "primary", theme }) =>
        theme.click.button.basic.color[$styleType].stroke.disabled};
  }
`;

const ButtonIcon = styled(Icon)`
  height: ${({ theme }) => theme.click.button.basic.size.icon.all};
  width: ${({ theme }) => theme.click.button.basic.size.icon.all};
  svg {
    height: ${({ theme }) => theme.click.button.basic.size.icon.all};
    width: ${({ theme }) => theme.click.button.basic.size.icon.all};
  }
`;
