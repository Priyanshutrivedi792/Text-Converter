import React, { useState } from 'react';
import "./Navbar.css";
import About from './about/About';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



const Navbar = () => {
    const [showAbout, setShowAbout] = useState(false);
    const navigate = useNavigate();
   

    return (
        <>
            <div className='nav-container'>
                    <ol className='nav-bar1'>
                        <li onClick={()=>{
                            navigate("/")
                        }} > Home</li>
                        <li onClick={()=>{
                            navigate("/about")
                        }} > About</li>
                        <li onClick={()=>{
                            navigate("/contact")
                        }} > Contact</li>
                    </ol>
               
            </div>
            
        </>
    );
}

export default Navbar;
