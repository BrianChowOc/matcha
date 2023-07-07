import Button from "@/components/atoms/Button";
import Input from "@/components/molecules/Input";
import InputPassword from "@/components/molecules/InputPassword";
import { BUTTON_TYPE, SIZE } from "@/constants";
import Link from "next/link";
import { FC } from "react";

type SignInProps = {};
const SignIn: FC<SignInProps> = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email", e.target.elements.email.value);
    console.log("password", e.target.elements.password.value);
  };
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 w-full"
      >
        <p className="font-bold">CONNEXION</p>
        <div className="flex flex-col w-full gap-4 px-12">
          <Input rounded type="email" placeholder="Email" name="email" />
          <div>
            <InputPassword rounded placeholder="Mot de passe" />
            <Link
              href="/onboarding/forgot-password"
              className="underline text-[#999999] ml-2 text-sm"
            >
              Mot de passe oublié ?
            </Link>
          </div>
        </div>
        <div className="w-full px-12">
          <Button
            className="w-full"
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
            type="submit"
          >
            Se connecter
          </Button>
        </div>
      </form>
      <p className="mb-3">
        Créer un nouveau profil ?
        <Link
          className="text-primary underline ml-1"
          href="/onboarding/signup-incription"
        >
          Cliquez ici
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
