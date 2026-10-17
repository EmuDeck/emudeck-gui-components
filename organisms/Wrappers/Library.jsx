import React from 'react';
import PropTypes from 'prop-types';

import Main from 'components/organisms/Main/Main';
import GameLists from 'components/molecules/GameLists/GameLists';
import Game from 'components/molecules/Game/Game';

function Library({ games = [], storagePath = '' }) {
  const artworkPath = `${storagePath.replace(/\\/g, '/')}/retrolibrary/artwork`;

  return (
    <Main>
      <GameLists>
        {games.map((game) => (
          <Game
            key={game.filename}
            css={`game--${game.platform}`}
            title={game.og_name}
            img={`emudeck-media://file/${encodeURI(
              `${artworkPath}/${game.platform}/media/box2dfront/${game.name}.jpg`,
            )}`}
          />
        ))}
      </GameLists>
    </Main>
  );
}

Library.propTypes = {
  games: PropTypes.array,
  storagePath: PropTypes.string,
};

export default Library;
