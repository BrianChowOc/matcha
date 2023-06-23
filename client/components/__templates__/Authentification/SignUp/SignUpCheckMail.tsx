import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignUpCheckMailProps = {};

const SignUpCheckMail: FC<SignUpCheckMailProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center gap-8 w-full ">
        <p className="font-bold">{"VÉRIFICATION DE L'EMAIL"}</p>
        <div className="flex flex-col items-center mx-28 gap-4">
          <p className="text-center">
            Veuillez entre le code à 4 chiffres qui vous a été envoyé par mail
          </p>
          <Input />
        </div>
        <div className="flex gap-12 mx-12 mt-4">
          <Link
            className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
            href="/onboarding/signup-profil"
          >
            Soumettre le code
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

export default SignUpCheckMail;
