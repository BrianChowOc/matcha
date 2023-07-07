import Link from "next/link";
import { FC } from "react";
import DragZone from "@/components/molecules/DragZone";

type SignUpUserImgProps = {};

const SignUpUserImg: FC<SignUpUserImgProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full">
        <p className="px-20">
          PHOTO DE PROFIL - <span className="text-primary">Etape 4/4</span>
        </p>
        <div className="mx-6 h-48">
          <DragZone />
        </div>
        <div className="flex gap-12 mx-12 mt-4 px-20">
          <Link
            className="flex justify-center font-bold rounded-lg py-1 px-5 text-lg bg-white border border-secondary text-secondary"
            href="/onboarding/signup-bio"
          >
            Retour
          </Link>
          <Link
            className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
            href="/"
          >
            Terminer
          </Link>
        </div>
      </div>
      <p className="mb-3">
        Déjà membre ?
        <Link className="text-secondary ml-1" href="/onboarding/signin">
          Se connecter
        </Link>
      </p>
    </div>
  );
};

export default SignUpUserImg;
