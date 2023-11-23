import React, { useEffect, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import { Img } from 'getbasecore/Atoms';
import './aside.scss';

function Aside({ active, data, functions }) {
  const { stateAside, setStateAside } = useContext(GlobalContext);
  const { links } = stateAside;
  useEffect(() => {
    if (data) {
      setStateAside({ links: data });
    }
  }, []);

  useEffect(() => {}, []);
  return (
    <aside className="mac-sidebar">
      <ul className="mac-sidebar__elements">
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

            // if (item.status === false) {
            //   return;
            // }

            return (
              <li>
                <button
                  key={item.title}
                  type="button"
                  onClick={() => item.function()}
                >
                  <div className="list--icons list--icons--xs">
                    <div className="text">
                      <Img src={item.icon} css="icon icon--xs" alt="OK" />
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
