import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Registration from "./pages/registration/Registration";
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Switch } from "react-router";



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
    </Router>
);
}


export default App;
