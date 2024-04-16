import { useState } from "react";
import React from 'react';
import "./inputtext.css";
import Footer from "./Footer";


const Searchtext = ({}) => {
    const [text ,useText]= useState("text please!")
   
    
    function handeleonch(e) {
        
        useText(e.target.value)

    }
    function handeleup() {
        let newstr= text.toUpperCase()
        useText(newstr)
    }
    function handelelc(){
        let newstr=text.toLowerCase()
        useText(newstr)
    }
    function handelecz(){
        let newstr = text.split(" ");
        newstr = newstr.map((m) => m.charAt(0).toUpperCase() + m.slice(1));
        useText(newstr.join(" "));
    }
    const words = text.split(" ").filter(word => word !== "").length;
    function cleartext(){
        let newstr= " "
        useText(newstr)
        
       
    } 
    async function copytext(){
        await (navigator.clipboard.writeText(text))
        if(text===" "){
            alert("NO TEXT TO COPY ")
        }else{
            alert("TEXT COPIED TO CLIPBOARD")
        }
       
      
        
    }
    function countLengthExcludingSpaces(str) {
        return text.replace(/\s+/g,'').length;
    }
    const lengthExcludingSpaces = countLengthExcludingSpaces();
    const value =((words*0.65).toFixed(2));
   
    
      
    
    
    return (
        <div className="appcontent">
           
            <h1>Enter text :</h1>
            <textarea className="area" value = {text} onChange={handeleonch} id="mybad" cols="30" rows="15"></textarea>
            <br/>
            <button onClick={handeleup} className="upbtn">UPPERCASE</button>
            <button onClick={handelelc} className="upbtn">LOWERCASE</button>
            <button onClick={handelecz} className="upbtn">CAPATALIZE</button>
            <button onClick={cleartext} className="upbtn">CLEAR</button>
            <button onClick={copytext} className="upbtn">COPY</button>
            <div className="usertext">
                <p>The number of characters in the above text are:- {lengthExcludingSpaces}</p>
                <p>The number of words in the above text are {words}</p>
                <p>Average reading time:-&nbsp;{value} sec</p>
            </div>
            <Footer></Footer>
            
        </div>
    );
}

export default Searchtext;
