import CardBox from "./CardBox";
import Details from "./Details";
import Topbar from "./Topbar";

export default function Body() {
  return (
    <div className="main">
      <Topbar />
      <CardBox />
      <Details />
    </div>
  );
}
