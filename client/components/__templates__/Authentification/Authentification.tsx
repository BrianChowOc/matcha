import Link from "next/link";
import { FC } from "react";

type AuthentificationProps = {};
const Authentification: FC<AuthentificationProps> = () => {
  return (
    <div className="flex flex-col h-full gap-44 items-center">
      <p className="font-bold text-xl">
        {"Trouver l'amour sur notre site de rencontre"}
      </p>
      <div className="flex flex-col gap-3 px-12 w-full">
        <Link
          className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
          href="/onboarding/signin"
        >
          Se connecter
        </Link>
        <Link
          className="flex justify-center bg-primary text-white font-bold rounded-lg py-1 px-5 text-lg"
          href="/onboarding/signup-incription"
        >
          Créer un compte
        </Link>
      </div>
    </div>
  );
};

export default Authentification;
