import React from "react";

// Nav랑 Footer를 가져옴
import Nav from './Nav'
import Footer from './Footer'


function App({children}){
    return(
        <div id="wrap">
            <Nav />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}



export default App