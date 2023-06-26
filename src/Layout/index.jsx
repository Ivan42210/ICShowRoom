import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Test from "../TestPage"

export default function Layout(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </Router>
        </>
    )
}