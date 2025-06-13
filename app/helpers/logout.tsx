'use client'

import { useRouter } from "next/navigation"

//logout button

export default function Logout(){
  const router = useRouter();

  function logout(){
    //get cookie to delete
    //auth is the login cookie, so we delete it to log out
    var cookie='auth'

    //send cookie to signout for deletion
    //on confirmation that cookie deletion has occurred,
    //reload page to switch to logged out version
    fetch('/api/signout', {credentials:'include',method:'POST',body:JSON.stringify({cookie})})
      .then(response=>response.json())
      .then(value=>{if(value.check=='success')router.push('/home')})
  }

  //logout button
  return(
      <button className="bg-gray-300 hover:bg-gray-400 text-black font-[Graduate] px-1 rounded-sm border-2 border-blue-300" onClick={logout}>
        Logout
      </button>
  );
};
