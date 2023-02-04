import React, { useEffect, useState, useContext } from 'react';
import Aside from 'components/organisms/Aside/Aside';

const Wrapper = ({ children }) => {
  return (
    <>
      <div className="app">
        <Aside />
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
