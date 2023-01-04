import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login(props) {
  //◀
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <button
            style={{
              marginLeft: "-45px",
              fontSize: "40px",
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ⬅
          </button>
          <img
            src="https://in.accounts.ikea.com/resources/static/logo.svg"
            alt="IkeaLogoImg"
          />
        </div>
        <div>
          <h1>
            <span>Login</span> to your IKEA account.
          </h1>
          <p>Too many passwords?</p>
          <p>
            You can now login with an OTP we will send on your email address or
            verified mobile number.
          </p>
          <p>
            Access your IKEA account using your email address to add and verify
            your mobile number.
          </p>
        </div>
        <div>
          <p>
            IKEA.in - <Link to="#">Cookie Policy</Link> and{" "}
            <Link to="#">Privacy Policy</Link>
          </p>
          <p>© Inter IKEA Systems B.V. 1999-2023</p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <form>
          <label>Email or Verified Mobile Number</label>
          <br />
          <input type="email" required />
          <br />
          <span>
            Login <Link to="#">with an OTP</Link>
          </span>
          <br />
          <br />
          <label>Password</label>
          <br />
          <input type="password" required />
          <br />
          <span>
            <Link to="#">Forgot your password?</Link>
          </span>
          <br />
          <button>Continue</button>
          <br />
        </form>
        <div>
          <h4>Do not have an IKEA account? Create one now.</h4>
          <button>I'm buying for my home</button>
          <br />
          <br />
          <button>I'm buying for my company</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
