import { useEffect, useState } from "react";
import { useRef } from "react";

export function VerficationCode2() {
  document.title = "Verification Code - FitTrack";
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [btndisplay, setBtndisplay] = useState("block");
  const [dispalydiv, setDiv] = useState(false);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const interid = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      window.location.href = "/pages/newpass";
    }
  };

  const decrement = () => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interid.current);
        setBtndisplay("none");
        setDiv(true);
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    } else {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    interid.current = setInterval(decrement, 1000);
    return () => clearInterval(interid.current);
  }, [seconds, minutes]);

  const Resend = () => {
    setMinutes(2);
    setSeconds(0);
    setDiv(false);
    setBtndisplay("block");

    clearInterval(interid.current);
    interid.current = setInterval(decrement, 1000);
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <div className="logininfo">
          <h1>Verification Code</h1>
          {error ? <p id="loginerror">{error}</p> : ""}

          <form>
            {(minutes !== 0 || seconds !== 0) && (
              <span>
                {`${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`}
              </span>
            )}
            <br />
            <input
              type="text"
              placeholder="Verification Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              id="logininput"
            />{" "}
            <br />
            <button
              id="loginbutton"
              style={{ display: btndisplay }}
              onClick={handleSubmit}
            >
              Verify
            </button>
            {dispalydiv && (
              <button id="loginbutton" onClick={Resend}>
                Resend
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
