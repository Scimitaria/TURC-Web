import { TabMenu } from "../helpers/tabMenu";

export default function Hall(){
    return(
      <div>
        <TabMenu />

        <center>
          <p className="font-[Graduate] font-bold mb-10"> The all-time greats of Trinity's Running Club! </p>

          <p className="font-[Graduate] w-100 align-left text-sm mt-20"> 
            In order to qualify for the hall of fame, the officers must determine that you have made an outstandingly positive impact on to club. 
            <br/><br/>
            Conduct unbecoming of a TURC member will result in that member being stricken from the Hall of Fame.
          </p>
        </center>
      </div>
    )
}