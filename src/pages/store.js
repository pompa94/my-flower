import React, { useState,useCallback,useEffect } from "react";

import "./store.css"



function AddList({itemData}){
    return(
        <>
            <figure>
                <img src={itemData.image} alt={itemData.title} />
                    <figcaption>
                        <dl>
                            <dt>{itemData.title}</dt>
                            <dd>
                                <dl>
                                    <dt>color</dt>
                                    <dd>{itemData.color}</dd>
                                </dl>
                                <dl>
                                    <dt>type</dt>
                                    <dd>{itemData.type}</dd>
                                </dl>
                                <dl>
                                    <dt>price</dt>
                                    <dd>{itemData.price}원</dd>
                                </dl>
                            </dd>
                        </dl>
                        <p>
                            <button>상세보기</button>
                        </p>
                    </figcaption>
            </figure>
        </>
    )
}



function AddFilter({onColorChange,onTypeChange}){
    return(
            <div>
                <dl>
                    <dt>All flower</dt>
                    <dd>
                        <label>All</label>
                        <input type="checkbox" name="all" defaultValue="all"/>
                    </dd>
                </dl>
                <dl>
                    <dt>Color</dt>
                    <dd>
                        <dl>
                            <dd>
                                <label>red</label>
                                <input type="checkbox" name="color" defaultValue="red"
                                onChange={
                                    (e)=>{onColorChange(e.target.value)}
                                }/>
                            </dd>
                            <dd>
                                <label>pink</label>
                                <input type="checkbox" name="color" defaultValue="pink"
                                onChange={
                                    (e)=>{onColorChange(e.target.value)}
                                }/>
                            </dd>
                            <dd>
                                <label>green</label>
                                <input type="checkbox" name="color" defaultValue="green"
                                onChange={
                                    (e)=>{onColorChange(e.target.value)}
                                }/>
                            </dd>
                            <dd>
                                <label>white</label>
                                <input type="checkbox" name="color" defaultValue="white"
                                onChange={
                                    (e)=>{onColorChange(e.target.value)}
                                }/>
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
                                <input type="checkbox" name="type" defaultValue="flower"
                                onChange={
                                    (e)=>{onTypeChange(e.target.value)}
                                }/>
                            </dd>
                            <dd>
                                <label>herb</label>
                                <input type="checkbox" name="type" defaultValue="herb"
                                onChange={
                                    (e)=>{onTypeChange(e.target.value)}
                                }/>
                            </dd>
                            <dd>
                                <label>cactus</label>
                                <input type="checkbox" name="type" defaultValue="cactus"
                                onChange={
                                    (e)=>{onTypeChange(e.target.value)}
                                }/>
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
    )
}




function Store(){

    const [list,setList] = useState([])

    const [original,setOriginal] = useState()

    const fetchData = useCallback(
        ()=>{
          /* fetch 안에 결로 입력 index.html의 위치에서 찾아가야됨 */
          fetch('./data.json')
          .then(response => response.json())
          .then(data => 
            {setList(data),
            setOriginal(data)})
        },[]
      )
    
      
    
      // useEffect
      useEffect(()=>{fetchData()},[fetchData])


    return(
        <>
        <article className="store">
            <h3>our store</h3>

            <AddFilter 
            onColorChange={myColor=>{
                const result = original.filter((item)=>item.color === myColor)
                setList(result)
            }}
            onTypeChange={myType=>{
                const result2 = original.filter((item)=>item.type === myType)
                setList(result2)
            }}
            />

            <section className="storeList">
                
                {
                    list.map(
                        (itemData)=>(
                        <AddList 
                        key={itemData.id}
                        itemData={itemData}
                        />
                        )
                    )
                }
                {/* <figure>
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
                </figure> */}
                {/* <figure>
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
                </figure> */}
            </section>
        </article>
        </>
    )
}



export default Store