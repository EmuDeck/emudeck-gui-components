import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import DeviceSelector from "../pages/DeviceSelector";
import EmulatorSelector from "../pages/EmulatorSelector";
import EmulatorConfiguration from "../pages/EmulatorConfiguration";
import RomStorage from "../pages/RomStorage";
import RomStructure from "../pages/RomStructure";
import RABezels from "../pages/RABezels";
import PegasusTheme from "../pages/PegasusTheme";
import End from "../pages/End";

const path = `${process.env.PUBLIC_URL}`;

export const AppRouter = () => {
  return (
    <BrowserRouter path={path}>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/device-selector" element={<DeviceSelector />} />
        <Route exact path="/emulator-selector" element={<EmulatorSelector />} />
        <Route
          exact
          path="/emulator-configuration"
          element={<EmulatorConfiguration />}
        />
        <Route exact path="/rom-storage" element={<RomStorage />} />
        <Route exact path="/rom-structure" element={<RomStructure />} />
        <Route exact path="/RA-bezels" element={<RABezels />} />
        <Route exact path="/pegasus-theme" element={<PegasusTheme />} />
        <Route exact path="/end" element={<End />} />
      </Routes>
    </BrowserRouter>
  );
};
