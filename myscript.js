// Function to read sensor data from Firebase
document.getElementById("readSensorData").onclick = function () {
    // Reference to the sensorData path in Firebase
    firebase
      .database()
      .ref("sensorData")
      .on("value", function (snapshot) {
        // Check if data exists
        if (snapshot.exists()) {
          var sensorData = snapshot.val();
  
          // Display sensor data on the webpage
          document.getElementById("humidity").innerHTML = "Humidity: " + sensorData.humidity + "%";
          document.getElementById("temperature").innerHTML = "Temperature: " + sensorData.temperature + "°C";
          document.getElementById("smokeLevel").innerHTML = "Smoke Level: " + sensorData.smokeLevel;
        } else {
          alert("No sensor data available.");
        }
      });
  };

