serial.onDataReceived(serial.delimiters(Delimiters.Colon), function () {
    images.iconImage(IconNames.Silly).showImage(0)
    soil_temperature = weatherbit.soilTemperature()
    soil_moisture = weatherbit.soilMoisture()
    wind_speed = weatherbit.windSpeed()
    rain = weatherbit.rain()
    wind_direction = weatherbit.windDirection()
    temperature = weatherbit.temperature()
    humidity = weatherbit.humidity()
    pressure = weatherbit.pressure()
    altitude = weatherbit.altitude()
    images.arrowImage(ArrowNames.North).showImage(0)
    let data = {
        "soil_temperature" : soil_temperature,
        "soil_moisture" : soil_moisture,
        "wind_speed" : wind_speed,
        "wind_direction": wind_direction,
        "rain" : rain,
        "temperature" : temperature,
        "humidity" : humidity,
        "pressure" : pressure,
        "altitude" : altitude,
    }
// serial.write_value("soil temperature", weatherbit.soil_temperature())
    // serial.write_value("soil moisture", weatherbit.soil_moisture())
    // serial.write_value("wind speed", weatherbit.wind_speed())
    // serial.write_value("rain", weatherbit.rain())
    // serial.write_value("temperature", weatherbit.temperature())
    // serial.write_value("humidity", weatherbit.humidity())
    // serial.write_value("pressure", weatherbit.pressure())
    // serial.write_value("altitude", weatherbit.altitude())
    serial.writeLine("" + (JSON.stringify(data)))
    images.iconImage(IconNames.Yes).showImage(0)
})
let soil_temperature = 0
let soil_moisture = 0
let wind_speed = 0
let rain = 0
let wind_direction = ""
let temperature = 0
let humidity = 0
let pressure = 0
let altitude = 0
serial.writeLine("{'data': None, 'start': true}")
weatherbit.startRainMonitoring()
weatherbit.startWindMonitoring()
weatherbit.startWeatherMonitoring()
images.iconImage(IconNames.Yes).showImage(0)
serial.redirectToUSB()