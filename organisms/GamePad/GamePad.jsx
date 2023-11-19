import { GlobalContext } from 'context/globalContext';
import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function GamePad({ elements, children }) {
  // console.log({ elements });

  const [statePage, setStatePage] = useState({
    currentIndex: 0,
    vibration: false,
    focusableElements: elements,
  });

  const { currentIndex, vibration, focusableElements } = statePage;
  let current = 0;

  const updateLoop = () => {
    const gamepad = navigator.getGamepads()[0];
    if (gamepad === null) {
      return;
    }

    // console.log({ gamepad });
    const xBoxButtonA = gamepad.buttons[0];
    const xBoxButtonB = gamepad.buttons[1];
    const xBoxButtonX = gamepad.buttons[2];
    const xBoxButtonY = gamepad.buttons[3];
    const buttonSelect = gamepad.buttons[8];
    const buttonStart = gamepad.buttons[9];
    const buttonL1 = gamepad.buttons[3];
    const buttonL2 = gamepad.buttons[5];
    const buttonR1 = gamepad.buttons[6];
    const buttonR2 = gamepad.buttons[7];
    const dpadUP = gamepad.buttons[12];
    const dpadDOWN = gamepad.buttons[13];
    const dpadLEFT = gamepad.buttons[14];
    const dpadRIGHT = gamepad.buttons[15];
    const analogLeftVertical = gamepad.axes[1];
    const analogLeftHorizontal = gamepad.axes[0];
    const analogRightVertical = gamepad.axes[3];
    const analogRighttHorizontal = gamepad.axes[3];
    if (xBoxButtonA.pressed) {
      console.log('YEEE');
    }

    if (dpadRIGHT.pressed) {
      current += 1;
      const element = focusableElements.item(current);
      element.focus();
    }
    if (dpadLEFT.pressed) {
      current -= 1;
      const element = focusableElements.item(current);
      element.focus();
    }
    if (dpadUP.pressed) {
      current -= 4;
      const element = focusableElements.item(current);
      element.focus();
    }
    if (dpadDOWN.pressed) {
      current += 4;
      const element = focusableElements.item(current);
      element.focus();
    }

    const rAF = window.requestAnimationFrame;
    const loopReload = setTimeout(() => rAF(updateLoop), 100);
  };
  // Objeto para mantener un registro de event listeners

  function startGamePad(elements) {
    updateLoop();
  }

  useEffect(() => {
    if (focusableElements) {
      window.addEventListener('gamepadconnected', startGamePad);
    } else {
      return;
    }
    return () => {
      window.removeEventListener('gamepadconnected', startGamePad);
    };
  }, [focusableElements]);

  return <div>{children}</div>;
}
export default GamePad;
