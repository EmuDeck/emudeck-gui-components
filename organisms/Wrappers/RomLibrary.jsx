import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Main from 'components/organisms/Main/Main';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import { BtnSimple, FormInputSimple } from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';
import './rom-library.scss';

export const ROM_DRAG_TYPE = 'application/x-emudeck-rom';

// Cover grid with toolbar; the systems/collections list lives in AsideLibrary
function RomLibrary({
  loading,
  building,
  buildStatus,
  error,
  cacheBust,
  systems,
  games,
  showSystem,
  collection,
  query,
  size,
  selectedRom,
  status,
  onQuery,
  onSize,
  onSelectRom,
  onLaunch,
  onRefresh,
  onEditCollection,
  onDeleteCollection,
  onRemoveGame,
}) {
  const { t } = useTranslation();
  const systemNames = Object.fromEntries(systems.map((s) => [s.id, s.name]));
  const needle = query.trim().toLowerCase();
  const visible = needle
    ? games.filter((rom) => rom.title.toLowerCase().includes(needle))
    : games;
  const isManual = collection && collection.type === 'manual';

  // Cover missing on disk (artwork still downloading): show the title instead
  const hideBrokenCover = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.nextSibling.style.display = 'flex';
  };

  // Games are dragged onto manual collections in the aside
  const startDrag = (event, rom) => {
    event.dataTransfer.setData(ROM_DRAG_TYPE, rom.path);
    event.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <Main css="rom-library">
      <section className="rom-library__content">
        <div className="rom-library__toolbar">
          <Form css="rom-library__search" onSubmit={(e) => e.preventDefault()}>
            <FormInputSimple
              label=""
              type="search"
              name="rom-library-search"
              placeholder={t('RomLibrary.search')}
              value={query}
              onChange={(e) => onQuery(e.target.value)}
            />
          </Form>
          <span className="rom-library__count">
            {visible.length} {t('RomLibrary.games')}
          </span>
          {collection && (
            <>
              <BtnSimple
                css="btn-simple--2 btn-simple--xs"
                type="button"
                aria={t('RomLibrary.collection.edit')}
                style={{ marginBottom: 0 }}
                onClick={onEditCollection}
              >
                {t('RomLibrary.collection.edit')}
              </BtnSimple>
              <BtnSimple
                css="btn-simple--3 btn-simple--xs"
                type="button"
                aria={t('RomLibrary.collection.delete')}
                style={{ marginBottom: 0 }}
                onClick={onDeleteCollection}
              >
                {t('RomLibrary.collection.delete')}
              </BtnSimple>
            </>
          )}
          <BtnSimple
            css="btn-simple--2 btn-simple--xs"
            type="button"
            aria={t('RomLibrary.refresh')}
            style={{ marginBottom: 0 }}
            disabled={loading}
            onClick={onRefresh}
          >
            {t('RomLibrary.refresh')}
          </BtnSimple>
          <input
            type="range"
            className="rom-library__zoom"
            min="100"
            max="280"
            step="10"
            value={size}
            onChange={(e) => onSize(Number(e.target.value))}
            aria-label="zoom"
          />
        </div>

        {status && (
          <div
            className={`rom-library__status rom-library__status--${status.type}`}
          >
            {status.text}
          </div>
        )}

        {loading && <ProgressBar css="progress--success" infinite max="100" />}
        {building && (
          <p className="rom-library__empty">
            {t('RomLibrary.building')}
            {buildStatus && <small>{buildStatus}</small>}
          </p>
        )}
        {error && (
          <p className="rom-library__empty">
            {error === 'no-settings'
              ? t('RomLibrary.noSettings')
              : t('RomLibrary.scanError', { error })}
          </p>
        )}
        {!loading && !error && visible.length === 0 && (
          <p className="rom-library__empty">
            {isManual && !needle
              ? t('RomLibrary.collection.dropHint')
              : t('RomLibrary.noGames')}
          </p>
        )}

        <ul className="rom-library__grid" style={{ '--rom-size': `${size}px` }}>
          {visible.map((rom) => (
            <li
              key={rom.path}
              className={`rom-library__item ${
                selectedRom && selectedRom.path === rom.path
                  ? 'is-selected'
                  : ''
              }`}
              title={rom.file}
              draggable
              onDragStart={(e) => startDrag(e, rom)}
            >
              <button
                type="button"
                onClick={() => onSelectRom(rom)}
                onDoubleClick={() => onLaunch(rom)}
              >
                <span className="rom-library__cover">
                  <img
                    src={`${rom.cover}?v=${cacheBust}`}
                    alt=""
                    loading="lazy"
                    draggable="false"
                    onError={hideBrokenCover}
                  />
                  <span
                    className="rom-library__placeholder"
                    style={{ display: 'none' }}
                  >
                    {rom.title}
                  </span>
                </span>
                <span className="rom-library__title">{rom.title}</span>
                {showSystem && (
                  <small className="rom-library__system">
                    {systemNames[rom.system]}
                  </small>
                )}
              </button>
              {isManual && (
                <button
                  type="button"
                  className="rom-library__remove"
                  aria-label={t('RomLibrary.collection.removeGame')}
                  title={t('RomLibrary.collection.removeGame')}
                  onClick={() => onRemoveGame(rom.path)}
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
}

RomLibrary.propTypes = {
  loading: PropTypes.bool,
  building: PropTypes.bool,
  buildStatus: PropTypes.string,
  error: PropTypes.string,
  cacheBust: PropTypes.number,
  systems: PropTypes.array,
  games: PropTypes.array,
  showSystem: PropTypes.bool,
  collection: PropTypes.object,
  query: PropTypes.string,
  size: PropTypes.number,
  selectedRom: PropTypes.object,
  status: PropTypes.object,
  onQuery: PropTypes.func,
  onSize: PropTypes.func,
  onSelectRom: PropTypes.func,
  onLaunch: PropTypes.func,
  onRefresh: PropTypes.func,
  onEditCollection: PropTypes.func,
  onDeleteCollection: PropTypes.func,
  onRemoveGame: PropTypes.func,
};

RomLibrary.defaultProps = {
  loading: false,
  building: false,
  buildStatus: '',
  error: null,
  cacheBust: 0,
  systems: [],
  games: [],
  showSystem: false,
  collection: null,
  query: '',
  size: 160,
  selectedRom: null,
  status: null,
  onQuery: () => {},
  onSize: () => {},
  onSelectRom: () => {},
  onLaunch: () => {},
  onRefresh: () => {},
  onEditCollection: () => {},
  onDeleteCollection: () => {},
  onRemoveGame: () => {},
};

export default RomLibrary;
