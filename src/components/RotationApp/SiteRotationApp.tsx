import { useState } from "react";
import "./SiteRotationApp.modules.css";
import SiteRotationLogs from "./SiteRotationLogs";
import SiteLog from "../../models/sitelog";

const SiteRotationInput: React.FC = () => {
  const [injectionSite, setInjectionSite] = useState<string | null>(null);
  const [injectionDate, setInjectionDate] = useState<string>("");
  const [injectionTime, setInjectionTime] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [listedLogs, setListedLogs] = useState<SiteLog[]>([]);

  const handleInjectionSiteClick = (selectedSite: string) => {
    setInjectionSite(selectedSite);
  };

  const handleLogInjection = () => {
    if (injectionSite && injectionDate && injectionTime) {
      // console.log("Injection Logged:", {
      //   site: injectionSite,
      //   date: injectionDate,
      //   time: injectionTime,
      // });
      const newLog: SiteLog = {
        site: injectionSite,
        date: injectionDate,
        time: injectionTime,
        id: new Date().toISOString(),
      };
      setListedLogs((prevLogs) => [...prevLogs, newLog]);
    } else {
      setError("Please fill in all fields.");
      return;
    }
    setInjectionSite("");
    setInjectionDate("");
    setInjectionTime("");
    setError("");
  };

  return (
    <div className="rotation-app-container">
      {/* Front Body image and buttons */}
      <div className="button-image-container">
        <div className="left-buttons">
          <button
            className={injectionSite === "Front Left Arm" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Left Arm")}
          >
            Left Arm
          </button>
          <button
            className={injectionSite === "Front Left Abs" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Left Abs")}
          >
            Left Abs
          </button>
          <button
            className={injectionSite === "Front Left Thigh" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Left Thigh")}
          >
            Left Thigh
          </button>
        </div>
        <img src="./frontbody.jpg" alt="Front Body Injection Sites" />
        <div className="right-buttons">
          <button
            className={injectionSite === "Front Right Arm" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Right Arm")}
          >
            Right Arm
          </button>
          <button
            className={injectionSite === "Front Right Abs" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Right Abs")}
          >
            Right Abs
          </button>
          <button
            className={injectionSite === "Front Right Thigh" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Front Right Thigh")}
          >
            Right Thigh
          </button>
        </div>
      </div>
      {/* Back Body image and buttons */}
      <div className="button-image-container">
        <div className="left-buttons">
          <button
            className={injectionSite === "Back Left Arm" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Left Arm")}
          >
            Left Arm
          </button>
          <button
            className={injectionSite === "Back Left Waist" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Left Waist")}
          >
            Left Waist
          </button>
          <button
            className={injectionSite === "Back Left Buttocks" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Left Buttocks")}
          >
            Left Buttocks
          </button>
          <button
            className={injectionSite === "Back Left Thigh" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Left Thigh")}
          >
            Left Thigh
          </button>
        </div>
        <img src="./backbody.jpg" alt="Back Body Injection Sites" />
        <div className="right-buttons">
          <button
            className={injectionSite === "Back Right Arm" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Right Arm")}
          >
            Right Arm
          </button>
          <button
            className={injectionSite === "Back Right Waist" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Right Waist")}
          >
            Right Waist
          </button>
          <button
            className={
              injectionSite === "Back Right Buttocks" ? "selected" : ""
            }
            onClick={() => handleInjectionSiteClick("Back Right Buttocks")}
          >
            Right Buttocks
          </button>
          <button
            className={injectionSite === "Back Right Thigh" ? "selected" : ""}
            onClick={() => handleInjectionSiteClick("Back Right Thigh")}
          >
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
        <button className="logbutton" onClick={handleLogInjection}>
          Log Injection / Pump Site
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
      <SiteRotationLogs logs={listedLogs} />
    </div>
  );
};

export default SiteRotationInput;
