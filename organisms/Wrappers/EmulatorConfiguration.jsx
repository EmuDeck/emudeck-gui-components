import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function EmulatorConfiguration({ onClick, images }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { overwriteConfigEmus, second, system, branch } = state;
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);

  return (
    <>
      <Main>
        <div className="cards cards--mini">
          {overwriteConfigEmusArray.map((item) => {
            if (
              overwriteConfigEmusArray.id === 'srm' ||
              item.id === 'primehacks'
            ) {
              return;
            }

            if (item.id === 'yuzu') {
              return;
            }

            if (item.id === 'eden') {
              return;
            }

            if (item.id === 'citron') {
              return;
            }

            if (item.id === 'srm') {
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
              </Card>
            );
          })}
        </div>
      </Main>
    </>
  );
}

EmulatorConfiguration.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};

export default EmulatorConfiguration;
