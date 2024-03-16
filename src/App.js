import { useState } from "react";

function SubmitForm() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [confirmError, setConfirmError] = useState(false);

  let emailVerification = (e) => {
    let cont = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(cont.test(e));
  }

  let passwordVerification = (e) => {
    setPasswordError(e.length >= 8);
  }

  let confirmVerification = (e) => {
    setConfirmError(e == password);
  }

  let btnClicked = (e) => {
    if (emailError && passwordError && confirmError) {
      alert(" Form submitted successfully ")
    }
    else {
      alert(" Form cannot be submitted ")
    }
    e.preventDefault();
  }

  return (
    <div className="main">
      <form className="form">
        <div>
          <p><label htmlFor="input">Email:</label></p>


          <input
            required
            id="input"
            type="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
                emailVerification(e.target.value)
              }}
            style={{borderColor: email ? (emailError ?  "#4B8C08" : "#E2432E" ) : "gray"}}
          ></input>
          {email && !emailError && (<h4>Invalid email formate</h4>)}




        </div>
        <div>
          <p><label htmlFor="pass">Password:</label></p>


          <input
            required
            id="pass"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              passwordVerification(e.target.value)
            }}
            style={{borderColor: password ? (passwordError ?  "#4B8C08" : "#E2432E" ) : "gray"}}
          ></input>
          {password && !passwordError && (<h4>Password must be at least 8 characters</h4>)}


        </div>
        <div>
          <p><label htmlFor="conf">Confirm Password:</label></p>


          <input
            required
            id="conf"
            type="password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value)
              confirmVerification(e.target.value)
            }}
            style={{borderColor: confirm ? (confirmError ?  "#4B8C08" : "#E2432E" ) : "gray"}}
          ></input>
          {confirm && !confirmError && (<h4>Password do not match</h4>)}


        </div>
        <div>
          <button className="btn" onClick={btnClicked}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
export default SubmitForm;