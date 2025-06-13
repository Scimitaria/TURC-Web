import { NextRequest, NextResponse } from "next/server"
import { cookies } from 'next/headers'
import data from '../../helpers/auth.json'

//handles login cookies

export async function POST(request: NextRequest) {
    try {
        //get login details from login.tsx
        let body = await request.json()
        var {username,password} = body;

        //get cookies
        const cookieStore = await cookies();

        //set cookies if login successful
        var isLoggedIn=false;
        for (const {u,p} of data){
            if(u==username&&p==password){
                isLoggedIn=true;
                cookieStore.set('auth','');
            }
        }

        //send login status to login
        return NextResponse.json({ isLoggedIn:isLoggedIn });
    }catch(error){
        console.error(error);
        return NextResponse.json({ isLoggedIn: false });
    }
}