import { useState } from 'react'
import {Routes , Route, Navigate} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [IsAuth, setIsAuth] = useState(false)

  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/admin" element={<ProtectedRoute isAuth={IsAuth}><Admin /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App;
