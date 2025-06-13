import { HTMLAttributes } from "react";
import { TabMenu } from "../helpers/tabMenu";
import Login from "../helpers/login";
import Logout from "../helpers/logout";

//homepage

//get login status from page.tsx
//login status is also initialized as false in top-level page
interface Props extends HTMLAttributes<any> {
    isLoggedIn: boolean
}

export default function Home(props:Props){
  //TODO: display login page if logged out
  //or logout button if logged in
  const display = () => {
    //==true to check against undefined
    if(props.isLoggedIn==true) return(<Logout />)
    else return(<Login />)
  }
  
  return(
    <div id="Home" className="tabcontent">
    <center>
      <TabMenu />

      {display()}
    </center>
    </div>
  )
}
