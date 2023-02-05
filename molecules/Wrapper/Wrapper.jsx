const Wrapper = ({ children }) => {
  return (
    <>
      <div className="app">
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
