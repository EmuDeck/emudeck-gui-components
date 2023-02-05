import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { GlobalContext } from "context/globalContext";
import FooterElectron from "./FooterElectron";
import FooterIonic from "./FooterIonic";

const Footer = ({
  back,
  next,
  third,
  fourth,
  fourthText,
  disabledNext,
  disabledBack,
  nextText,
  backText,
  thirdText,
  exit,
}) => {
  const { state } = useContext(GlobalContext);
  const { app } = state;

  return app === "electron" ? (
    <FooterElectron
      back={back}
      next={next}
      third={third}
      fourth={fourth}
      fourthText={fourthText}
      disabledNext={disabledNext}
      disabledBack={disabledBack}
      nextText={nextText}
      backText={backText}
      thirdText={thirdText}
      exit={exit}
    />
  ) : (
    <FooterIonic
      back={back}
      next={next}
      third={third}
      fourth={fourth}
      fourthText={fourthText}
      disabledNext={disabledNext}
      disabledBack={disabledBack}
      nextText={nextText}
      backText={backText}
      thirdText={thirdText}
      exit={exit}
    />
  );
};

export default Footer;

Footer.propTypes = {
  back: PropTypes.string,
  next: PropTypes.string,
  third: PropTypes.string,
  fourth: PropTypes.string,
  fourthText: PropTypes.string,
  disabledNext: PropTypes.string,
  disabledBack: PropTypes.string,
  nextText: PropTypes.string,
  backText: PropTypes.string,
  thirdText: PropTypes.string,
  exit: PropTypes.string,
};
Footer.defaultProps = {
  back: "",
  next: "",
  third: "",
  fourth: "",
  fourthText: "",
  disabledNext: "",
  disabledBack: "",
  nextText: "",
  backText: "",
  thirdText: "",
  exit: "",
};
