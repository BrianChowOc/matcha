import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { MemberLoggedPanel } from "../../__molecules__/MemberLoggedPanel";
import { User } from "@/@types/user";
import OverlayMenu from "@/components/__molecules__/OverlayMenu";
import { useOnClickOutside } from "usehooks-ts";

type HeaderProps = {
  user: User;
};

export const Header: FC<HeaderProps> = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);
  const refOverlayMenu = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (
      refOverlayMenu.current &&
      event.target instanceof Node &&
      refOverlayMenu.current.contains(event.target)
    ) {
      return;
    }
    setShowMenu(false);
  };

  const handleClickInside = () => {
    setShowMenu((prev) => !prev);
    console.log("clicked inside");
  };

  useOnClickOutside(refMenu, handleClickOutside);

  return (
    <div className="flex h-[54px] justify-between px-5 w-full">
      <div>
        <Image
          alt="matcha logo"
          src="/img/matcha-logo.png"
          width={155}
          height={51}
        />
      </div>
      <div className="flex flex-col relative">
        <div ref={refMenu} onClick={handleClickInside}>
          <MemberLoggedPanel user={user} />
        </div>
        {showMenu ? (
          <div
            className="absolute bottom-[-290px] right-0"
            ref={refOverlayMenu}
          >
            <OverlayMenu user={user} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
