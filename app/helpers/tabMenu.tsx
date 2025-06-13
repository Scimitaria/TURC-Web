import Link from "next/link";

//tab menu for navigation

export function TabMenu(){
  return(
    <div>
      {/* buttons for tab menu */}
      <center>
        <div className="tab inline-flex">
          <Link href={`/home`} className="tablinks bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold font-[Graduate] py-2 px-4 rounded-l"
            id="defaultOpen">Home
          </Link>
          <Link href={`/hof`} className="tablinks bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold font-[Graduate] py-2 px-4"
            id="defaultOpen"> Hall of Fame
          </Link>
          <Link href={`/records`} className="tablinks bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold font-[Graduate] py-2 px-4"
            id="defaultOpen">Records
          </Link>
          <Link href={`/login`} className="tablinks bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold font-[Graduate] py-2 px-4 rounded-r"
            id="defaultOpen">Login
          </Link>
        </div>
      </center>
    </div>  
  )
};
