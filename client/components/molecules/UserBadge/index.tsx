import Image from "next/image";
import { FC } from "react";
import CircleIcon from "../../../public/img/circle-icon.svg";
import { cx } from "@emotion/css";

type userBadgeProps = {
  picture: string;
  isConnected: boolean;
  width: number;
  height: number;
  isSmall: boolean;
};

const UserBadge: FC<userBadgeProps> = ({
  picture,
  isConnected,
  width,
  height,
  isSmall,
}) => {
  const userBadgeStyle = cx("absolute border-2 border-white rounded-full", {
    "right-3 bottom-0": !isSmall,
    "right-[-5px] bottom-[-2px]": isSmall,
  });
  return (
    <div>
      <div className="relative rounded-full">
        <Image
          className="rounded-full"
          src={picture}
          alt=""
          width={width}
          height={height}
        />
        <span className={userBadgeStyle}>
          <CircleIcon
            color={isConnected ? "green" : "gray"}
            height={isSmall ? "14px" : "16px"}
            width={isSmall ? "14px" : "16px"}
          />
        </span>
      </div>
    </div>
  );
};

export default UserBadge;
