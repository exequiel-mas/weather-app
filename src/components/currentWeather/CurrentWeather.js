import NavBar from './navbar';
import LogoCurrent from './LogoCurrent';
import TempCurrent from './TempCurrent';
import FooterCurrent from './FooterCurrent';
import '../../styles/currentWeather.scss';

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
