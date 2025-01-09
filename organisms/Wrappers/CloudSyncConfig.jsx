import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import { BtnSimple } from 'getbasecore/Atoms';

import Card from 'components/molecules/Card/Card';
import Main from 'components/organisms/Main/Main';

import {
  box,
  dropbox,
  gdrive,
  nextcloud,
  onedrive,
  pcloud,
  sftp,
  smb,
} from 'components/utils/images/images';

function CloudSyncConfig({
  onClick,
  onClickInstall,
  onClickUninstall,
  onClickCheckHealth,
  disableButton,
  showLoginButton,
}) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { cloudSync, cloudSyncType } = state;

  return (
    <Main>
      <p>
        <strong>Recommended providers</strong>
      </p>
      <div className="cards cards--mini">
        <Card
          css={cloudSync === 'Emudeck-cloud' && 'is-selected'}
          onClick={() => onClick('Emudeck-cloud')}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_21_1896)">
              <g filter="url(#filter0_d_21_1896)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0505 16.3773L22.8423 7.5856C23.2422 8.21222 23.4731 8.95706 23.4709 9.75593L23.4465 18.7126C23.4393 21.3427 20.2525 22.6475 18.403 20.7776L14.0505 16.3773Z"
                  fill="url(#paint0_linear_21_1896)"
                ></path>
              </g>
              <g filter="url(#filter1_d_21_1896)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.0503 16.3775L22.8421 7.58581C22.1264 6.46437 20.8698 5.72159 19.4401 5.72548L8.50335 5.75528C6.28331 5.76133 4.48851 7.56596 4.4946 9.78601L4.51903 18.7056C4.52621 21.3279 7.69697 22.6362 9.55122 20.7819L14.0032 16.3299L14.0503 16.3775Z"
                  fill="url(#paint1_linear_21_1896)"
                ></path>
                <path
                  d="M14.0511 16.1027L14.004 16.0551L13.8662 16.1929L9.41418 20.6449C7.68184 22.3772 4.71955 21.155 4.71284 18.7051L4.6884 9.78548C4.68262 7.67247 6.39087 5.95485 8.50388 5.94909L19.4406 5.91929C20.7456 5.91573 21.8993 6.56567 22.5927 7.56111L14.0511 16.1027Z"
                  stroke="url(#paint2_linear_21_1896)"
                  stroke-width="0.387616"
                ></path>
              </g>
              <g opacity="0.8" filter="url(#filter2_d_21_1896)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3523 9.74187C11.3523 9.29786 10.9923 8.93792 10.5483 8.93792C10.1043 8.93792 9.74439 9.29786 9.74439 9.74187L9.74439 10.9708L8.56146 10.9708C8.11746 10.9708 7.75752 11.3307 7.75752 11.7747C7.75752 12.2187 8.11746 12.5787 8.56146 12.5787L9.74439 12.5787L9.74439 13.7616C9.74439 14.2056 10.1043 14.5655 10.5483 14.5655C10.9923 14.5655 11.3523 14.2056 11.3523 13.7616L11.3523 12.5787L12.5812 12.5787C13.0252 12.5787 13.3851 12.2187 13.3851 11.7747C13.3851 11.3307 13.0252 10.9708 12.5812 10.9708L11.3523 10.9708L11.3523 9.74187Z"
                  fill="white"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_21_1896"
                x="11.9835"
                y="6.03514"
                width="13.5545"
                height="18.2072"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.516822"></feOffset>
                <feGaussianBlur stdDeviation="1.03364"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_21_1896"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_21_1896"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_d_21_1896"
                x="-11.5054"
                y="-9.75771"
                width="50.3477"
                height="47.9257"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.516822"></feOffset>
                <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_21_1896"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_21_1896"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter2_d_21_1896"
                x="5.69004"
                y="7.21519"
                width="9.7625"
                height="9.7622"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.344548"></feOffset>
                <feGaussianBlur stdDeviation="1.03364"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_21_1896"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_21_1896"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_21_1896"
                x1="36.2393"
                y1="10.5211"
                x2="8.7533"
                y2="-10.6955"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#99A3FF"></stop>
                <stop offset="1" stop-color="#F6A2D8"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_21_1896"
                x1="27.4515"
                y1="4.43386"
                x2="11.8083"
                y2="-2.66674"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#99A3FF"></stop>
                <stop offset="1" stop-color="#F6A2D8"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_21_1896"
                x1="18.4534"
                y1="3.06283"
                x2="3.05418"
                y2="18.462"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.08"></stop>
                <stop offset="1" stop-color="white" stop-opacity="0.2"></stop>
              </linearGradient>
              <clipPath id="clip0_21_1896">
                <rect width="28" height="28" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="h6">
            <p>EmuDeck Cloud</p>
            (7 days backup)
          </div>
        </Card>

        <Card
          css={cloudSync === 'Emudeck-pCloud' && 'is-selected'}
          onClick={() => onClick('Emudeck-pCloud')}
        >
          <img src={pcloud} alt="Emudeck-pCloud" />
          <span className="h6">pCloud</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-SFTP' && 'is-selected'}
          onClick={() => onClick('Emudeck-SFTP')}
        >
          <img src={sftp} alt="Emudeck-SFTP" />
          <span className="h6">SFTP</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-SMB' && 'is-selected'}
          onClick={() => onClick('Emudeck-SMB')}
        >
          <img src={smb} alt="Emudeck-SMB" />
          <span className="h6">SMB</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-NextCloud' && 'is-selected'}
          onClick={() => onClick('Emudeck-NextCloud')}
        >
          <img src={nextcloud} alt="nextcloud" />
          <span className="h6">Nextcloud</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-DropBox' && 'is-selected'}
          onClick={() => onClick('Emudeck-DropBox')}
        >
          <img src={dropbox} alt="dropbox" />
          <span className="h6">DropBox</span>
        </Card>
      </div>

      <p>Legacy providers</p>
      <div className="cards cards--mini">
        <Card
          css={cloudSync === 'Emudeck-Box' && 'is-selected'}
          onClick={() => onClick('Emudeck-Box')}
        >
          <img src={box} alt="Box" />
          <span className="h6">Box</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-GDrive' && 'is-selected'}
          onClick={() => onClick('Emudeck-GDrive')}
        >
          <img src={gdrive} alt="gdrive" />
          <span className="h6">Google Drive</span>
        </Card>
        <Card
          css={cloudSync === 'Emudeck-OneDrive' && 'is-selected'}
          onClick={() => onClick('Emudeck-OneDrive')}
        >
          <img src={onedrive} alt="onedrive" />
          <span className="h6">OneDrive</span>
        </Card>
      </div>

      {cloudSync !== '' && cloudSync !== false && showLoginButton === false && (
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Install SaveSync"
          onClick={() => onClickInstall()}
          disabled={disableButton}
        >
          {disableButton && 'Please wait...'}

          {disableButton || cloudSyncType === 'Sync'
            ? 'Setup Cloud Sync'
            : 'Setup Save Backup'}
        </BtnSimple>
      )}

      {showLoginButton === false && (
        <>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Uninstall SaveSync"
            onClick={() => onClickUninstall()}
            disabled={disableButton}
          >
            {disableButton && 'Please wait...'}

            {disableButton || 'Uninstall'}
          </BtnSimple>
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Test Cloud Health"
            onClick={() => onClickCheckHealth()}
            disabled={disableButton}
          >
            {disableButton && 'Please wait...'}

            {disableButton || cloudSyncType === 'Sync'
              ? 'Test Cloud Sync Health'
              : 'Test Cloud Backup Health'}
          </BtnSimple>
        </>
      )}
    </Main>
  );
}

CloudSyncConfig.propTypes = {
  onClickInstall: PropTypes.func,
  onClickUninstall: PropTypes.func,
  disableButton: PropTypes.bool,
  showLoginButton: PropTypes.bool,
  onClick: PropTypes.func,
};

CloudSyncConfig.defaultProps = {
  onClickInstall: '',
  onClickUninstall: '',
  disableButton: '',
  showLoginButton: '',
  onClick: '',
};

export default CloudSyncConfig;
