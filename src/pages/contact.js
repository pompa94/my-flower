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
                            <label htmlFor="userTel">전화번호</label>
                            <input type="tel" id="userTel" placeholder="Tel" required />
                        </li>
                        <li>
                            <label htmlFor="userName">이름</label>
                            <input type="text" id="userName" placeholder="Name" required />
                        </li>
                        <li>
                            <label htmlFor="userEmail">전자우편</label>
                            <input type="email" id="userEmail" placeholder="Email" required />
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