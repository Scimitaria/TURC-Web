import { NextRequest,NextResponse } from "next/server"
import { cookies } from 'next/headers'

//handles cookie deletion on signout

export async function POST(request:NextRequest){
    try{
        //deletes cookie specified by logout
        //this is auth
        let body=await request.json();
        var cookie;
        var { cookie }=body;
        (await cookies()).delete(cookie);

        //send confirmation of cookie deletion to logout
        return NextResponse.json({ check:'success' });
    }catch(err){
        console.error(err);
        return NextResponse.json({ check:'failure' });
    }
}
