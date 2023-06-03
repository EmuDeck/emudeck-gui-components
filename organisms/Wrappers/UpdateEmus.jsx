import React from 'react';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function UpdateEmus({ onClickFlatpak, onClickAppImage, disabledNext }) {
  return (
    <>
      <p className="lead">
        Emulators and tools can be installed a multitude of ways. EmuDeck
        installs some emulators and tools as Flatpaks from the Discover Store.
        Others are downloaded for you directly from the developer's website as
        AppImages or Binaries. A few are Windows Executables, downloaded and run
        through Proton.
      </p>
      <Main>
        <p>Select which batch you want to update:</p>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update Emulators from the Discover Store"
          onClick={() => onClickFlatpak()}
          disabled={disabledNext && 'true'}
        >
          Update Flatpaks
        </BtnSimple>
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Update AppImages, Binaries, and Windows Executables"
          onClick={() => onClickAppImage()}
          disabled={disabledNext && 'true'}
        >
          Update AppImages and Binaries
        </BtnSimple>
      </Main>
    </>
  );
}

UpdateEmus.propTypes = {
  onClickFlatpak: PropTypes.func,
  onClickAppImage: PropTypes.func,
  disabledNext: PropTypes.bool,
};

UpdateEmus.defaultProps = {
  onClickFlatpak: '',
  onClickAppImage: '',
  disabledNext: false,
};

export default UpdateEmus;
