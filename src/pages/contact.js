import React from "react";

import "./contact.css"


function Contact(){
    return(
        <>
        <article id="contact">
            <h3>Contact</h3>
            <form action="#" method="post">
                <fieldset>
                    <legend className="hide">contact폼</legend>
                    <ul>
                        <li>
                            <label htmlFor="userTel">Phone</label>
                            <input type="tel" id="userTel" placeholder="010-0000-0000" required />
                        </li>
                        <li>
                            <label htmlFor="userName">Name</label>
                            <input type="text" id="userName" placeholder="홍길동" required />
                        </li>
                        <li>
                            <label htmlFor="userEmail">Email</label>
                            <input type="email" id="userEmail" placeholder="ex) MyFlower01@flower.co.kr" required />
                        </li>
                    </ul>
                    <p>
                        <input type="submit" value="확인" />
                    </p>
                </fieldset>
            </form>
        </article>
        </>
    )
}



export default Contact