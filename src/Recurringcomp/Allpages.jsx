import { useParams } from "react-router-dom";
import Login from "../userPages/Login";
import SignUp from "../userPages/SignUp";
import About from "./About";
import Footer2 from "./Footer2";
import { VerficationCode } from "../userPages/VreificationCode";
import { Forgotpassword } from "../userPages/forgotpassword";
import { VerficationCode2 } from "../userPages/VreificationCode2";
import NewPassword from "../userPages/newPass";
export default function Pages() {
  const { d } = useParams();
  if (d === "login") {
    return <Login />;
  }else if(d === "signup"){
    return <SignUp />;
  }else if(d === "About"){
    return <><About /><Footer2/></>;
  }else if(d === "verify"){
    return <VerficationCode />;
  }else if(d === "forgotpassword"){
    return <Forgotpassword/>
  }else if(d === "verify2"){
    return <VerficationCode2 />;
  }else if(d === 'newpass'){
    return <NewPassword></NewPassword>
  }
}
