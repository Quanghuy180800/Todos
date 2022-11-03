import "./App.css";
import Header from "./Component/layout/header";
import Sidebar from "./Component/layout/sidebar";
import Card from "./Component/Card/Cards";
import CreateTask from "./Component/Task/createtask";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <Header />
      <Sidebar />
      <Routes>

      <Route path="/" element={<Card />} />

      <Route path="/create" element={<CreateTask />} />
     

      </Routes>


    
    </>
  );
}

export default App;
