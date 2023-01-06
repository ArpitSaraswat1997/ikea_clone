import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/login-signup/Signup";
import Login from "./components/login-signup/login";
import Verification from "./components/login-signup/Verification";
function App() {
  return (
    <div>
      <Signup />
      <Login />
      <Verification />
    </div>
  );
}

export default App;
