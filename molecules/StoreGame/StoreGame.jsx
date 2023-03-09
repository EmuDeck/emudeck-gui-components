import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';
import './store-game.scss';
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
} from 'getbasecore/Atoms';

const StoreGame = ({
  children,
  css,
  img,
  title,
  tags,
  system,
  onMore,
  onInstall,
}) => {
  console.log({ tags });

  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  return (
    <li className={`store-game ${css}`}>
      <div className="store-game__img">
        <img src={img} />
      </div>

      <div className="store-game__info">
        <div className="store-game__title">
          <span class="h6">{title}</span>
        </div>
        <div className="store-game__logo">
          <img src={system} alt="Logo" />
        </div>
      </div>

      <div className="store-game__tags">
        {tags &&
          tags.map((item, i) => {
            return (
              <small className="tag" style={{ background: `var(--${item})` }}>
                {item}
              </small>
            );
          })}
      </div>
      <div className="store-game__buttons">
        <BtnSimple
          css="btn-simple--xs btn-simple--1"
          type="button"
          aria="Next"
          onClick={() => onInstall()}
        >
          Install
        </BtnSimple>

        <BtnSimple
          css="btn-simple--xs btn-simple--1"
          type="button"
          aria="Next"
          onClick={() => onMore()}
        >
          More info
        </BtnSimple>
      </div>
    </li>
  );
};

export default StoreGame;
