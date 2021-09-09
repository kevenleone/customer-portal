import { createContext, useReducer } from "react";
import { initialInvite } from "../utils";
import { rolesId, steps } from "../utils/constants";

const AppContext = createContext();

export const AppActions = {
  CHANGE_STEP: "CHANGE_STEP",
  UPDATE_INVITES: "UPDATE_INVITES"
};

export const changeStep = (payload) => {
  return {
    payload,
    type: AppActions.CHANGE_STEP,
  };
};

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
      dataCenterRegion: "",
      dxpCloudEmailAddress: "",
      adminsFirstName: "",
      adminsLastName: "",
      adminsGithubUsername: [
        {
          username: "",
        },
      ],
    },
  },
  dxp: {
    organization: "SuperBank",
    version: "7.3",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActions.CHANGE_STEP: {
      return {
        ...state,
        step: action.payload,
      };
    }
    case AppActions.UPDATE_INVITES: {
      return {
        ...state,
        form: {
          ...state.form,
          invites: action.payload
        },
      };
    }
    default: {
      return state;
    }
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };

export default AppContextProvider;
