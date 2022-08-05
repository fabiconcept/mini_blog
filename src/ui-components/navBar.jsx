import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from "../img/logo.svg";
import MobileNav from './mobile-nav';

const NavBar = () => {
    const [classes, setClass] = useState("");
    const [ani, setAni] = useState("");
    const navigate = useHistory()
    const [path, setPath] = useState(0);    
    const [hamburger, setHamburger] = useState(false)
    const [activeDiv, setActiveDiv] =useState(0)

    const setScrolled = () =>{
        let scroll = window.scrollY;
        if (scroll > 100) {
            setClass("nav-scrolled");
        }else{
            setClass("");
        }
    }

    const url = (navigate.location.pathname).toString();

    useEffect(()=>{
        if (navigate.location.pathname === "/") {
            setAni("move-home .55s ease forwards");
            setActiveDiv(0)
        }else if (navigate.location.pathname === "/blog") {
            setAni("move-blog .55s ease forwards");
            setActiveDiv(1)
        }else if (url.search("/blog/") === 0) {
            setAni("move-blog .55s ease forwards");
            setActiveDiv(1)
        }else if (navigate.location.pathname === "/about") {
            setActiveDiv(2)
            setAni("move-about .55s ease forwards");
        }
        document.addEventListener("scroll", ()=>{
            setScrolled();
        })
    }, [path])

    return (
        <div className={`nav-bar ${classes}`} onMouseLeave={()=>setHamburger(false)}>
            <div className="logo">
                <img src={logo} alt="" />
                <span className="p">LaCulers</span>
            </div>
            <div className="urls">
                <li onClick={()=>setPath(path+1)} className={`${activeDiv === 0 && 'active'}`}><Link to="/">Home</Link></li>
                <li onClick={()=>setPath(path+1)} className={`${activeDiv === 1 && 'active'}`}><Link to="/blog">Blog posts</Link></li>
                <li onClick={()=>setPath(path+1)} className={`${activeDiv === 2 && 'active'}`}><Link to="/about">About</Link></li>
                <div className="marker" style={{animation: `${ani}`}}>
                    <div className="big"></div>
                    <div className="small"></div>
                </div>
            </div>
            <div className="btns">
                <div className="btn-con">Log in</div>
            </div>
            <div className={`ham ${hamburger ? "ham x": 'ham close-x'}`} onClick={()=>setHamburger(!hamburger)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <MobileNav
                stats ={hamburger}
                
            />
        </div>
    )
}

export default NavBar