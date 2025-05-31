
    function convertTemperature() {
        //parseFloat() use kiya gaya hai taaki string ko number me convert kiya ja sake (decimal numbers bhi allow hon).
        
      const temp = parseFloat(document.getElementById("tempInput").value);
      const unit = document.getElementById("unitInput").value;
      const output = document.getElementById("output");

      let celsius, fahrenheit, kelvin;

      switch (unit) {
        case "Celsius":
          celsius = temp;
          fahrenheit = (temp * 9/5) + 32;
          kelvin = temp + 273.15;
          break;

        case "Fahrenheit":
          celsius = (temp - 32) * 5/9;
          fahrenheit = temp;
          kelvin = (temp - 32) * 5/9 + 273.15;
          break;

        case "Kelvin":
          celsius = temp - 273.15;
          fahrenheit = (temp - 273.15) * 9/5 + 32;
          kelvin = temp;
          break;

        default:
          output.textContent = "Invalid unit!";
          return;
      }

      output.innerHTML = `
        <p>Celsius: ${celsius.toFixed(2)} °C</p>
        <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
        <p>Kelvin: ${kelvin.toFixed(2)} K</p>
      `;
    };