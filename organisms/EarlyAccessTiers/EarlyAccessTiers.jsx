import { useTranslation } from 'react-i18next';
import React from 'react';
import Card from 'components/molecules/Card/Card';

const tier = {
  id: 'eaTier',
  price: 3,
  img: 'https://c10.patreonusercontent.com/4/patreon-media/p/reward/8177551/ddb4b46ac6364051bb421679e918504e/eyJ3Ijo0MDB9/2.png?token-time=2145916800&token-hash=IBIc0gRiCjKYoLoBXJBXN8xi1gu-drm2UKB6SSDdtGs%3D',
};

function EarlyAccessTiers() {
  const { t } = useTranslation();

  return (
    <Card css="is-selected is-selected--hide-tick card--image">
      <img src={tier.img} alt={t('EarlyAccessPage.imgAlt')} />
      <span className="h5">
        {t('EarlyAccessPage.priceFor', {
          price: `${tier.price}€/${t('general.month')}`,
        })}
      </span>
      <p style={{ marginBottom: 0 }}>
        {t(`EarlyAccessPage.${tier.id}.description`)}
      </p>
      <ul
        className="list"
        dangerouslySetInnerHTML={{
          __html: t(`EarlyAccessPage.${tier.id}.list`),
        }}
      />
    </Card>
  );
}

export default EarlyAccessTiers;
