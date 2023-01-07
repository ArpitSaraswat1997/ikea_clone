import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Verification.module.css";
import { useSelector } from "react-redux";
import { PinInput, PinInputField } from "@chakra-ui/react";

function Verification(props) {
  const [state, setState] = useState("");
  const mobile = useSelector((store) => {
    return store.AuthReducer.signup.mobile || "";
  });
  const handleOtp = () => {
    setState((prevSt) => prevSt + document.getElementById("foo-0").value);
    setState((prevSt) => prevSt + document.getElementById("foo-1").value);
    setState((prevSt) => prevSt + document.getElementById("foo-2").value);
    setState((prevSt) => prevSt + document.getElementById("foo-3").value);
    setState((prevSt) => prevSt + document.getElementById("foo-4").value);
    setState((prevSt) => prevSt + document.getElementById("foo-5").value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <Link to="/login">
            <button
              type="button"
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
          </Link>
          <img
            src="https://in.accounts.ikea.com/resources/static/logo.svg"
            alt="IkeaLogoImg"
          />
        </div>
        <div>
          <h1>
            <span>Verify</span> your mobile number
          </h1>
          <p>
            Enter the OTP you received on your phone in the "SMS code" field.
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
        <div className={styles.preDiv}>
          <label>username</label>
          <br />
          <input type="text" name="number" value={mobile} />
        </div>
        <br />
        <PinInput id="foo" otp>
          <PinInputField className={styles.pinInput} />
          <PinInputField className={styles.pinInput} />
          <PinInputField className={styles.pinInput} />
          <PinInputField className={styles.pinInput} />
          <PinInputField className={styles.pinInput} />
          <PinInputField className={styles.pinInput} />
        </PinInput>
        <div style={{ textAlign: "right" }}>
          <span>
            <Link>Send new code</Link>
          </span>
        </div>
        <br />
        <br />
        <br />
        <br />
        <button style={{ backgroundColor: "#0058a3" }} onClick={handleOtp}>
          Continue
        </button>
        <br />
        <br />
        <div>
          <Link to="/signup">
            <button>not now{state}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Verification;
