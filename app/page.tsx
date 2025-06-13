import Home from "./[view_type]/home";

//initial page

export default function Page() {
  return (
    <div>
      {/* pages are stored in [view_type] */}
      <Home isLoggedIn={false}/>
    </div>
  );
}
