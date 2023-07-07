import { AuthLayout } from "@/components/templates/AuthLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import SignIn from "@/components/molecules/Authentification/SignIn";
import SignUpInscription from "@/components/molecules/Authentification/SignUp/SignUpInscription";
import SignUpCheckMail from "@/components/molecules/Authentification/SignUp/SignUpCheckMail";
import SignUpInterest from "@/components/molecules/Authentification/SignUp/SignUpInterest";
import SignUpProfil from "@/components/molecules/Authentification/SignUp/SignUpProfil";
import SignUpBio from "@/components/molecules/Authentification/SignUp/SignUpBio";
import SignUpUserImg from "@/components/molecules/Authentification/SignUp/SignUpUserImg";
import ForgotPassword from "@/components/molecules/Authentification/ForgotPassword";

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
  return null;
};

export default OnBoarding;
