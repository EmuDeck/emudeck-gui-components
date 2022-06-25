import React, { useState } from "react";
import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter.js";
import { GlobalContext } from "./context/globalContext";
import reportWebVitals from "./reportWebVitals";
import "getbasecore/src/utils/reset/core_reset.scss";
import "getbasecore/src/utils/grid-layout/core_grid-layout.scss";
import "getbasecore/src/components/atoms/Typography/core_typography.scss";

export const App = () => {
  const [state, setState] = useState({
    debug: "initial",
    device: "",
    storage: "",
    SDID: "",
    bezels: "",
    snes: "",
    installEmus: {
      ra: true,
      dolphinmmjr: true,
      drastic: true,
      redream: true,
      yaba: true,
      ppsspp: true,
      duckstation: true,
      citra: true,
      aether: true,
      mupen: true,
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <AppRouter />
    </GlobalContext.Provider>
  );
};
