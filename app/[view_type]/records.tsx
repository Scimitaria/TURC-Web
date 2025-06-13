import data from '../helpers/data/records.json'
import { TabMenu } from '../helpers/tabMenu'

export default function Records(){
    var   male:any = []
    var female:any = []

    const showRecords = () => {  
        for(const {distance,time,holder,sex} of data){
            switch(sex){
                case 'M':
                    male.push([distance,time,holder]);
                    break;
                case 'F': 
                    female.push([distance,time,holder])
                    break;
                default: 
                    male.push([distance,time,holder]);
                    console.error(`record submitted under name ${holder} does not have valid sex; placed in Male by default`);
                    break;
            }
        }

        return (
          <div className="flex flex-row justify-around items-start space-x-8">
            {/* Male Section */}
            <div className="ml-40">
              <p className="font-[Graduate] text-lg mb-2">Male</p>
              <ul>
                {male.map(([d, t, h]: [string, string, string]) => (
                  <li key={t} className="font-[Graduate]">{`Distance: ${d}, time: ${t}, holder: ${h}`}</li>
                ))}
              </ul>
            </div>

            {/* Female Section */}
            <div className="mr-40">
              <p className="font-[Graduate] text-lg mb-2">Female</p>
              <ul>
                {female.map(([d, t, h]: [string, string, string]) => (
                  <li key={t} className="font-[Graduate]">{`Distance: ${d}, time: ${t}, holder: ${h}`}</li>
                ))}
              </ul>
            </div>
          </div>
        );
    }

    return(
      <div>
        <TabMenu />

        <center>
          <p className="font-[Graduate]"> The fastest times by distance in club history! </p>
          <br />
          {showRecords()}
        </center>
      </div>
    );
}