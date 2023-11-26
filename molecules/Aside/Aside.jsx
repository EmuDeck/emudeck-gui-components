import React, { useEffect, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import { Img } from 'getbasecore/Atoms';
import Sprite from 'components/atoms/Sprite/Sprite';
import Icon from 'components/atoms/Sprite/Icon';
import './aside.scss';

function Aside({ active, data, functions, css }) {
  const { stateAside, setStateAside } = useContext(GlobalContext);
  const { links, system } = stateAside;
  useEffect(() => {
    if (data) {
      setStateAside({ links: data });
    }
  }, []);

  let accentColor = '#666';
  if (system === 'darwin') {
    accentColor = '#007aff';
  }

  return (
    <aside className={`sidebar ${css}`}>
      <Sprite />
      <ul className="sidebar__elements">
        <li>
          <small>Featured</small>
        </li>
        {links &&
          links.map((item) => {
            if (item.status === 'separator') {
              return (
                <li>
                  <small>{item.title}</small>
                </li>
              );
            }

            if (system === 'darwin') {
              if (item.iconFlat === 'disk') {
                return;
              }
              if (item.iconFlat === 'screen') {
                return;
              }
              if (item.iconFlat === 'prize') {
                return;
              }
            }

            if (item.status === false) {
              return;
            }

            return (
              <li>
                <button
                  key={item.title}
                  type="button"
                  onClick={() => item.function()}
                >
                  <div className="list--icons list--icons--xs">
                    <div className="text">
                      {system === 'win32' && (
                        <Img src={item.icon} css="icon icon--xs" alt="OK" />
                      )}
                      {system !== 'win32' && (
                        <Icon
                          name={item.iconFlat}
                          stroke={accentColor}
                          fill="transparent"
                        />
                      )}

                      {item.title}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}

Aside.propTypes = {
  active: PropTypes.bool,
  data: PropTypes.array,
};

Aside.defaultProps = {
  active: false,
  data: false,
};

export default Aside;
