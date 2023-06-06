import React from "react";
import "./Navbar.scss";
import Netflix from "@/assets/images/Netflix.png";


export const Navbar: React.FC = () => (

    <nav className="navbar">
        <div>
            <img src={Netflix} alt="NetflixLogo" ></img>
        </div>
    </nav>

);