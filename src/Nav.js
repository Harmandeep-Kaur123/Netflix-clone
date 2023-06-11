import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css';

function Nav(){
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
    //scroll listener
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY >100){
                handleShow(true);
            }
            else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll",null);
        }; 
    }, []);

    return(
        <div className={`nav ${show && "nav_black"}`}>
            <img
                onClick={()=> navigate('/')}
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
                alt="Netflix Logo"
            />
            <img
                onClick={()=> navigate('/profile')}
                className='nav_avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Avatar"
            />

        </div>
    )
}

export default Nav