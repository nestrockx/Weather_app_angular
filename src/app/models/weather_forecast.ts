export interface WeatherForecast{
    coord: Coord,
    weather: Weather[],
    base: string
    main: Main,
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    rain: Rain,
    snow: Snow,
    dt: number,
    sys: Sys,
    timezone: number,
    id: number,
    name: string,
    cod: number
}

interface Coord{
    lon: number,
    lat: number
}

interface Weather{
    id: number,
    main: string,
    description: string,
    icon: string
}

interface Main{
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
    sea_level: number,
    grnd_level: number
}

interface Wind{
    speed: number,
    deg: 350,
    gust: number
}

interface Clouds{
    all: number
}

interface Rain{
    _1h: number
    _3h: number
}

interface Snow{
    _1h: number
    _3h: number
}

interface Sys{
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
}