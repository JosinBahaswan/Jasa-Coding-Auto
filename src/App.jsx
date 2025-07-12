import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "services":
        return <Services />;
      case "pricing":
        return <Pricing />;
      case "contact":
        return <Contact />;
      case "testimonials":
        return <Testimonials />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
