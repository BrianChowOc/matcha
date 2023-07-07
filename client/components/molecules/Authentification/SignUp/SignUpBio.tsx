import Link from "next/link";
import { FC } from "react";

type SignUpBioProps = {};

const SignUpBio: FC<SignUpBioProps> = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-8 w-full">
        <p className="px-20">
          BIOGRAPHIE - <span className="text-primary">Etape 3/4</span>
        </p>
        <div className="flex justify-center mt-4 h-full">
          <textarea
            className="border border-1 rounded-xl py-3 px-6 placeholder:italic placeholder:text-black placeholder:text-lg"
            id="description"
            name="description"
            rows={6}
            cols={50}
            placeholder="Description"
          ></textarea>
        </div>
        <div className="flex gap-12 mx-12 mt-4 px-20">
          <Link
            className="flex justify-center font-bold rounded-lg py-1 px-5 text-lg bg-white border border-secondary text-secondary"
            href="/onboarding/signup-interest"
          >
            Retour
          </Link>
          <Link
            className="flex justify-center bg-secondary text-white font-bold rounded-lg py-1 px-5 text-lg"
            href="/onboarding/signup-user-img"
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

export default SignUpBio;
