import React from 'react';
import PropTypes from 'prop-types';

import './game-lists.scss';

function GameLists({ children = null }) {
  return <ul className="game-lists">{children}</ul>;
}

GameLists.propTypes = {
  children: PropTypes.node,
};

export default GameLists;
