import { cookies } from "next/headers";

//verifies login status

export default async function auth(){
    //get auth token
    const cookieStore = await cookies();
    const authToken = cookieStore.get('auth')?.value;

    //return login status
    return authToken!=null&&authToken!=undefined;
}
