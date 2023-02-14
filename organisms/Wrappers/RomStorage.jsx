import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';
import imgSD from 'assets/sdcard.png';
import imgInternal from 'assets/internal.png';

const RomStorage = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  customPath,
  showSDCard,
  showInternal,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage, SDID, mode, system, storagePath } = state;

  return (
    <>
      <p className="lead">
        Your ROM directory will be squared away within an Emulation folder in
        your selected directory. If you do not see your SD Card, format it first
        in Game Mode.
      </p>
      <Main>
        <div className="cards">
          {!!showSDCard && (
            <Card
              css={storage == 'SD-Card' && 'is-selected'}
              onClick={() =>
                sdCardValid == true ? onClick('SD-Card') : reloadSDcard()
              }
            >
              <img src={imgSD} width="100" alt="Background" />
              <span className="h5">SD Card</span>
              {sdCardName != null && <span className="h6">{sdCardName}</span>}
              {sdCardName == null ||
                (sdCardValid == false && (
                  <span className="h6">
                    Not detected
                    <br />
                    Click here to try again
                  </span>
                ))}
            </Card>
          )}
          {!!showInternal && (
            <Card
              css={storage == 'Internal Storage' && 'is-selected'}
              onClick={() => onClick('Internal Storage')}
            >
              <img src={imgInternal} width="100" alt="Background" />
              <span className="h5">Internal Storage</span>
            </Card>
          )}
          <Card
            css={storage == 'Custom' && 'is-selected'}
            onClick={() => onClick('Custom')}
          >
            <img src={imgInternal} width="100" alt="Background" />
            <span className="h5">Custom Directory</span>
            {customPath && storage == 'Custom' && (
              <span className="h6">{customPath}</span>
            )}
          </Card>
        </div>
      </Main>
    </>
  );
};

export default RomStorage;
