import Image from "next/image";
import { FC, ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full">
      <div className="flex w-9/12 h-full">
        <Image
          alt="cover authentification"
          src="/img/heart-padlocks.jpg"
          width={1461}
          height={937}
        />
      </div>
      <div className="flex flex-col items-center w-3/12">
        <Image
          alt="matcha logo"
          src="/img/matcha-logo.png"
          width={327}
          height={109}
          className="my-14"
        />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};
