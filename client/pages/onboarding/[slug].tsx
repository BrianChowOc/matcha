import { AuthLayout } from "@/components/Layout/AuthLayout";
import SignUpInscription from "@/components/__templates__/Authentification/SignUp/SignUpInscription";
import Head from "next/head";
import { useRouter } from "next/router";
import SignIn from "../../components/__templates__/Authentification/SignIn";
import SignUpCheckMail from "@/components/__templates__/Authentification/SignUp/SignUpCheckMail";
import SignUpInterest from "@/components/__templates__/Authentification/SignUp/SignUpInterest";
import SignUpProfil from "@/components/__templates__/Authentification/SignUp/SignUpProfil";
import SignUpBio from "@/components/__templates__/Authentification/SignUp/SignUpBio";
import SignUpUserImg from "@/components/__templates__/Authentification/SignUp/SignUpUserImg";
import ForgotPassword from "@/components/__templates__/Authentification/ForgotPassword";

const PageComponents = {
  signin: () => <SignIn />,
  "signup-incription": () => <SignUpInscription />,
  "signup-check-mail": () => <SignUpCheckMail />,
  "signup-profil": () => <SignUpProfil />,
  "signup-interest": () => <SignUpInterest />,
  "signup-bio": () => <SignUpBio />,
  "signup-user-img": () => <SignUpUserImg />,
  "forgot-password": () => <ForgotPassword />,
};

const OnBoarding = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug && slug in PageComponents) {
    const Component = PageComponents[slug];
    return (
      <>
        <Head>
          <title>super cool</title>
          <meta name="description" content="bonjour au revoir" />
        </Head>
        <AuthLayout>
          <Component />
        </AuthLayout>
      </>
    );
  }
};

export default OnBoarding;
