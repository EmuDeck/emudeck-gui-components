import React from 'react';
import PropTypes from 'prop-types';

import Main from 'components/organisms/Main/Main';
import GameLists from 'components/molecules/GameLists/GameLists';
import Game from 'components/molecules/Game/Game';

function Store({ games = [], onClick = () => {} }) {
  return (
    <Main>
      <GameLists>
        {games.map((game) => (
          <Game
            key={game.id}
            css={`game--${game.platform}`}
            img={(game.artwork.screenshot || [])[0]}
            fallbackImg={(game.artwork.titlescreen || [])[0]}
            title={game.name}
            price={game.price}
            currency={game.currency}
            description={game.description}
            rating={game.rating}
            tags={game.tags}
            onClick={() => onClick(game)}
          />
        ))}
      </GameLists>
    </Main>
  );
}

Store.propTypes = {
  games: PropTypes.array,
  onClick: PropTypes.func,
};

export default Store;
