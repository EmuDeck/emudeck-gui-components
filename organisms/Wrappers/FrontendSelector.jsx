import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function FrontendSelector({ onClick, images, lastSelected, installFrontends }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { system } = state;
  const installFrontendsArray = Object.values(installFrontends);

  const { esdePreview, pegasusPreview, steamPreview } = images;
  return (
    <>
      <p className="lead">
        Select which frontends you would like to use to launch your games. You
        may select more than one.
      </p>
      <Main>
        <div className="cards cards--big">
          {installFrontendsArray.map((item) => {
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
                <p>{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </Main>
    </>
  );
}

FrontendSelector.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};

FrontendSelector.defaultProps = {
  onClick: '',
  images: '',
};

export default FrontendSelector;
