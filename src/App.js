import Home from "./routes/home/home.componet";
import Navigation from "./routes/navigation/navigation.component";

import {Routes, Route, Outlet } from "react-router-dom"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
      <Route index element={<Home/>}/> 
      </Route>
    </Routes>
  )
};

export default App;
