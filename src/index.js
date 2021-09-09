import React from "react";
import ReactDOM from "react-dom";
import AppContextProvider from "./providers/AppContextProvider";
import spritemap from "./assets/icons.svg";
import { ClayIconSpriteContext } from '@clayui/icon';
import "./styles/global.scss";

import App from "./pages/App";

ReactDOM.render(
  <ClayIconSpriteContext.Provider value={spritemap}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ClayIconSpriteContext.Provider>,
  document.getElementById("root")
);
