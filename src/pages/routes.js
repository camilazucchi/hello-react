import Home from "@component/pages";
import Custom404 from "@component/pages/404";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./about";

export default function Routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Custom404 />} />
            </Routes>
        </BrowserRouter>
    )
}