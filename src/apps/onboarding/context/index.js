import { createContext, useReducer } from "react";
import { initialDxpAdmin, initialInvite } from "../utils";
import { rolesId, steps } from "../utils/constants";
import reducer from "./reducer";

const initialState = {
  step: steps.welcome,
  form: {
    roleId: 0,
    invites: [
      initialInvite(rolesId.creator),
      initialInvite(rolesId.watcher),
      initialInvite(rolesId.watcher)
    ],
    setUpDxp: {
      projectId: "",
      dataCenterRegion: 0,
      admins: [
        initialDxpAdmin()
      ]
    },
  },
  dxp: {
    organization: "SuperBank",
    version: "7.3",
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
