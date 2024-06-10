import { useTranslation } from 'react-i18next';
import React from 'react';
import PropTypes from 'prop-types';

import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

function CHDTool({ disabledNext, onClick }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Main>
        <p>
          Once a ROM is successfully converted, the original file will be
          deleted from your system. Run Steam ROM Manager again after
          compressing your ROMs to update Steam with your new files.
        </p>
        <div className="container--grid">
          <div data-col-sm="6">
            <strong>CSO format</strong>
            <br />
            Used to compress PlayStation Portable ROMs. When compressing
            PlayStation Portable ROMs, you will be prompted to select if you
            would like to compress your ROMs to CSO or CHD. <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>CHD format</strong>
            <br />
            Used to compress CD-i, Dreamcast, PSP, PSX, PS2, Sega/MegaCD, 3DO,
            Saturn, TurboGraphix/PCEngineCD, PC-FX, Amiga CD32, NeoGeoCD games.
            <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>RVZ format</strong>
            <br />
            Used to compress GameCube and Wii games.
            <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>Trimmed 3DS format</strong>
            <br />
            Used to compress 3DS games. <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>XISO format</strong>
            <br />
            Used to compress Xbox games. <br />
            <br />
            <hr />
          </div>

          <div data-col-sm="6">
            <strong>7Zip format</strong>
            <br />
            Used to primarily compress a wide variety of RetroArch systems.{' '}
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className="form">
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install CHDTool"
            onClick={() => onClick()}
          >
            Run the Compression Tool
          </BtnSimple>
        </div>
      </Main>
    </>
  );
}

CHDTool.propTypes = {
  disabledNext: PropTypes.bool,
  onClick: PropTypes.func,
};

CHDTool.defaultProps = {
  disabledNext: true,
  onClick: '',
};

export default CHDTool;
