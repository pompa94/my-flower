import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css"



function Nav(){
    return(
        <div id="header">

            <nav>
                <h1>
                    <Link to="/">Flower in your mind</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/list01">Store</Link>
                    </li>
                    <li>
                        <Link to="list02">Product</Link>
                    </li>
                    <li>
                        <Link to="list03">Contact</Link>
                    </li>
                    <li>
                        <Link to="list04">Info</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}



export default Nav