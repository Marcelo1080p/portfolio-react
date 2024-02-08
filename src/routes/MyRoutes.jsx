import "./index.css"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Content } from "../components/content/Content";

export const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Content><Home/></Content>}/>
            </Routes>
        </Router>
    )
};