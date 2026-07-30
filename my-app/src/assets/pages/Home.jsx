import React, { useEffect, useState } from "react";
import samsung from "../Images/samsung.png";
import product from "../json/products";
import { useNavigate } from "react-router-dom";
function Home() {
let a=20
let naviagte=useNavigate()

console.log("home comp 1st rendering");

useEffect(() => {
 console.log("home comp 1st rendering prevented by use effect");
}, [])


// let[stateVariable_name,StateFunction_name]=useState(value)

  let[count,setCount]=useState(0)
  let [text , setText]=useState("")
  function increase(){
    if(count < 10){
       setCount(++count)
    }
    else{
      setText(text="max limit reached")
    }
   
  }

  function decrease(){

    if(count > 0){
      setCount(--count)
    }
    else{
      setText(text="min limit reached")
    }
  }
  
return (
    <>
      <div id="home">
        <h1 className="text-danger">Home</h1>
        <div className="row">
          {
            product.map((v,i)=>(
              <div className="col-lg-4" key={i} >
                <div className="card">
                  <img src={v.image} alt="" height="200px" width="100%" onClick={()=>naviagte(`/product/${v.id}`)}/>
                  <div className="card-body">
                    <span>{v.name}</span><br />
                    <span>{v.price}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


         <button onClick={increase}>+</button> 
         <h1>{count}</h1>
         <button onClick={decrease}>-</button> 
          <h1>{text}</h1>
    </>
  );
}

export default Home;
