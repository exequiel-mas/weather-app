const days = [
    { 
        id: '1',
        day: 'Tomorrow',
        clima: require('../../images/SunSleet.png'),
        tmpmax: 16,
        tmpmin: 11
    },
    {        
        id: '2',
        day: 'Sun, 7 Jun',
        clima: require('../../images/SunSleet.png'),
        tmpmax: 16,
        tmpmin: 11},
    {        
        id: '3',
        day: 'Mon, 8 Jun',
        clima: require('../../images/PartCloudRainThunderDay.png'),
        tmpmax: 16,
        tmpmin: 11},
    {        
        id: '4',
        day: 'Tue, 9 Jun',
        clima: require('../../images/LightCloud.png'),
        tmpmax: 16,
        tmpmin: 11},
    {        
        id: '5',
        day: 'Wed, 10 Jun',
        clima: require('../../images/HeavyRain.png'),
        tmpmax: 16,
        tmpmin: 11}
]

export const getDays = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{ //simulo que la appi funciona mal y tarda 2 segundos en devolver el dato
            resolve(days)
        }, 200)
    })
}