import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Verification.module.css";
import { useSelector } from "react-redux";

function Verification(props) {
  const handleChange = ({ id, nextId }) => {
    // If(First.Value.Length){
    //       Document.GetElementById(Last).Focus();
    //     }
    // if (id.value.length) {
    //   document.getElementById(nextId).focus();
    // }
  };
  const mobile = useSelector((store) => {
    return store.AuthReducer.signup.mobile || null;
  });
  const [state, setState] = useState();
  const handleSubmit = () => {};
  // useEffect(() => {
  //   setState(mobile);
  // }, []);
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
        <form onSubmit={handleSubmit}>
          <label>username</label>
          <br />
          <input type="text" name="number" value={mobile} />
          <br />
          {/* <div className={styles.OTP}>
            <input
              type="text"
              id="1"
              maxLength="1"
              nextId="2"
              onChange={(id, nextId) => handleChange}
            />
            <input
              type="text"
              id="2"
              maxLength="1"
              nextId="3"
              onChange={(id, nextId) => handleChange}
            />
            <input
              type="text"
              id="3"
              maxLength="1"
              onChange={() => handleChange}
            />
            <input
              type="text"
              id="4"
              maxLength="1"
              onChange={() => handleChange}
            />
            <input
              type="text"
              id="5"
              maxLength="1"
              onChange={() => handleChange}
            />
            <input type="text" id="6" maxLength="1" />
          </div> */}

          <button type="submit">Continue</button>
          <br />
          <br />
        </form>
        <div>
          <Link to="/signup">
            <button>not now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Verification;

{
  /* <Div Class="UserInput">
    <Input Type="Text" Id='Ist' Maxlength="1" Onkeyup="ClickEvent(This,'Sec')">
    <Input Type="Text" Id="Sec" Maxlength="1" Onkeyup="ClickEvent(This,'Third')">
    <Input Type="Text" Id="Third" Maxlength="1" Onkeyup="ClickEvent(This,'Fourth')">
    <Input Type="Text" Id="Fourth" Maxlength="1" Onkeyup="ClickEvent(This,'Fifth')">
    <Input Type="Text" Id="Fifth" Maxlength="1">
</Div> */
}

// Function ClickEvent(First,Last){
//     If(First.Value.Length){
//       Document.GetElementById(Last).Focus();
//     }
//   }
