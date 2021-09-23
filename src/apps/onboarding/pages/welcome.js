import { useContext } from "react";
import { PrimaryButton } from "../../../shared/components/buttons";
import Intro from "../assets/intro.svg";
import { AppContext } from "../context";
import { changeStep } from "../context/actions";
import { steps } from "../utils/constants";
import Layout from "./layout";

const Welcome = () => {
  const [, dispatch] = useContext(AppContext);

  return (
    <Layout
      footerProps={{
        middleButton: <PrimaryButton text={"Get Started"} onClick={() => dispatch(changeStep(steps.invites))} />
      }}
      headerProps={{
        intro: "Hello Sarah,",
        title: "Welcome to Liferay’s Customer Portal",
        subtitle: "",
      }}
    >
      <div className="align-items-center d-flex flex-column justify-content-center px-4">
        <img
          height={300}
          width={392}
          alt="Costumer Service Intro"
          draggable={false}
          src={Intro}
          className="mt-5 mb-4"
        />

        <p className="text-dark text-center px-2 mx-5">
          Let’s download your DXP activation keys, add any team members to your
          projects and give you a quick tour of the space.
        </p>
      </div>
    </Layout>
  );
};

export default Welcome;
