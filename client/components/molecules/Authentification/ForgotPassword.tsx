import Button from "@/components/atoms/Button";
import Input from "@/components/molecules/Input";
import { BUTTON_TYPE, SIZE } from "@/constants";
import { FC } from "react";

type ForgotPasswordProps = {};
const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email", e.target.elements.email.value);
  };
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 w-full"
      >
        <p className="font-bold text-xl">Réinitialiser votre mot de passe</p>
        <div className="flex flex-col w-full gap-4 px-12">
          <Input
            rounded
            type="email"
            placeholder="Email"
            name="email"
            label="Entrez l'adresse e-mail vérifiée de votre compte utilisateur pour réinitialiser votre mot de passe."
          />
        </div>
        <div className="w-full px-12">
          <Button
            className="w-full"
            color={BUTTON_TYPE.SECONDARY}
            size={SIZE.LARGE}
            type="submit"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
