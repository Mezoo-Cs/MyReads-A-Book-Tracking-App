import { Route , Routes } from "react-router-dom";
import { NotFound } from "./components/404.jsx";
import { Details } from "./components/details.jsx";
import { Main } from "./components/main.jsx";
import { Navbar } from "./components/navbar.jsx";
import { Search } from "./components/search.jsx";


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route exact path = "/" element = {<Main/>} />
        <Route path = "/search" element = {<Search/>} />
        <Route path = "/details/:id" element = {<Details/>} />
        <Route path="/*" element = {<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
