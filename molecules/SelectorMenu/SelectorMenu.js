import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";
import "./selector-menu.scss"
import {
  BtnSimple,
  BtnGroup,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  Iframe,
  List,
  ProgressBar,
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from "getbasecore/Atoms";

const SelectorMenu = ({children,css}) => {
  return (
	<div className={`selector-menu ${css}`}>
      {children}
	</div>
  );
};

export default SelectorMenu;
