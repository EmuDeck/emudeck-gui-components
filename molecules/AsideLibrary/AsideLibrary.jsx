import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Sprite from 'components/atoms/Sprite/Sprite';
import Icon from 'components/atoms/Sprite/Icon';
import '../Aside/aside.scss';
import useAsideResize from 'hooks/useAsideResize';

const ROM_DRAG_TYPE = 'application/x-emudeck-rom';

// System artwork from src/assets/controllers/<systemId>.png
const controllerIcons = require.context('assets/controllers', false, /\.png$/);
const systemIcon = (id) => {
  try {
    return controllerIcons(`./${id}.png`);
  } catch {
    return null;
  }
};

// Sidebar variant for the ROM Library: reuses .sidebar styles but lists the
// game systems and the user's collections instead of EmuDeck sections.
function AsideLibrary({
  css,
  systems,
  collections,
  selectedSystem,
  onSelectSystem,
  onAddCollection,
  onDropGame,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const total = systems.reduce((sum, s) => sum + s.count, 0);
  const { asideClass, resizerProps } = useAsideResize();
  const [dropTarget, setDropTarget] = useState(null);

  const hasRom = (event) =>
    Array.from(event.dataTransfer.types).includes(ROM_DRAG_TYPE);

  // Manual collections accept games dragged from the grid
  const dropProps = (collection) =>
    collection.type !== 'manual'
      ? {}
      : {
          onDragOver: (event) => {
            if (!hasRom(event)) return;
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
            if (dropTarget !== collection.id) setDropTarget(collection.id);
          },
          onDragLeave: () => setDropTarget(null),
          onDrop: (event) => {
            event.preventDefault();
            setDropTarget(null);
            const romPath = event.dataTransfer.getData(ROM_DRAG_TYPE);
            if (romPath) onDropGame(collection.id, romPath);
          },
        };

  const renderItem = (item, icon, extra = {}) => (
    <li
      key={item.id}
      className={`${selectedSystem === item.id ? 'active' : ''} ${
        extra.isDropTarget ? 'is-drop-target' : ''
      }`}
      {...(extra.dropProps || {})}
    >
      <button
        type="button"
        onClick={() => onSelectSystem(item.id)}
        title={item.title}
      >
        <div className="list--icons list--icons--xs">
          <div className="text">
            {icon}
            {item.title}
            <span className="sidebar__count">{item.count}</span>
          </div>
        </div>
      </button>
    </li>
  );

  return (
    <aside className={`sidebar ${css} ${asideClass}`}>
      <div {...resizerProps} />
      <Sprite />
      <ul className="sidebar__elements">
        <li>
          <button type="button" onClick={() => navigate('/settings')}>
            <div className="list--icons list--icons--xs">
              <div className="text">
                <Icon name="migrate" fill="transparent" />
                {t('RomLibrary.back')}
              </div>
            </div>
          </button>
        </li>

        <li>
          <small>{t('RomLibrary.systems')}</small>
        </li>
        {systems.map((s) =>
          renderItem(
            { id: s.id, title: s.name, count: s.count },
            systemIcon(s.id) ? (
              <img
                className="icon icon--sm sidebar__system-icon"
                src={systemIcon(s.id)}
                alt=""
                draggable="false"
              />
            ) : (
              <Icon name="joystick" fill="transparent" />
            ),
          ),
        )}

        <li className="sidebar__section">
          <small>{t('RomLibrary.collections')}</small>
          <button
            type="button"
            className="sidebar__add"
            onClick={onAddCollection}
            aria-label={t('RomLibrary.collection.new')}
            title={t('RomLibrary.collection.new')}
          >
            +
          </button>
        </li>
        {renderItem(
          { id: 'all', title: t('RomLibrary.all'), count: total },
          <Icon name="list" fill="transparent" />,
        )}
        {collections.map((c) =>
          renderItem(
            { id: `col:${c.id}`, title: c.name, count: c.count },
            <Icon
              name={c.type === 'smart' ? 'gear' : 'list'}
              fill="transparent"
            />,
            { dropProps: dropProps(c), isDropTarget: dropTarget === c.id },
          ),
        )}
      </ul>
    </aside>
  );
}

AsideLibrary.propTypes = {
  css: PropTypes.string,
  systems: PropTypes.array,
  collections: PropTypes.array,
  selectedSystem: PropTypes.string,
  onSelectSystem: PropTypes.func,
  onAddCollection: PropTypes.func,
  onDropGame: PropTypes.func,
};

AsideLibrary.defaultProps = {
  css: '',
  systems: [],
  collections: [],
  selectedSystem: 'all',
  onSelectSystem: () => {},
  onAddCollection: () => {},
  onDropGame: () => {},
};

export default AsideLibrary;
