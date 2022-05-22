import '../styles/currentWeather.css';


function CurrentWeather() {
    return (
      <div className="currentWeather">
        <Navbar />
        <div className='bodyCurrent'>
          <LogoCurrent/>
          <TempCurrent/>
          <FooterCurrent/>
        </div>
      </div>
    );
  }