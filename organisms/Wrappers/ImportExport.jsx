import { useTranslation } from 'react-i18next';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import { BtnSimple, FormInputSimple, LinkSimple } from 'getbasecore/Atoms';
import Notification from 'components/molecules/Notification/Notification';
import Main from 'components/organisms/Main/Main';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import { FormCheckboxSimple, BtnSimple } from 'getbasecore/Atoms';
import Footer from 'components/organisms/Footer/Footer';
import EmuModal from 'components/molecules/EmuModal/EmuModal';
import AutoMap from 'components/organisms/Wrappers/AutoMap';
import Card from 'components/molecules/Card/Card';
import {
  imgSD,
  imgInternal,
  imgExternal,
  imgNetwork,
} from 'components/utils/images/images';

/* Componentes outside the modal because of state shenanigans for storing JSX in the state */
function ImportProgress({ initialKey, onClose }) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState({
    key: initialKey,
    params: {},
    title: '',
    percentage: 0,
    finished: false,
  });
  const pending = useRef(null);

  useEffect(() => {
    const phaseId = (o) =>
      `${o.key || ''}|${(o.params && o.params.item) || ''}|${o.title || ''}`;

    const flush = (json) => {
      setProgress((prev) => {
        const value = Number(json.percentage);
        const isNewPhase = phaseId(json) !== phaseId(prev);
        const percentage = Number.isNaN(value)
          ? prev.percentage
          : isNewPhase
          ? value
          : Math.max(prev.percentage, value);
        const finished = json.finished === true || json.finished === 'true';

        if (
          !isNewPhase &&
          percentage === prev.percentage &&
          finished === prev.finished
        ) {
          return prev;
        }

        return {
          key: json.key || null,
          params: json.params || {},
          title: json.title || '',
          percentage,
          finished,
        };
      });
    };

    const unsubscribe = window.backend.message((data) => {
      let json;
      try {
        json = JSON.parse(data);
      } catch (error) {
        return;
      }

      if (json === null || typeof json !== 'object') {
        return;
      }

      if (json.finished === true || json.finished === 'true') {
        pending.current = null;
        flush(json);
        return;
      }

      pending.current = json;
    });

    const interval = setInterval(() => {
      if (pending.current === null) {
        return;
      }
      const json = pending.current;
      pending.current = null;
      flush(json);
    }, 100);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const translateItem = (name) => t(`importExport.items.${name}`);

  const label = () => {
    if (!progress.key) {
      return progress.title;
    }
    const params = { ...progress.params };
    if (params.item) {
      params.item = translateItem(params.item);
    }
    if (Array.isArray(params.items)) {
      params.items = params.items.map(translateItem).join(', ');
    }
    return t(progress.key, params);
  };

  return (
    <>
      <span className="h2">{label()}</span>
      <ProgressBar
        css="progress--success"
        value={progress.percentage}
        max="100"
      />
      <p className="small">{progress.params.file}</p>
    </>
  );
}
function ImportCheckBoxes({ onChange }) {
  const { t } = useTranslation();
  const [checkboxes, setCheckboxes] = useState({
    roms: true,
    bios: true,
    storage: true,
    saves: true,
    esdeArtwork: false,
  });

  useEffect(() => {
    onChange(checkboxes);
  }, [checkboxes]);

  return (
    <ul className="list">
      <li>
        <div className="form__group">
          <div className="checkbox-simple">
            <input
              id="roms"
              name="roms"
              type="checkbox"
              checked={checkboxes.roms}
              onChange={() =>
                setCheckboxes((prev) => ({
                  ...prev,
                  roms: !prev.roms,
                }))
              }
            />
            <label htmlFor="roms">{t('importExport.items.roms')}</label>
          </div>
        </div>
      </li>
      <li>
        <div className="form__group">
          <div className="checkbox-simple">
            <input
              id="bios"
              name="bios"
              type="checkbox"
              value=""
              checked={checkboxes.bios}
              onChange={() =>
                setCheckboxes((prev) => ({
                  ...prev,
                  bios: !prev.bios,
                }))
              }
            />
            <label htmlFor="bios">{t('importExport.items.bios')}</label>
          </div>
        </div>
      </li>
      <li>
        <div className="form__group">
          <div className="checkbox-simple">
            <input
              id="saves"
              name="saves"
              type="checkbox"
              value=""
              checked={checkboxes.saves}
              onChange={() =>
                setCheckboxes((prev) => ({
                  ...prev,
                  saves: !prev.saves,
                }))
              }
            />
            <label htmlFor="saves">{t('importExport.items.saves')}</label>
          </div>
        </div>
      </li>
      <li>
        <div className="form__group">
          <div className="checkbox-simple">
            <input
              id="storage"
              name="storage"
              type="checkbox"
              value=""
              checked={checkboxes.storage}
              onChange={() =>
                setCheckboxes((prev) => ({
                  ...prev,
                  storage: !prev.storage,
                }))
              }
            />
            <label htmlFor="storage">{t('importExport.items.storage')}</label>
          </div>
        </div>
      </li>
      <li>
        <div className="form__group">
          <div className="checkbox-simple">
            <input
              id="esdeArtwork"
              name="esdeArtwork"
              type="checkbox"
              value=""
              checked={checkboxes.esdeArtwork}
              onChange={() =>
                setCheckboxes((prev) => ({
                  ...prev,
                  esdeArtwork: !prev.esdeArtwork,
                }))
              }
            />
            <label htmlFor="esdeArtwork">
              {t('importExport.items.esdeArtwork')}
            </label>
          </div>
        </div>
      </li>
    </ul>
  );
}

function ImportExport({ exportEnable = true }) {
  const { t, i18n } = useTranslation();
  const { state, setState } = useContext(GlobalContext);
  const { automap, system } = state;
  const ipcChannel = window.electron.ipcRenderer;
  const [lines, setLines] = useState([]);
  const [statePage, setStatePage] = useState({
    updates: false,
    storage: null,
    type: 'import',
  });

  const selectionRef = useRef({
    roms: true,
    bios: false,
    storage: false,
    saves: false,
    esdeArtwork: false,
  });

  const [stateModal, setStateModal] = useState({
    modal: false,
  });
  const { modal } = stateModal;
  const { updates, storage, type } = statePage;
  useEffect(() => {
    if (storage !== null) {
      showModalOptions();
    }
  }, [storage]);

  const closeModal = () => {
    setStateModal(() => ({ modal: false }));
  };

  const showModalOptions = () => {
    let title = t('ImportExportPage.exportBackup');
    let desc = t('ImportExportPage.selectExport');
    let btnStart = (
      <BtnSimple
        css="btn-simple--1"
        type="button"
        aria={t('general.start')}
        onClick={() => startExport()}
        disabled={false}
      >
        {t('general.start')}
      </BtnSimple>
    );

    if (type == 'import') {
      title = t('ImportExportPage.importBackup');
      desc = t('ImportExportPage.selectImport');
      btnStart = (
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria={t('general.start')}
          onClick={() => startImport()}
          disabled={false}
        >
          {t('general.start')}
        </BtnSimple>
      );
    }

    let modalData = {
      active: true,
      header: <span className="h4">{title}</span>,
      body: (
        <>
          <p>{desc}</p>
          <ImportCheckBoxes
            onChange={(sel) => {
              selectionRef.current = sel;
            }}
          />
        </>
      ),
      footer: (
        <>
          {btnStart}
          <BtnSimple
            css="btn-simple--2"
            type="button"
            aria={t('general.cancel')}
            onClick={() => closeModal()}
            disabled={false}
          >
            {t('general.cancel')}
          </BtnSimple>
        </>
      ),
      css: 'emumodal--xs',
    };
    setStateModal(() => ({ modal: modalData }));
  };

  const startImport = () => {
    let modalData = {
      active: true,
      header: '',
      body: (
        <ImportProgress
          initialKey="importExport.preparingImport"
          onClose={closeModal}
        />
      ),
      footer: '',
      css: 'emumodal--sm',
    };
    setStateModal(() => ({ modal: modalData }));

    ipcChannel.sendMessage('emudeck', [
      `import_emudeck|||import_emudeck '${JSON.stringify(
        selectionRef.current
      )}' '${storage}'`,
    ]);
  };

  const startExport = () => {
    let modalData = {
      active: true,
      header: '',
      body: (
        <ImportProgress
          initialKey="importExport.preparingExport"
          onClose={closeModal}
        />
      ),
      footer: '',
      css: 'emumodal--sm',
    };
    setStateModal(() => ({ modal: modalData }));
    console.log(
      `export_emudeck|||export_emudeck '${JSON.stringify(
        selectionRef.current
      )}' '${storage}'`
    );

    ipcChannel.sendMessage('emudeck', [
      `export_emudeck|||export_emudeck '${JSON.stringify(
        selectionRef.current
      )}' '${storage}'`,
    ]);
  };

  const setDrive = (drive) => {
    if (system === 'win32') {
      drive = `${drive}\\`;
    }
    setStatePage((prev) => ({ ...prev, storage: drive }));
  };

  const pickDrive = (type) => {
    let title = t('ImportExportPage.pickDriveExport');
    if (type === 'import') {
      title = t('ImportExportPage.pickDriveImport');
    }

    ipcChannel.sendMessage('emudeck', ['get_locations|||get_locations']);

    ipcChannel.once('get_locations', (message) => {
      const hdrives = message.stdout;

      let hddrives = hdrives.replace(/(\r\n|\r|\n)/g, '');
      hddrives = JSON.parse(hddrives);

      // hddrives = [
      //   { letter: 'D', name: 'disk', type: 'Internal' },
      //   { letter: 'E', name: 'disk' },
      // ];

      const driveCards = hddrives.map((item) => {
        if (item.letter === null) {
        } else {
          return (
            <Card
              key={item.letter}
              css={
                storage === `${item.letter}\\`
                  ? 'is-selected card--horizontal'
                  : 'card--horizontal'
              }
              onClick={() => setDrive(item.letter)}
            >
              <img
                src={
                  item.type === 'Internal'
                    ? imgInternal
                    : item.name.includes('card')
                    ? imgSD
                    : item.name.includes('Card')
                    ? imgSD
                    : item.type === 'External'
                    ? imgExternal
                    : imgNetwork
                }
                width="100"
                alt="Background"
              />
              <span className="h6">{`${item.letter}`}</span>
            </Card>
          );
        }
      });

      let modalData = {
        active: true,
        header: <span className="h4">{title}</span>,
        body: <div className="cards">{driveCards}</div>,
        footer: '',
        css: 'emumodal--xs',
      };
      setStatePage(() => ({
        ...statePage,
        storage: null,
        type: type,
      }));

      setStateModal({ modal: modalData });
    });
  };

  const navigate = useNavigate();
  return (
    <>
      <EmuModal modal={modal} />
      <div className="container--grid">
        {exportEnable && (
          <div data-col-md="5">
            <span className="h4">{t('ImportExportPage.export')}</span>
            <p>{t('ImportExportPage.exportDescription')}</p>
            <button
              type="button"
              aria-label="Next"
              className="btn-simple btn-simple--1"
              style={{ marginBottom: 0 }}
              onClick={() => pickDrive('export')}
            >
              {t('ImportExportPage.exportButton')}
            </button>
          </div>
        )}

        <div data-col-md="5">
          <span className="h4">{t('ImportExportPage.import')}</span>
          <p>{t('ImportExportPage.importDescription')}</p>
          <button
            type="button"
            aria-label="Next"
            className="btn-simple btn-simple--1"
            style={{ marginBottom: 0 }}
            onClick={() => pickDrive('import')}
          >
            {t('ImportExportPage.importButton')}
          </button>
        </div>
      </div>
    </>
  );
}

export default ImportExport;
