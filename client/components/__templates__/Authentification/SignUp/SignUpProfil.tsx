import Button from "@/components/__atoms__/Button";
import Input from "@/components/__atoms__/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignUpProfilProps = {};

const SignUpProfil: FC<SignUpProfilProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full px-20">
        <p>
          PROFIL - <span className="text-primary">Etape 1/4</span>
        </p>
        <div className="flex flex-col gap-12 mt-4">
          <div>
            <span className="font-bold">Genre</span>
            <div className="flex gap-6">
              <Input
                className="checked:bg-green-500 text-green-500 "
                type="radio"
                id="sex"
                name="sex"
                value="Homme"
                label="Homme"
              />
              <Input
                className="bg-primary"
                type="radio"
                id="sex"
                name="sex"
                value="Femme"
                label="Femme"
              />
            </div>
          </div>
          <div>
            <span className="font-bold">Orientation sexuelle</span>
            <div className="flex gap-6">
              <Input
                className="checked:bg-green-500 text-green-500 "
                type="radio"
                id="sexual orientation"
                name="sexual orientation"
                value="Hétéro"
                label="Hétéro"
              />
              <Input
                className="bg-primary"
                type="radio"
                id="sexual orientation"
                name="sexual orientation"
                value="Homo"
                label="Homo"
              />
              <Input
                className="bg-primary"
                type="radio"
                id="sexual orientation"
                name="sexual orientation"
                value="Bi"
                label="Bi"
              />
            </div>
          </div>
          <div>
            <span className="font-bold">Date de naissance</span>
            <div>
              <Input placeholder="jj/mm/aaaa" />
            </div>
          </div>
          <div>
            <span>Localisation</span>
            <div>
              <Input placeholder="Ville" />
            </div>
          </div>
        </div>
        <div className="flex gap-12 justify-center mt-4">
          <Link
            className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
            href="/onboarding/signup-interest"
          >
            Suivant
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

export default SignUpProfil;
