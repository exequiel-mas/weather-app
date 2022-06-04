import '../../styles/daysWeatherBox.scss'

const DaysWeatherBox = (props) => {
    return(
        <div className='DaysWeatherBox'>
            <div className='DaysWeatherBoxDiv'>
                <h2>{props.day}</h2>
                <div className='ImgClima'>
                    <img src={props.clima} alt="imagen del clima"/>
                </div>
                <div className='TempsDay'>
                    <p>{props.tmpmax}°c</p>
                    <p className='MinTemp'>{props.tmpmin}°c</p>
                </div>
            </div>
        </div>
    )
}

export default DaysWeatherBox;