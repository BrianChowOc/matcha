import { FC, InputHTMLAttributes } from "react";
import { cx } from "@emotion/css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  label?: string;
  type?: string;
};

const Input: FC<InputProps> = ({
  label,
  rounded,
  type = "text",
  className,
  ...props
}) => {
  const inputStyle = cx(
    className,
    "py-1 px-1 border w-auto px-2 outline-none placeholder:italic",
    {
      "rounded-2xl": rounded,
    }
  );

  if (type === "text" || type === "email") {
    return (
      <div className="flex flex-col">
        {label && <label className={"font-bold"}>{label}</label>}
        <input type={type} className={inputStyle} {...props} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-1">
        <input type={type} {...props} />
        {label && <label>{label}</label>}
      </div>
    );
  }
};

export default Input;
