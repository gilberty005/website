import React from "react";
import './notfound.css'; 
import { Link } from 'react-router-dom';
 
export function Notfound() {
    return (
        <div className = "notfound__main">
            <h1 className="gradient__text">How did you get here? You shouldn't be here.</h1>
                <Link to="/">
                    <button>Go home</button>
                </Link>
        </div>
    )
}