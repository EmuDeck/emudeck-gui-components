import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSimple, FormSelectSimple, BtnGroup } from 'getbasecore/Atoms';
import { Table, Alert, BtnGroup } from 'getbasecore/Molecules';
import './emutable.scss';
function EmuTable({
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
  img,
  bios,
  emuData,
  onChange,
  onClick,
  onClickInstall,
  onClickUninstall,
  installEmus,
  disableInstallButton,
  hideInstallButton,
  disableResetButton,
  mode,
  updateAvailable,
}) {
  console.log({ disableInstallButton });
  return (
    <div className="emutable">
      <div className="container--grid">
        <div data-col-sm="2">
          <img src={img} alt="logo" />
        </div>

        <div data-col-sm="7">
          {emuData.description && (
            <>
              <p className="h5">Description</p>
              <p>{emuData.description}</p>
            </>
          )}
          {emuData.systems && (
            <>
              <p className="h5">Emulated Systems</p>
              <p>{emuData.systems}</p>
            </>
          )}
          {emuData.special_configuration && (
            <>
              <p className="h5">Special Configuration</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${emuData.special_configuration} <br/>You can learn more about this emulator in <strong><a className="link" href="${emuData.wiki}" target="_blank">our Wiki</a></strong>`,
                }}
              ></p>
            </>
          )}

          {emuData.bios.length > 0 && (
            <>
              <p className="h5">Bios needed</p>
              {bios}
            </>
          )}
          <BtnGroup>
            {disableInstallButton && (
              <BtnSimple
                css={updateAvailable ? 'btn-simple--6' : 'btn-simple--1'}
                type="button"
                aria="Go Back"
                onClick={() => onClick(emuData.code, emuData.name, emuData.id)}
                disabled={disableResetButton}
              >
                {updateAvailable && 'Update configuration'}
                {updateAvailable || 'Reset configuration'}
              </BtnSimple>
            )}

            {!disableInstallButton && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={disableInstallButton}
                onClick={() => onClickInstall(emuData.id, emuData.code)}
              >
                Install
              </BtnSimple>
            )}
            {disableInstallButton && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={hideInstallButton}
                onClick={() => onClickInstall(emuData.id, emuData.code)}
              >
                ReInstall / Update
              </BtnSimple>
            )}
            {disableInstallButton && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={false}
                onClick={() => onClickUninstall(emuData.id, emuData.code)}
              >
                Uninstall
              </BtnSimple>
            )}
          </BtnGroup>
          <br />
          <br />
          <BtnGroup>
            {emuData.alt > 0 && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={hideInstallButton}
                onClick={() => {
                  if (confirm(emuData.altWarning) == true) {
                    onClickInstall(emuData.altId, emuData.altCode);
                  }
                }}
              >
                {emuData.altButton}
              </BtnSimple>
            )}
            {emuData.alt2 > 0 && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Go Back"
                disabled={disableResetButton}
                onClick={() => {
                  onClick(emuData.alt2Id, emuData.alt2Code);
                }}
              >
                {emuData.alt2Button}
              </BtnSimple>
            )}
          </BtnGroup>
        </div>
        <div data-col-sm="3">
          {emuData.hotkeys && (
            <>
              <Table
                css="table-reflow"
                description="Table description"
                items={emuData.hotkeys}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmuTable;
