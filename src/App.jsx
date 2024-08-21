import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (

    <Routes>
      <Route path='/' element={<HomePage />}/> 
      <Route path='cadastro' element={<Cadastro />}/>
      <Route path='login' element={<Login />}/>
      <Route path='dashboard' element={<Dashboard />}/>
    </Routes>

  )
}