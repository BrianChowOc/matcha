import { BUTTON_TYPE, SIZE } from "@/constants";
import Input from "@/components/molecules/Input";
import InputPassword from "@/components/molecules/InputPassword";
import OverlayMenu from "@/components/molecules/OverlayMenu";
import { Header } from "@/components/organisms/Header";
import Button from "@/components/atoms/Button";
import Signin from "@/components/molecules/Authentification/Signin";

const MOCK_USER = {
  firstname: "JOHN",
  lastname: "DOE",
  picture: "/../public/img/photoUser.png",
  isConnected: true,
  age: 22,
  genre: "Homme",
};

const Home = () => {
  return (
    <>
      <Header user={MOCK_USER} />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h2>Bouton</h2>
          <Button size={SIZE.MEDIUM} color={BUTTON_TYPE.PRIMARY}>
            TEST
          </Button>
          <Button size={SIZE.LARGE} color={BUTTON_TYPE.SECONDARY}>
            TEST
          </Button>
          <Button size={SIZE.LARGE} reverse color={BUTTON_TYPE.PRIMARY}>
            TEST
          </Button>
          <Button size={SIZE.LARGE} reverse color={BUTTON_TYPE.SECONDARY}>
            TEST
          </Button>
        </div>
        <div className="bg-primary">
          <h2>Input</h2>
          <Input type="text" placeholder="TEST" label="TEST" />
          <InputPassword />
        </div>
        <Signin />

        <div>
          <h3>USER</h3>
          <OverlayMenu user={MOCK_USER} />
        </div>
      </div>
    </>
  );
};

export default Home;
