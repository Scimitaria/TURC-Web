'use client'

import { useRouter } from "next/navigation"
import React, { useState } from 'react';

//login vfx and logic handling

export default function Login() {
  const router=useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //on login button or enter key press
  const handleSubmit = (e:any) => {
    //prevents builtin default form action
    e.preventDefault();

    //sends login info to signin/route
    //then gets response and checks it
    //if true, reloads page to switch page version to logged in
    fetch('/api/signin', {credentials: 'include',method:'POST',body:JSON.stringify({username,password})})
      .then(response=>response.json())
      .then(value=>{if(value.isLoggedIn==true){router.push('/home')}})

    //clear fields
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      {/* onSubmit automatically includes enter key press */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* username textfield */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="font-[Volkhov] text-center"
          />
          </div>

          {/* password textfield */}
          <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="font-[Volkhov] text-center"
          />
        </div>

        {/* the login button having type="submit" makes it trigger onSubmit */}    
        <button type="submit" className="bg-gray-300 hover:bg-gray-400 text-black font-[Volkhov] px-1 rounded-sm border-2 border-blue-300">Login</button>
      </form>
    </div>
  );
}