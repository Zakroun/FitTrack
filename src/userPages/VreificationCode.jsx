import { useState } from "react";

export function VerficationCode(){
    document.title = "Verification Code - FitTrack";
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(code === ""){
            setError("Please fill in all fields");
        }else{
            setError("");
            alert("Verification Successful");
            window.location.href = "/";
        }
    }
    return (
        <div className="login">
        <div className="logincontainer">
            <div className="logininfo">
            <h1>Verification Code</h1>
            {error ? <p id="loginerror">{error}</p> : ''}
            <form>
                <input type="text" placeholder="Verification Code" value={code} onChange={(e)=>setCode(e.target.value)} id="logininput" /> <br />
                <button id="loginbutton" onClick={handleSubmit}>Verify</button>
            </form>
            </div>
        </div>
        </div>
    );
}