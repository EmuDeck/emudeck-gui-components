import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSimple, FormSelectSimple } from 'getbasecore/Atoms';
import { Table, Alert } from 'getbasecore/Molecules';
import './emutable.scss';
const EmuTable = ({
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
}) => {
  return (
    <div class="emutable">
      <div className="container--grid">
        <div data-col-sm="2">
          <img src={img} alt="logo" />
          <div class="form">
            <FormSelectSimple
              name="formu-input"
              label="Select another Emulator"
            >
              <option value="ra">RetroArch</option>
              <option value="cemu">Cemu</option>
            </FormSelectSimple>
          </div>
        </div>

        <div data-col-sm="7">
          {/*emuData.description && (
            <>
              <p className="h5">Description</p>
              <p>
                RetroArch is a free and open-source, cross-platform frontend for
                emulators, game engines, video games, media players and other
                applications.
              </p>
            </>
          )*/}
          {emuData.systems && (
            <>
              <p className="h5">Emulated Systems</p>
              <p>{emuData.systems}</p>
            </>
          )}
          {emuData.special_configuration && (
            <>
              <p className="h5">Special Configuration</p>
              <p>{emuData.special_configuration}</p>
            </>
          )}
          {emuData.bios && (
            <>
              <p className="h5">Bios needed</p>
              {bios}
            </>
          )}
          <BtnSimple css="btn-simple--1" type="button" aria="Go Back">
            Reset configuration
          </BtnSimple>
        </div>
        <div data-col-sm="3">
          {emuData.hotkeys && (
            <>
              <p className="h5">Hotkeys</p>
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
};

export default EmuTable;
