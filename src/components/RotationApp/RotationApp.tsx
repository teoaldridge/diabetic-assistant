import { useState } from "react";
import "./RotationApp.modules.css";

const RotationApp: React.FC = () => {
  const [injectionSite, setInjectionSite] = useState<string | null>(null);
  const [injectionDate, setInjectionDate] = useState<string>("");
  const [injectionTime, setInjectionTime] = useState<string>("");
  const handleInjectionSiteClick = (selectedSite: string) => {
    setInjectionSite(selectedSite);
  };
  const handleLogInjection = () => {
    if (injectionSite && injectionDate && injectionTime) {
      console.log("Injection Logged:", {
        site: injectionSite,
        date: injectionDate,
        time: injectionTime,
      });
    }
  };
  return (
    <div className="rotation-app-container">
      {/* Front Body image and buttons */}
      <div className="button-image-container">
        <div className="left-buttons">
          <button onClick={() => handleInjectionSiteClick("Front Left Arm")}>
            Left Arm
          </button>
          <button onClick={() => handleInjectionSiteClick("Front Left Abs")}>
            Left Abs
          </button>
          <button onClick={() => handleInjectionSiteClick("Front Left Thigh")}>
            Left Thigh
          </button>
        </div>
        <img src="./frontbody.jpg" alt="Front Body Injection Sites" />
        <div className="right-buttons">
          <button onClick={() => handleInjectionSiteClick("Front Right Arm")}>
            Right Arm
          </button>
          <button onClick={() => handleInjectionSiteClick("Front Right Abs")}>
            Right Abs
          </button>
          <button onClick={() => handleInjectionSiteClick("Front Right Thigh")}>
            Right Thigh
          </button>
        </div>
      </div>
      {/* Back Body image and buttons */}
      <div className="button-image-container">
        <div className="left-buttons">
          <button onClick={() => handleInjectionSiteClick("Back Left Arm")}>
            Left Arm
          </button>
          <button onClick={() => handleInjectionSiteClick("Back Left Waist")}>
            Left Waist
          </button>
          <button
            onClick={() => handleInjectionSiteClick("Back left Buttocks")}
          >
            Left Buttocks
          </button>
          <button onClick={() => handleInjectionSiteClick("Back Left Thigh")}>
            Left Thigh
          </button>
        </div>
        <img src="./backbody.jpg" alt="Back Body Injection Sites" />
        <div className="right-buttons">
          <button onClick={() => handleInjectionSiteClick("Back Right Arm")}>
            Right Arm
          </button>
          <button onClick={() => handleInjectionSiteClick("Back Right Weist")}>
            Right Weist
          </button>
          <button
            onClick={() => handleInjectionSiteClick("Back Right Buttocks")}
          >
            Right Buttocks
          </button>
          <button onClick={() => handleInjectionSiteClick("Back Right Thigh")}>
            Right Thigh
          </button>
        </div>
      </div>
      <div>
        <input
          className="input"
          type="date"
          value={injectionDate}
          onChange={(e) => setInjectionDate(e.target.value)}
        />
        <input
          className="input"
          type="time"
          value={injectionTime}
          onChange={(e) => setInjectionTime(e.target.value)}
        />
        <button onClick={handleLogInjection}>Log Injection</button>
      </div>
    </div>
  );
};

export default RotationApp;
