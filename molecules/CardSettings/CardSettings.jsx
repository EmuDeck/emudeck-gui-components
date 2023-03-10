import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';
import './card-settings.scss';
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
import Card from 'components/molecules/Card/Card';
const CardSettings = ({
  children,
  css,
  btnCSS,
  onClick,
  icon,
  title,
  description,
  button,
  iconSize,
  type,
  target,
  href,
  notification,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;
  if (!type) {
    type = 'button';
  }
  return (
    <div className={`card-setting ${css}`} onClick={() => onClick()}>
      {notification && <span className="card-setting__notification">!</span>}
      <ul>
        <li className={`list--icons list--icons--${iconSize}`}>
          <div className="text">
            <Img src={icon} css={`icon icon--${iconSize}`} alt="OK" />
            {title}
          </div>
        </li>
      </ul>
      {description && <p>{description}</p>}
      {button && (
        <div className="card-setting__buttons">
          <BtnSimple
            css={`
              ${btnCSS} btn-simple--xs
            `}
            type={type}
            aria="Next"
            href={href}
            target="_blank"
          >
            {button}
          </BtnSimple>
        </div>
      )}
    </div>
  );
};

export default CardSettings;
