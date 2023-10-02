import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function NavBar(props) {
  const [dashCol, setDashCol] = useState("#2a2185");
  const [createCol, setCreateCol] = useState("#2a2185");
  const [reqCol, setReqCol] = useState("#2a2185");
  const [traineeCol, setTraineeCol] = useState("#2a2185");
  const [settingsCol, setSettingsCol] = useState("#2a2185");
  const [OutCol, setOutCol] = useState("#2a2185");
  //-----------------------------------------
  const [dashText, setDashText] = useState("#fff");
  const [createText, setCreateText] = useState("#fff");
  const [reqText, setReqText] = useState("#fff");
  const [traineeText, setTraineeText] = useState("#fff");
  const [settingsText, setSettingsText] = useState("#fff");
  const [OutText, setOutText] = useState("#fff");
  useEffect(() => {
    // Use a switch case to set the appropriate color based on props.nav
    switch (props.nav) {
      case "home":
        setCreateCol("#2a2185")
        setReqCol("#2a2185")
        setTraineeCol("#2a2185")
        setSettingsCol("#2a2185")
        setOutCol("#2a2185")
        //------------------
        setCreateText("#fff")
        setReqText("#fff")
        setTraineeText("#fff")
        setSettingsText("#fff")
        setOutText("#fff")
        //-------------------------
        setDashCol("#fff");
        setDashText("black"); // Set the desired color
        break;
      case "create":
        setReqCol("#2a2185")
        setTraineeCol("#2a2185")
        setSettingsCol("#2a2185")
        setOutCol("#2a2185")
        setDashCol("#2a2185")
        //------------------
        setDashText("#fff")
        setReqText("#fff")
        setTraineeText("#fff")
        setSettingsText("#fff")
        setOutText("#fff")
        //----------------------
        setCreateCol("#fff");
        setCreateText("black");
        break;
      case "request":
        setCreateCol("#2a2185")
        setTraineeCol("#2a2185")
        setSettingsCol("#2a2185")
        setOutCol("#2a2185")
        setDashCol("#2a2185")
        //------------------
        setDashText("#fff")
        setCreateText("#fff")
        setTraineeText("#fff")
        setSettingsText("#fff")
        setOutText("#fff")
        //--------------------
        setReqCol("#fff");
        setReqText("black");
        break;
      case "trainee":
        setCreateCol("#2a2185")
        setReqCol("#2a2185")
        setSettingsCol("#2a2185")
        setOutCol("#2a2185")
        setDashCol("#2a2185")
        //------------------
        setDashText("#fff")
        setCreateText("#fff")
        setReqText("#fff")
        setSettingsText("#fff")
        setOutText("#fff")
        //------------------
        setTraineeCol("#fff");
        setTraineeText("black");
        break;
      case "settings":
        setCreateCol("#2a2185")
        setReqCol("#2a2185")
        setTraineeCol("#2a2185")
        setOutCol("#2a2185")
        setDashCol("#2a2185")
        //------------------
        setDashText("#fff")
        setCreateText("#fff")
        setReqText("#fff")
        setTraineeText("#fff")
        setOutText("#fff")
        //------------------
        setSettingsCol("#fff");
        setSettingsText("black");
        break;
      case "logout":
        setCreateCol("#2a2185")
        setReqCol("#2a2185")
        setTraineeCol("#2a2185")
        setSettingsCol("#2a2185")
        setDashCol("#2a2185")
        //------------------
        setDashText("#fff")
        setCreateText("#fff")
        setReqText("#fff")
        setTraineeText("#fff")
        setSettingsText("#fff")
        //--------------------
        setOutCol("#fff");
        setOutText("black");
        break;
      default:
        setDashCol("#fff");
        setDashText("black"); // Set a default color
        break;
    }
  }, [props.nav]);
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <ion-icon name="logo-apple"></ion-icon>
            </span>
            <span className="title">Brand Name</span>
          </a>
        </li>

        <li style={{ backgroundColor: `${dashCol}` }}>
          <Link to="/home">
            <span className="icon">
              <ion-icon
                name="home-outline"
                style={{ color: `${dashText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${dashText}` }}>
              Dashboard
            </span>
          </Link>
        </li>
        <li style={{ backgroundColor: `${createCol}` }}>
          <Link to="/create">
            <span className="icon">
              <ion-icon
                name="people-outline"
                style={{ color: `${createText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${createText}` }}>
              create Class
            </span>
          </Link>
        </li>

        <li style={{ backgroundColor: `${reqCol}` }}>
          <Link to="/request">
            <span className="icon">
              <ion-icon
                name="chatbubble-outline"
                style={{ color: `${reqText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${reqText}` }}>
              requests
            </span>
          </Link>
        </li>

        <li style={{ backgroundColor: `${traineeCol}` }}>
          <Link to="/trainee">
            <span className="icon">
              <ion-icon
                name="help-outline"
                style={{ color: `${traineeText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${traineeText}` }}>
              trainee
            </span>
          </Link>
        </li>

        <li style={{ backgroundColor: `${settingsCol}` }}>
          <Link to="/settings">
            <span className="icon">
              <ion-icon
                name="settings-outline"
                style={{ color: `${settingsText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${settingsText}` }}>
              Settings
            </span>
          </Link>
        </li>

        <li style={{ backgroundColor: `${OutCol}` }}>
          <Link to="/logout">
            <span className="icon">
              <ion-icon
                name="log-out-outline"
                style={{ color: `${OutText}` }}
              ></ion-icon>
            </span>
            <span className="title" style={{ color: `${OutText}` }}>
              Sign Out
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
NavBar.propTypes = {
    nav: PropTypes.string.isRequired,
  };