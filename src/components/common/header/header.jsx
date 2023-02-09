import React from "react"
import { link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src="./images/logo.png" alt="" />
                    </div>
                    <div className="nav">
                        <ul>
                            {navigator.maxTouchPoints((list, index) => (<li key={index}>
                                <link to={list.path}>{list.text}</link>
                            </li>))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header