import React from "react";

import "./store.css"


function Store(){
    return(
        <>
        <article className="store">
            <h3>our store</h3>
            <div>
                <dl>
                    <dt>All flower</dt>
                    <dd>
                        <label>All</label>
                        <input type="checkbox" name="all" value="all"/>
                    </dd>
                </dl>
                <dl>
                    <dt>Color</dt>
                    <dd>
                        <dl>
                            <dd>
                                <label>red</label>
                                <input type="checkbox" name="color" value="red"/>
                            </dd>
                            <dd>
                                <label>pink</label>
                                <input type="checkbox" name="color" value="pink"/>
                            </dd>
                            <dd>
                                <label>yellow</label>
                                <input type="checkbox" name="color" value="yellow"/>
                            </dd>
                            <dd>
                                <label>green</label>
                                <input type="checkbox" name="color" value="green"/>
                            </dd>
                            <dd>
                                <label>white</label>
                                <input type="checkbox" name="color" value="white"/>
                            </dd>
                            <dd>
                                <label>purple</label>
                                <input type="checkbox" name="color" value="purple"/>
                            </dd>
                            <dd>
                                <label>orange</label>
                                <input type="checkbox" name="color" value="orange"/>
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>type</dt>
                    <dd>
                        <dl>
                            <dd>
                                <label>flower</label>
                                <input type="checkbox" name="type" value="flower" />
                            </dd>
                            <dd>
                                <label>herb</label>
                                <input type="checkbox" name="type" value="herb" />
                            </dd>
                            <dd>
                                <label>cactus</label>
                                <input type="checkbox" name="type" value="cactus" />
                            </dd>
                        </dl>
                    </dd>
                </dl>
                <dl>
                    <dt>price</dt>
                    <dd>
                        <dl>
                            <dd>
                                <label>~ 10,000원</label>
                                <input type="checkbox" name="price" value="10000" />
                            </dd>
                            <dd>
                                <label>~ 20,000원</label>
                                <input type="checkbox" name="price" value="20000" />
                            </dd>
                            <dd>
                                <label>~ 30,000원</label>
                                <input type="checkbox" name="price" value="30000" />
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </div>
            <section className="storeList">
                <figure>
                    <img src="../source/pic01.jpg" alt="제품01" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic02.jpg" alt="제품02" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic03.jpg" alt="제품03" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic04.jpg" alt="제품04" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src="../source/pic05.jpg" alt="제품05" />
                    <figcaption>
                        <dl>
                            <dt>title</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>red</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>flower</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>10000원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
                </figure>
            </section>
        </article>
        </>
    )
}



export default Store