import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BtnSimple } from 'getbasecore/Atoms';
import './emumodal.scss';

function EmuModal({
  modal,
  modalActiveValue,
  modalHeaderValue,
  modalBodyValue,
  modalFooterValue,
  modalCSSValue,
}) {
  const [stateModal, setStateModal] = useState({
    modalActive: undefined,
    modalHeader: undefined,
    modalBody: undefined,
    modalFooter: undefined,
    modalCSS: undefined,
  });
  const { modalActive, modalHeader, modalBody, modalFooter, modalCSS } =
    stateModal;

  const closeModal = () => {
    setStateModal({ ...stateModal, modalActive: false });
  };

  useEffect(() => {
    if (modal) {
      setStateModal({
        modalActive: modal.active,
        modalHeader: modal.header,
        modalBody: modal.body,
        modalFooter: modal.footer,
        modalCSS: modal.css,
      });
    } else if (modal === false) {
      setStateModal({
        modalActive: false,
      });
    }
  }, [modal]);

  return (
    <div
      className={`emumodal ${modalCSS || modalCSSValue} ${
        modalActive || modalActiveValue ? 'is-shown' : ''
      }`}
    >
      <div className="emumodal__box">
        <div className="emumodal__header">
          {modalHeader || modalHeaderValue}
        </div>
        <div className="emumodal__body">{modalBody || modalBodyValue}</div>
        <div className="emumodal__footer">
          {!modalFooter && !modalFooterValue && (
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Next"
              onClick={() => closeModal()}
            >
              Close
            </BtnSimple>
          )}
          {modalFooter || modalFooterValue}
        </div>
      </div>
    </div>
  );
}

EmuModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
  onClick: PropTypes.func,
};

EmuModal.defaultProps = {
  children: '',
  footer: '',
  css: '',
  onClick: () => {},
};

export default EmuModal;
