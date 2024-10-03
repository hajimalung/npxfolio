import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body"
import './App.css';
import { Outlet } from "react-router-dom";


const App = ()=>{
  return (
      <div className="app-container">
          <Header />
          <Outlet />
          <Footer />
      </div>);
}

export default App;
