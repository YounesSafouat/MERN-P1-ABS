
import Home from "./home";
import Auth from "./Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home nav='home'/>} />
          <Route path="/create" element={<Home nav='create'/>} />
          <Route path="/register" element={<Auth val={false}/>} />
          <Route path="/login" element={<Auth val={true}/>} />
         <Route path="/request" element={<Home nav='request' />}  />
         <Route path="/trainee" element={<Home nav='trainee' />}  />
         <Route path="/settings" element={<Home nav='settings' />}  />
         <Route path="/logout" element={<Home nav='logout' />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}
