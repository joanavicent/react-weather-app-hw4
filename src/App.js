
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer";
import Forecast from "./Forecast";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 id="city">Lisbon</h1>
            <h2>
              <span className="temperature" id="temperature">
                19
              </span>
              <span className="units">
                <a href="/" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
              <div className="col-sm">
                <p className="date" id="date">
                  Monday, 16:37
                </p>
                <br />
                <div className="col d-flex align-items-end">
                  <ul>
                    <li>
                      <strong>Humidity:</strong> <span id="humidity">15</span>%{" "}
                      <i class="fas fa-tint"></i>
                    </li>
                    <li>
                      <strong>Wind speed:</strong> <span id="wind">21</span>{" "}
                      km/h <i class="fas fa-wind"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </h2>
          </div>
          <div className="col">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt=""
              className="float"
              id="weather-icon"
            />
            <div className="description" id="description">
              Clear sky
            </div>
          </div>
        </div>
        <div className="row"></div>
        <hr />
        <Forecast />
        <hr />
        <Form />
      </div>
      <Footer />
    </div>
  );
}


