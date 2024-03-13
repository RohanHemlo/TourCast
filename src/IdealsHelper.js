function getIdeals(temperature, weather, visibility, windSpeed, humidity) {
    let ideals = ["Ideal","Ideal","Ideal","Ideal","Ideal","Ideal","Ideal"];
  
    // Running
    if (visibility < 5000 || temperature < 5 || temperature > 30 || weather == "Rain" || windSpeed > 5.5|| humidity < 20 || humidity > 80) {
      ideals[0] = "Poor"
    }
    if (visibility < 2000 || temperature < -5 || temperature > 35 || weather == "Thunder" || weather == "Storm" || windSpeed > 8.3|| humidity < 10 || humidity > 90) {
      ideals[0] = "Warning"
    }
  
    // Camping
    if (visibility < 5000 || temperature < 10 || temperature > 25 || weather == "Rain" || windSpeed > 5.5|| humidity < 40 || humidity > 70) {
      ideals[1] = "Poor"
    }
    if (visibility < 2000 || temperature < -5 || temperature > 35 || weather == "Thunder" || weather == "Storm" || windSpeed > 8.3|| humidity < 20 || humidity > 80) {
      ideals[1] = "Warning"
    }
    
    // Fishing
    if (visibility < 5000 || temperature < 10 || temperature > 30 || windSpeed > 5.5) {
      ideals[2] = "Poor"
    }
    if (visibility < 2000 || temperature < -5 || temperature > 35 || weather == "Thunder" || weather == "Storm" || windSpeed > 8.3|| humidity < 15 || humidity > 80) {
      ideals[2] = "Warning"
    }
  
    // Hiking
    if (visibility < 4000 || temperature < 0 || temperature > 30 || weather == "Rain" || windSpeed > 5.5) {
      ideals[3] = "Poor"
    }
    if (visibility < 2000 || temperature < -5 || temperature > 35 || weather == "Thunder" || weather == "Storm" || windSpeed > 8.3) {
      ideals[3] = "Warning"
    }
  
    // Watersports
    if (visibility < 5000 || temperature < 18 || temperature > 25 ||  windSpeed > 5.14444) {
      ideals[4] = "Poor"
    }
    if (visibility < 2000 || temperature < 5 || temperature > 35 || weather == "Thunder" || weather == "Storm" || windSpeed > 12) {
      ideals[4] = "Warning"
    }
  
    // Skiing
    if (visibility < 40 || temperature < -6|| windSpeed > 7) {
      ideals[5] = "Poor"
    }
    if (visibility < 20 || temperature < -10 || weather == "Thunder" || weather == "Storm" || windSpeed > 13) {
      ideals[5] = "Warning"
    }
    if (temperature >= 0) {
      ideals[5] = "Unavailable"
    }
  
    // Stargazing
    if (visibility < 5000 || weather != "Clear") {
      ideals[6] = "Unavailable"
    }
    
    return ideals;
  }
  export {getIdeals};

  //https://openweathermap.org/weather-conditions