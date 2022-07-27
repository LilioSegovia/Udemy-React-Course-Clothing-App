import Home from "./routes/home/home.componet";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

import {Routes, Route} from "react-router-dom"

const Shop = () => {
  return<h1>I am the Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
      <Route index element={<Home/>}/> 
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign-In" element={<SignIn/>}/>
      </Route>
    </Routes>
  )
};

export default App;
