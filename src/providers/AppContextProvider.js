import { createContext, useReducer } from "react";
import { steps } from "../utils/constants";

const AppContext = createContext();

export const AppActions = {
  CHANGE_STEP: "CHANGE_STEP",
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
      {
        email: "",
        roleId: 0,
      },
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
        step: action.payload,
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
