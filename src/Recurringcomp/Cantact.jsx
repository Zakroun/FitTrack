import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendmessage } from "../store/FitSlice";
export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const Send = (a) => {
    a.preventDefault();
    dispatch(sendmessage({ email, message }));
  };
  return (
    <div className="contact">
      <div className="conatctcontainer">
        <h1>Contact us</h1>
        <form>
          <input
            type="email"
            id="logininput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <textarea
            id="textarea"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>{" "}
          <br />
          <button id="btnsend" onClick={Send} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
