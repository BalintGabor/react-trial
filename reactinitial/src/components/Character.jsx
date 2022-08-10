import React, { useState } from 'react'
import "./Character.css"

function Character ({ name, details}) {

    const [isVisible, setVisible] = useState(false)
    const [buttonText, setButtonText] = useState("Show more")

    const visibibilityHandler = () => {
        setVisible(!isVisible) // ! ellenkező érték
        textChange();
    }

    const textChange = () => {
        /*if (buttonText === "Show more") {
            setButtonText("Show less")
        } else setButtonText("Show more")*/
        buttonText === "Show more" ? setButtonText("Show less") : setButtonText("Show more")
    }

    return (
        <>
            <h2>{name}</h2>
            <p className={isVisible ? "" : "hidden"}>{details}</p>
            <button onClick={visibibilityHandler}>{buttonText}</button>
        </>
    )
}

export default Character