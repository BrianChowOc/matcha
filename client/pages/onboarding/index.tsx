import { AuthLayout } from "@/components/templates/AuthLayout";
import Authentification from "@/components/molecules/Authentification";
import Head from "next/head";
const OnBoarding = () => {
  return (
    <>
      <Head>
        <title>Authentification</title>
        <meta name="description" content="bonjour au revoir" />
      </Head>
      <AuthLayout>
        <Authentification />
      </AuthLayout>
    </>
  );
};

export default OnBoarding;
