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
        </div>
      </center>
    </div>  
  )
};
