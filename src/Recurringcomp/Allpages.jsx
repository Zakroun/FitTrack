import { useParams } from "react-router-dom";
import Login from "../userPages/Login";
import SignUp from "../userPages/SignUp";
import About from "./About";
import Footer2 from "./Footer2";
import { VerficationCode } from "../userPages/VreificationCode";
import { Forgotpassword } from "../userPages/forgotpassword";
import { VerficationCode2 } from "../userPages/VreificationCode2";
import NewPassword from "../userPages/newPass";
import Recipes from "../pages/recipes";
import Recipe from "../pages/recipe";
import { useLocation } from "react-router-dom";
import Contact from "./Cantact";
import Programs from "../pages/Programs";
import WeekPrograme from "../pages/weekprog";
export default function Pages() {
  const location = useLocation();
  const recipe = location.state ;
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
  }else if(d === 'Recipes'){
    return <><Recipes/><Footer2/></>
  }else if(d === 'recipe'){
    return <><Recipe recipe={recipe}/><Footer2/></>
  }else if(d === 'Programs'){
    return <><Programs/><Footer2/></>
  }
  else if(d === 'contact'){
    return <><Contact/></>
  }else if(d === 'weeklyGymPrograms'){
    return <><WeekPrograme/><Footer2/></>
  }
}
