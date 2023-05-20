import { FC, InputHTMLAttributes } from "react";
import { cx } from "@emotion/css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  placeholder?: string;
  label?: string;
  type?: string;
};

const Input: FC<InputProps> = ({
  rounded,
  placeholder,
  label,
  type,
  className,
}) => {
  const inputStyle = cx(className, "py-1 px-1 border w-auto px-2", {
    "rounded-lg": rounded,
  });

  return (
    <div className="flex flex-col">
      {label && <label className="font-bold">{label}</label>}
      <input type={type} className={inputStyle} placeholder={placeholder} />
    </div>
  );
};

export default Input;
