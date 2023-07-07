import { FC } from "react";
import UserBadge from "@/components/molecules/UserBadge";
import { User } from "@/@types/user";

import ChevronDown from "../../../public/img/chevron-down.svg";

type MemberLoggedPanelProps = {
  user: User;
};

export const MemberLoggedPanel: FC<MemberLoggedPanelProps> = ({ user }) => {
  return (
    <div className="flex h-[54px] w-full items-center gap-4 cursor-pointer">
      <UserBadge
        picture={user.picture}
        isConnected={user.isConnected}
        width={35}
        height={35}
        isSmall={true}
      />
      <div className="font-bold">
        {user.firstname} {user.lastname}
      </div>
      <ChevronDown heigth={7} width={17} />
    </div>
  );
};
