import Input from "@/components/molecules/Input";
import Link from "next/link";
import { FC } from "react";
import interests from "../../../../data/interests.js";

type SignUpInterestProps = {};

const SignUpInterest: FC<SignUpInterestProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full px-20">
        <p>
          INTÉRÊTS - <span className="text-primary">Etape 2/4</span>
        </p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {interests.map((interest: string) => {
            return (
              <Input
                key={interest}
                type="checkbox"
                id="interest"
                name="interest"
                value={interest}
                label={interest}
              />
            );
          })}
        </div>
        <div className="flex gap-12 mx-12 mt-4">
          <Link
            className="flex justify-center font-bold rounded-lg py-1 px-5 text-lg bg-white border border-secondary text-secondary"
            href="/onboarding/signup-profil"
          >
            Retour
          </Link>
          <Link
            className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
            href="/onboarding/signup-bio"
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

export default SignUpInterest;
