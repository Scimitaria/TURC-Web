import { HTMLAttributes } from "react";
import { TabMenu } from "../helpers/tabMenu";

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
    if(props.isLoggedIn==true) return(<p> logged in</p>)
    else return(<p>logged out</p>)
  }
  
  return(
    <div id="Home" className="tabcontent">
    <center>
      <TabMenu />

      <p className="font-[Graduate]">TURC</p>
      {display()}
    </center>
    </div>
  )
}