import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";

function Signup(props) {
  const [accountType, setAccountType] = useState({
    type: "familyAccount",
  });
  function handleAccountType(event) {
    setAccountType({ type: event.target.value });
    console.log(event.target.value);
  }
  const handleForm = (e) => {};
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <h1>
            Create an{" "}
            {accountType.type == "familyAccount" ? (
              <span>IKEA Family</span>
            ) : (
              "IKEA"
            )}{" "}
            Profile
          </h1>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div>
          <h3>
            Become a member of IKEA Family today. Did we mention it's free to
            join?
          </h3>
          <div onChange={handleAccountType}>
            <input
              type="radio"
              value="familyAccount"
              name="accountType"
              checked={accountType.type === "familyAccount"}
            />
            Yes, I want to enjoy discounts, previews and a lot more!
            <Link to="#">Get the details.</Link>
            <br />
            <br />
            <input
              type="radio"
              value="justAccount"
              name="accountType"
              checked={accountType.type === "justAccount"}
            />
            No thanks, I just want to create an IKEA account today. Maybe
            another day.
            <Link>Get the details</Link>
            <br />
            <br />
          </div>
        </div>
        <div>
          <form>
            <div className={styles.inputWrapper}>
              <br />
              <input type="text" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>First Name</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input type="text" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>Surname</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input type="tel" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>Mobile</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="date"
                className={styles.inputFiled}
                placeholder=""
                required
              />
              <span className={styles.floatingSpan}>BirthDate</span>
            </div>
            <br />
            <br />
            <select name="gender">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input type="number" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>Post Code</span>
            </div>
            <br />
            <br />
            <select name="contactType">
              <option value="">Preferred Store</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input type="email" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>Email(username)</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input type="password" className={styles.inputFiled} required />
              <span className={styles.floatingSpan}>Password</span>
            </div>
            <br />
            <br />
            <input type="checkbox" value="" name="" checked={""} />
            I would like to receive news, tips and marketing offers from IKEA.
            <br />
            <br />
            <div onChange={handleForm} style={{ marginLeft: "25px" }}>
              <input type="checkbox" value="" name="" checked={""} />
              Via email
              <br />
              <input type="checkbox" value="" name="" checked={""} />
              Via SMS
              <br />
              <input type="checkbox" value="" name="" checked={""} />
              Via direct mail
              <br />
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              value=""
              name="Agree"
              checked={""}
              required
            />{" "}
            I have read and understood the{" "}
            <Link to="#">Terms & Conditions</Link> and{" "}
            <Link to="#">Privacy Policy.</Link>
            <br />
            <button>Create Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
