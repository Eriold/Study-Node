const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9ebc5ba8b7bacb1d79c65e8ed2a50d6&units=metric`)

    return resp.data.main.temp;



}

module.exports = {
    getClima
}