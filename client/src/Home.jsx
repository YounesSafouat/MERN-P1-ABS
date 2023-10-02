import Body from "./dashbord/body/body";
import NavBar from "./dashbord/navigation/NavBar";
import "./index.css";
import PropTypes from 'prop-types';
export default function Home(props) {
  return (
    <div className="container">
      <NavBar nav={props.nav} />
      <Body />
    </div>
  );
}
Home.propTypes = {
  nav: PropTypes.string.isRequired,
};
