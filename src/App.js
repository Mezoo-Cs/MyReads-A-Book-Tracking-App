import { Route , Routes } from "react-router-dom";
import { NotFound } from "./components/404.js";
import { Details } from "./components/details.js";
import { Main } from "./components/main.js";
import { Navbar } from "./components/navbar.js";
import { Search } from "./components/search.js";


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
