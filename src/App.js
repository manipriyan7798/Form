import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
      <Routes>
        <Route path="/" component={Signup} exact />
        <Route path="/login" component={Login} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
