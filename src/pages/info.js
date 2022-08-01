import React from "react";



function Info(){
    return(
        <>
        <article id="info">
            <h3>Info</h3>
            <dl>
                <dt>Phone number :</dt>
                <dd>010-3208-1776</dd>
            </dl>
            <dl>
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
        </article>
        </>
    )
}



export default Info