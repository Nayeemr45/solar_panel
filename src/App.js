import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomaPage from "./Pages/HomaPage";
import Footer from "./components/Footer";
import SolarCalculator from "./Pages/SolarCalculator";
import { Route } from "react-router-dom";
import Contact from "./Pages/Contact";

function App() {
  const [isinsolar, setisinsolar] = useState(false)
  const handleisinsolar = () => {
    setisinsolar(true)
  }
  const RedirectToContact = () =>
    (window.location.href =
      "https://crm.zohopublic.eu/crm/WebFormServeServlet?rid=d302f483e07795da470689ec9773a874f6eaca660d781895b55dda6abc9610aegid3b0e7af9423f3554b3adbd01629e1dde50ff73a452093fb8ac937f45411a64d8");
  return (
    <div className="App">
      <Navbar />
      <Route path={"/"} exact>
        <HomaPage />
      </Route>
      <Route path={"/SolarCalculator"} >
        <SolarCalculator handleisinsolar={handleisinsolar}/>
      </Route>
      <Route path={"/Contact"} ><Contact/></Route>
      <Footer isinsolar={isinsolar}/>
    </div>
  );
}

export default App;
