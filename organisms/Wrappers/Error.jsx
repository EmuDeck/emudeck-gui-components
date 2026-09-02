import { useTranslation } from 'react-i18next';
export const Error = () => {
  const { t } = useTranslation();
  //let history = useHistory();

  return (
    <Main>
      <div className="container">
        <span className="h1">{t('RAAchievements.modalErrorTitle')}</span>
      </div>
    </Main>
  );
};
