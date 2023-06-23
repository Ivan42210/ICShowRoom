import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"

export default function Layout(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                </Routes>
            </Router>
        </>
    )
}