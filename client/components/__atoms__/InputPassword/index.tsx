import { FC, InputHTMLAttributes, useState } from "react";
import { cx } from "@emotion/css";
import IconEye from "../../../public/img/eye-icon.svg";
import Image from "next/image";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rounded?: boolean;
  placeholder?: string;
};

const InputPassword: FC<InputProps> = ({ rounded, ...props }) => {
  const inputStyle = cx("flex py-1 px-1 border w-auto px-2 justify-between", {
    "rounded-2xl": rounded,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className={inputStyle}>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        {...props}
        autoFocus={false}
        className="focus:outline-none placeholder:italic"
      />
      <Image
        onClick={handleShowPassword}
        src="/img/eye-icon.svg"
        alt="eye-icon"
        width={24}
        height={24}
        className="mr-5 cursor-pointer"
      />
    </div>
  );
};

export default InputPassword;
