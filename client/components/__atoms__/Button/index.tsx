import { ButtonHTMLAttributes, FC } from "react";
import { BUTTON_TYPE, SIZE } from "../../../constants";
import { cx } from "@emotion/css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: BUTTON_TYPE;
  size?: SIZE;
  reverse?: boolean;
};
const Button: FC<ButtonProps> = ({
  size = SIZE.MEDIUM,
  reverse = false,
  color = BUTTON_TYPE.PRIMARY,
  children,
  className,
  ...props
}) => {
  const buttonStyle = cx(className, "font-bold rounded-lg py-1 px-5", {
    "bg-primary text-white": !reverse && color === BUTTON_TYPE.PRIMARY,
    "bg-secondary text-white": !reverse && color === BUTTON_TYPE.SECONDARY,
    "text-xs": size === SIZE.XSMALL,
    "text-sm": size === SIZE.SMALL,
    "text-md": size === SIZE.MEDIUM,
    "text-lg": size === SIZE.LARGE,
    "bg-white border border-primary text-primary":
      reverse && color === BUTTON_TYPE.PRIMARY,
    "bg-white border border-secondary text-secondary":
      reverse && color === BUTTON_TYPE.SECONDARY,
  });

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
