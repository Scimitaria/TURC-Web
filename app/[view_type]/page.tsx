import Home from "./home";
import Hall from "./hall";
import Records from "./records";
import LoginPage from "./loginPage";

import auth from "@/app/helpers/auth";

//handles navigation between pages

export default async function Page({ params }: { params: { view_type: string } }) {
    //params have to be awaited for some reason
    const p=await params;

    //get login status from auth
    //==true to check against undefined
    const loggedIn=(await auth())==true;

    //select which page to view based on url
    //ex. localhost:3000/home => p.view_type = 'home'
    //also passes login status to ech page's propss
    const renderPage = () => {
        switch (`${p.view_type}`) {
            case 'home':
                return (
                  <>
                    <Home isLoggedIn={loggedIn}/>
                  </>
                );
            case 'hof':
                return (
                  <>
                    <Hall />
                  </>
                );
            case 'records':
                return (
                  <>
                    <Records/>
                  </>
                );
            case 'login':
                return (
                  <>
                    <LoginPage isLoggedIn={loggedIn}/>
                  </>
                );
            {/* if url is invalid */}
            {/* this should never happen organically */}
            default:console.log(`ERROR: ${p.view_type} is not a valid page name`)
        }
    }

    return renderPage()
}