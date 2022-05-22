import NavBar from './NavBar';
import LogoCurrent from './LogoCurrent';
import TempCurrent from './TempCurrent';
import FooterCurrent from './FooterCurrent';
import '../../styles/CurrentWeather.scss';

function CurrentWeather() {
  return (
    <div className="currentWeather">
      <NavBar />
      <div className="bodyCurrent">
        <LogoCurrent />
        <TempCurrent />
        <FooterCurrent />
      </div>
    </div>
  );
}

export default CurrentWeather;
