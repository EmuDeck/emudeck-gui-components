import toasty from 'assets/toasty.png'
import './toasty.scss';
//import toastyMP3 from 'assets/toasty.mp3'
const Toasty = (show) => {
  return (
    <img className={show.show === true ? 'toasty is-animated' : 'toasty no'} src={toasty} alt="Toasty!"/>
  );
};

export default Toasty
