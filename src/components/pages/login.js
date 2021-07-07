// Material design components

import { TextField, Button } from "@material-ui/core";

// images

import LeftImage from "./images/login_left.jpg";

import LoginRight from "./images/login_right.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <img src={LeftImage} alt="" />
      </div>
      <div className="login-right">
        <div className="up">
          <img src={LoginRight} alt="" />
        </div>
        <div className="down">
          <h1>Login</h1>

          <div className="inp">
            <TextField id="standard-basic" label="Username" />
          </div>
          <div className="inp">
            <TextField id="standard-basic" label="Password" />
          </div>
          <div className="submit">
            <Button variant="contained" color="primary">
              LogIn
            </Button>
            <Button variant="contained">Default</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
