import React from "react";

import "./info.css"

function Info(){
    return(
        <>
        <article id="info">
            <h3>Info</h3>
            <section>
                <dl className="phone">
                    <dt>Phone number :</dt>
                    <dd>010-3208-1776</dd>
                </dl>
                <dl className="adress">
                    <dt>Adress :</dt>
                    <dd>Mapo Seoul</dd>
                </dl>
                <ul>
                    <li>
                        <a href="#">
                            <img src="./source/twitter.png" alt="인스타그램" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./source/facebook.png" alt="인스타그램" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./source/instagram.png" alt="인스타그램" />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
        </>
    )
}



export default Info