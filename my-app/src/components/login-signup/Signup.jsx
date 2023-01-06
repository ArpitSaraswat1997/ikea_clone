import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { SignupThunkActionCreator } from "./AuthReducer/Actions";

function Signup(props) {
  const [accountType, setAccountType] = useState({
    type: "familyAccount",
  });
  const [input, setInput] = useState({
    firstName: "",
    surname: "",
    mobile: null,
    birthDate: null,
    gender: "",
    postCode: "",
    store: "",
    email: "",
    password: "",
    contactOnEmail: "OK",
    contactOnSms: "OK",
    contactOnDirectMail: "OK",
    terms: "",
  });
  const dispatch = useDispatch();
  const handleFormChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, "  ", e.target.value);
  };
  function handleAccountType(event) {
    setAccountType({ type: event.target.value });
    console.log(event.target.value);
  }
  const handleForm = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(SignupThunkActionCreator(input));
  };
  // useEffect(()=>{

  // },[form])
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <h1>
            Create an{" "}
            {accountType.type == "familyAccount" ? (
              <span style={{ color: "#0058a3" }}>IKEA Family</span>
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
          <br />
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
            <br />
            <br />
          </div>
        </div>
        <div>
          <form onSubmit={handleForm}>
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="firstName"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>First Name</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="surname"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Surname</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="tel"
                name="mobile"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Mobile</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="text"
                name="birthDate"
                className={styles.inputFiled}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>BirthDate</span>
            </div>
            <br />
            <br />
            <select name="gender" onChange={handleFormChange}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="number"
                name="postCode"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Post Code</span>
            </div>
            <br />
            <br />
            <select name="store" onChange={handleFormChange}>
              <option value="">Preferred Store</option>
              <option value="online">Online</option>
              <option value="offline">Store</option>
            </select>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="email"
                name="email"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Email(username)</span>
            </div>
            <br />
            <br />
            <div className={styles.inputWrapper}>
              <br />
              <input
                type="password"
                name="password"
                className={styles.inputFiled}
                onChange={handleFormChange}
                required
              />
              <span className={styles.floatingSpan}>Password</span>
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              checked={
                input.contactOnEmail == "OK" ||
                input.contactOnSms == "OK" ||
                input.contactOnDirectMail == "OK"
                  ? true
                  : false
              }
              required
            />
            I would like to receive news, tips and marketing offers from IKEA.
            <br />
            <br />
            <div style={{ marginLeft: "25px" }}>
              <input
                type="checkbox"
                value={input.contactOnEmail == "OK" ? "NOT" : "OK"}
                name="contactOnEmail"
                onChange={handleFormChange}
                checked={input.contactOnEmail == "OK" ? true : false}
              />
              Via email
              <br />
              <input
                type="checkbox"
                value={input.contactOnSms == "OK" ? "NOT" : "OK"}
                name="contactOnSms"
                onChange={handleFormChange}
                checked={input.contactOnSms == "OK" ? true : false}
              />
              Via SMS
              <br />
              <input
                type="checkbox"
                value={input.contactOnDirectMail == "OK" ? "NOT" : "OK"}
                name="contactOnDirectMail"
                onChange={handleFormChange}
                checked={input.contactOnDirectMail == "OK" ? true : false}
              />
              Via direct mail
              <br />
            </div>
            <br />
            <br />
            <input
              type="checkbox"
              value={input.terms == "OK" ? "NOT" : "OK"}
              name="terms"
              onChange={handleFormChange}
              checked={input.terms === "OK" ? true : false}
              required
            />{" "}
            I have read and understood the{" "}
            <Link to="#">Terms & Conditions</Link> and{" "}
            <Link to="#">Privacy Policy.</Link>
            <br />
            <br />
            <br />
            <br />
            <button type="submit">Create Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
