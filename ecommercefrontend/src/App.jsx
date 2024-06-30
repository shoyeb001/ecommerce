
import {Routes, Route} from "react-router-dom";
import Login from "@/pages/login/Login.jsx";
import Layout from "@/layout/Layout.jsx";
function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/login" element={<Login/>}/>

            </Route>
        </Routes>
    </>
  )
}

export default App
