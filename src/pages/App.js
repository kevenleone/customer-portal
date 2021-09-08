import { useContext } from "react";
import Roles from "../components/onboard/roles";
import Welcome from "../components/onboard/welcome";
import { AppContext } from "../providers/AppContextProvider";

import { steps } from "../utils/constants";

function App() {
  const [{ step }] = useContext(AppContext);

  switch (step) {
    case steps.welcome: {
      return <Welcome />
    }
    case steps.roles: {
      return <Roles />
    }
    default: {
      return <Welcome />;
    }
  }
}

export default App;
