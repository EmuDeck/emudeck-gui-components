import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function EmulatorSelector({ onClick, images, installEmus }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { system, branch } = state;
  const installEmusArray = Object.values(installEmus);

  return (
    <>
      <Main>
        <div className="cards cards--mini">
          {installEmusArray.map((item) => {
            if (item.id === 'srm' || item.id === 'primehacks') {
              return;
            }

            if (item.id === 'ares') {
              return;
            }
            if (system === 'win32') {
              if (item.id === 'rmg' || item.id === 'ares') {
                return;
              }
              if (item.id === 'model2') {
                return;
              }
            }

            if (system === 'darwin') {
              if (item.id !== 'ra') {
                return;
              }
            }

            if (item.id === 'yuzu') {
              return;
            }

            if (item.id === 'citron') {
              return;
            }

            const img = images[item.id];
            // eslint-disable-next-line consistent-return
            return (
              <Card
                css={item.status === true && 'is-selected'}
                key={item.id}
                onClick={() => onClick(item.id)}
              >
                <img src={img} alt={item.name} />
                <span className="h6">{item.name}</span>
                <small className="small">{item.platforms}</small>
              </Card>
            );
          })}
        </div>
      </Main>
    </>
  );
}

EmulatorSelector.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};

EmulatorSelector.defaultProps = {
  onClick: '',
  images: '',
};

export default EmulatorSelector;
