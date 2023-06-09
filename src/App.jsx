import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./components/CartContainer";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [member,setMember]=useState(false);
  return (
    <BrowserRouter>
      <Navbar user={user} member={member} setMember={setMember}/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} setMember={setMember}/>}
        />
        <Route
          path="/cartcontainer"
          element={
            <ProtectedRoute user={user}>
              <CartContainer user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
