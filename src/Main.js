import React from "react";

// 라우터깔고 연결
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// App가져오기
import App from './component/App'

// 페이지 가져오기
import Homepage from "./pages/Homepage";
import Contact from "./pages/contact";
import Info from "./pages/info";
import Product from "./pages/product";
import Store from "./pages/store";

function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/list01" element={<Store />} />
                    <Route path="/list02" element={<Product />} />
                    <Route path="/list03" element={<Contact />} />
                    <Route path="/list04" element={<Info />} />
                </Routes>
            </App>
        </BrowserRouter>
    )
}





export default Main