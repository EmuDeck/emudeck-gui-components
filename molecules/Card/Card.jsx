import React, { useEffect, useState, useContext } from "react";

import { GlobalContext } from "context/globalContext";
import "./card.scss";
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

const Card = ({ children, css, onClick }) => {
  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  return (
    <div className={`card ${css}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
